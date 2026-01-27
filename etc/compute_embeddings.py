import argparse
import json
from timeit import default_timer as timer
from datetime import date

import numpy as np
import torch
import torch.nn.functional as F
import sklearn.manifold
import transformers


def parse_arguments():
    parser = argparse.ArgumentParser(description="TSNE Visualization of Papers")

    parser.add_argument("json", help="Path to the JSON containing all papers.")
    parser.add_argument("outpath", help="Target path for the output JSON with t-SNE embeddings.")
    parser.add_argument("--seed", default=0, help="Seed for TSNE.", type=int)
    parser.add_argument(
        "--model",
        default="sentence-transformers/all-MiniLM-L6-v2",
        help="Name of the Hugging Face model",
    )
    parser.add_argument("--save_emb", action="store_true", help="Save embeddings in TSV for Tensorboard Projector")

    return parser.parse_args()


def mean_pooling(token_embeddings, attention_mask):
    """Mean Pooling, takes attention mask into account for correct averaging"""
    input_mask_expanded = attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
    return torch.sum(token_embeddings * input_mask_expanded, 1) / torch.clamp(input_mask_expanded.sum(1), min=1e-9)


def normalize_authors(authors_field):
    """
    authors_field can be:
      - list[str] (older format)
      - str (your example format: "A, B, C")
      - missing / None
    """
    if authors_field is None:
        return ""
    if isinstance(authors_field, list):
        return ", ".join(str(a) for a in authors_field if a is not None)
    return str(authors_field)


def safe_str(x, default=""):
    if x is None:
        return default
    return str(x)


def main(args):
    tokenizer = transformers.AutoTokenizer.from_pretrained(args.model)
    model = transformers.AutoModel.from_pretrained(args.model)
    model.eval()

    sep = tokenizer.sep_token if getattr(tokenizer, "sep_token", None) else "\n"

    with open(args.json) as f:
        data = json.load(f)

    if not isinstance(data, list):
        raise ValueError("Expected top-level JSON array (list of papers).")

    print(f"Num papers: {len(data)}")

    corpus = []
    for paper_info in data:
        title = safe_str(paper_info.get("title", ""), default="")
        abstract = safe_str(paper_info.get("abstract", ""), default="")
        authors = normalize_authors(paper_info.get("authors", None))

        citations = safe_str(paper_info.get("citations", 0), default="0")
        hf_likes = safe_str(paper_info.get("huggingface_likes", 0), default="0")

        corpus.append(sep.join([title, authors, citations, hf_likes, abstract]))

    batch_size = 4
    all_embeddings = []
    start = timer()

    for i in range(0, len(corpus), batch_size):
        batch_texts = corpus[i : min(i + batch_size, len(corpus))]
        encoded_batch = tokenizer(batch_texts, padding=True, truncation=True, return_tensors="pt")

        with torch.no_grad():
            hidden_state = model(**encoded_batch).last_hidden_state
            all_embeddings.append(mean_pooling(hidden_state, encoded_batch["attention_mask"]))

    all_embeddings = torch.cat(all_embeddings, dim=0)
    all_embeddings = F.normalize(all_embeddings, p=2, dim=1)
    print(f"elapsed {timer() - start:.1f}s")

    if args.save_emb:
        filename = f"{args.model.replace('/', '_')}-{date.today().strftime('%d.%m.%y')}"
        np.savetxt(f"{filename}-emb.tsv", all_embeddings.cpu().numpy(), delimiter="\t")

        import csv

        with open(f"{filename}-meta.tsv", "w", newline="") as csvfile:
            w = csv.writer(csvfile, delimiter="\t", quoting=csv.QUOTE_MINIMAL)
            w.writerow(["year", "key", "title"])
            for paper in data:
                w.writerow([safe_str(paper.get("year", "")), safe_str(paper.get("key", "")), safe_str(paper.get("title", ""))])

    np.random.seed(args.seed)
    out = sklearn.manifold.TSNE(n_components=2, metric="cosine").fit_transform(all_embeddings.cpu().numpy())

    for i, paper_info in enumerate(data):
        paper_info["tsne_embedding"] = out[i].tolist()

    with open(args.outpath, "w") as f:
        json.dump(data, f)


if __name__ == "__main__":
    args = parse_arguments()
    main(args)