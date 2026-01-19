/* public/js/papers-worker.js
 * Builds DataTables rows off the main thread.
 * Expected row format:
 * 0 titleHTML, 1 shortAuthors, 2 year, 3 citations, 4 hfLikes, 5 ghStars, 6 reddit,
 * 7 rawSearch, 8 addedTs, 9 isNew, 10 url, 11 allAuthors
 */

(function () {
  // ---------- helpers ----------
  const postStage = (text) => self.postMessage({ type: "stage", text });
  const postProgress = (i, total) => self.postMessage({ type: "progress", i, total });

  function toNumber(x) {
    if (x === null || x === undefined) return 0;
    if (typeof x === "number") return x;
    const m = String(x).replace(/,/g, "").match(/-?\d+(\.\d+)?/);
    return m ? Number(m[0]) : 0;
  }

  function tsFromAny(x) {
    if (!x) return 0;
    if (typeof x === "number") {
      // allow seconds or ms
      return x > 2e12 ? Math.floor(x / 1000) : Math.floor(x);
    }
    const d = new Date(x);
    const ms = d.getTime();
    return Number.isFinite(ms) ? Math.floor(ms / 1000) : 0;
  }

  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeAuthors(authors) {
    // Accept: string, array of strings, array of {name}, {authors:[...]}
    if (!authors) return [];
    if (Array.isArray(authors)) {
      return authors
        .map((a) => (typeof a === "string" ? a : a?.name))
        .filter(Boolean);
    }
    if (typeof authors === "string") {
      // split common delimiters
      return authors
        .split(/,|;| and /i)
        .map((x) => x.trim())
        .filter(Boolean);
    }
    return [];
  }

  function shortAuthors(list) {
    if (!list || !list.length) return "";
    if (list.length <= 2) return list.join(", ");
    return `${list[0]} et al.`;
  }

  function normalizeTags(tags) {
    // tags can be: string "a,b", array of strings, array of objects
    if (!tags) return [];
    if (Array.isArray(tags)) {
      return tags
        .map((t) => (typeof t === "string" ? t : t?.name))
        .filter(Boolean);
    }
    if (typeof tags === "string") {
      return tags
        .split(/,|;|\|/g)
        .map((x) => x.trim())
        .filter(Boolean);
    }
    return [];
  }

  async function fetchJson(url) {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      const err = new Error(`Fetch failed ${res.status} for ${url}`);
      err.status = res.status;
      throw err;
    }
    return await res.json();
  }

  function coercePaperList(json) {
    // Handle common shapes:
    // 1) array of papers
    // 2) {papers:[...]} / {items:[...]} / {data:[...]}
    if (Array.isArray(json)) return json;
    if (json && Array.isArray(json.papers)) return json.papers;
    if (json && Array.isArray(json.items)) return json.items;
    if (json && Array.isArray(json.data)) return json.data;
    // sometimes: { "<id>": {...}, "<id2>": {...} }
    if (json && typeof json === "object") {
      const vals = Object.values(json);
      if (vals.length && vals.every((v) => v && typeof v === "object" && !Array.isArray(v))) {
        return vals;
      }
    }
    return [];
  }

  function buildHistoryMap(historyJson) {
    // Support:
    // - { "<slug>": 1690000000 }
    // - { "<slug>": {first_ts:..., first_seen:..., ts:...} }
    // - { items: [ {slug, first_ts}, ... ] }
    const map = new Map();

    if (!historyJson) return map;

    const add = (k, v) => {
      if (!k) return;
      const t =
        tsFromAny(v?.first_ts) ||
        tsFromAny(v?.first_seen) ||
        tsFromAny(v?.ts) ||
        tsFromAny(v?.date) ||
        tsFromAny(v);
      if (t) map.set(String(k), t);
    };

    if (Array.isArray(historyJson)) {
      historyJson.forEach((it) => add(it?.slug || it?.key || it?.id || it?.url, it));
      return map;
    }

    if (historyJson && Array.isArray(historyJson.items)) {
      historyJson.items.forEach((it) => add(it?.slug || it?.key || it?.id || it?.url, it));
      return map;
    }

    if (historyJson && typeof historyJson === "object") {
      for (const [k, v] of Object.entries(historyJson)) add(k, v);
    }

    return map;
  }

  function guessUrl(p, baseurl) {
    // Prefer explicit URL fields
    const u =
      p?.url ||
      p?.URL ||
      p?.link ||
      p?.permalink ||
      (p?.slug ? `${baseurl || ""}/publications/${p.slug}.html` : "") ||
      "";
    return u;
  }

  function guessTitle(p) {
    return p?.title || p?.paper?.title || p?.name || "";
  }

  function guessYear(p) {
    return (
      toNumber(p?.year) ||
      toNumber(p?.paper?.year) ||
      (() => {
        const d = p?.date || p?.published || p?.publishedAt || p?.paper?.publishedAt;
        if (!d) return 0;
        const dt = new Date(d);
        const y = dt.getUTCFullYear();
        return Number.isFinite(y) ? y : 0;
      })()
    );
  }

  function metric(p, keys) {
    for (const k of keys) {
      const v = p?.[k] ?? p?.paper?.[k];
      if (v !== undefined && v !== null) return toNumber(v);
    }
    return 0;
  }

  // ---------- worker main ----------
  self.onmessage = async (evt) => {
    try {
      const { indexUrl, fallbackUrl, historyUrl, baseurl, newBadgeDays } = evt.data || {};

      postStage("Loading publications…");

      // Try index first; fall back to full JSON
      let papersJson = null;
      try {
        papersJson = await fetchJson(indexUrl);
      } catch (e) {
        // only fall back on 404/failed fetch
        postStage("Loading full dataset…");
        papersJson = await fetchJson(fallbackUrl);
      }

      postStage("Loading history…");
      let historyJson = null;
      try {
        historyJson = await fetchJson(historyUrl);
      } catch {
        historyJson = null;
      }
      const historyMap = buildHistoryMap(historyJson);

      const papers = coercePaperList(papersJson);

      postStage("Indexing…");

      const nowSec = Math.floor(Date.now() / 1000);
      // Use configurable NEW badge threshold (default 7 days)
      const badgeDays = newBadgeDays || 7;
      const newThreshold = badgeDays * 24 * 3600;

      const rows = new Array(papers.length);

      for (let i = 0; i < papers.length; i++) {
        const p = papers[i] || {};

        const title = guessTitle(p);
        const url = guessUrl(p, baseurl);

        const authorsList = normalizeAuthors(p?.authors ?? p?.paper?.authors ?? p?.all_authors);
        const allAuthors = authorsList.join(", ");
        const shortAuth = shortAuthors(authorsList);

        const year = guessYear(p);

        const citations = metric(p, ["citations", "citation_count", "cited_by_count"]);
        const hfLikes = metric(p, ["huggingface_likes", "hf_likes", "likes"]);
        const ghStars = metric(p, ["github_stars", "gh_stars", "stars"]);
        const reddit = metric(p, ["reddit", "reddit_signal", "reddit_score"]);

        // IMPORTANT: always define tagsList (never refer to bare `tags`)
        const tagsList = normalizeTags(p?.tags ?? p?.paper?.tags ?? p?.tag_list);

        // Added timestamp: prefer explicit, else history map by slug/url/key
        const slugOrKey = p?.slug || p?.bibkey || p?.id || p?.key || url || title;
        const addedTs =
          tsFromAny(p?.added_ts) ||
          tsFromAny(p?.added) ||
          tsFromAny(p?.first_added) ||
          historyMap.get(String(slugOrKey)) ||
          0;

        const isNew = !!(addedTs && nowSec - addedTs <= newThreshold);

        // TitleHTML: keep HTML light; main thread can wrap if missing.
        const safeTitle = escapeHtml(title || "Untitled");
        const titleHTML = url ? `<a href="${escapeHtml(url)}">${safeTitle}</a>` : safeTitle;

        // RawSearch: include title/authors/tags and any optional text fields
        const abstract = p?.abstract || p?.paper?.abstract || p?.summary || "";
        const venue = p?.conference || p?.venue || p?.paper?.conference || "";
        const rawSearch = [
          title,
          allAuthors,
          String(year || ""),
          venue,
          tagsList.join(" "),
          abstract,
          url,
        ]
          .filter(Boolean)
          .join(" ");

        rows[i] = [
          titleHTML,
          shortAuth,
          year || 0,
          citations || 0,
          hfLikes || 0,
          ghStars || 0,
          reddit || 0,
          rawSearch,
          addedTs || 0,
          isNew,
          url,
          allAuthors,
        ];

        if (i % 250 === 0) postProgress(i, papers.length);
      }

      postProgress(papers.length, papers.length);
      self.postMessage({ type: "done", rows });
    } catch (err) {
      self.postMessage({
        type: "error",
        message: err?.message || String(err),
      });
    }
  };
})();
