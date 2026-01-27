---
layout: default
title: Resources on Large Language Models (LLMs)
---

<h2 style="font-size: 1.8em; margin-bottom: 10px;">📚 Resources on Large Language Models</h2>
<p style="font-size: 1.05em;">
  A curated collection of <strong>books</strong>, <strong>courses</strong>, 
  <strong>datasets</strong>, and <strong>tools</strong> covering 
  <strong>Large Language Models</strong> (LLMs). Use the search bar below to 
  quickly find resources by title, domain, or description.
</p>

<!-- Slim Toolbar -->
<div id="resToolbar" class="toolbar" style="display:none;">
  <div class="left">
    <div class="search">
      <label for="resSearch"><strong>Search</strong></label>
      <input id="resSearch" type="search"
             placeholder="🔍 Search title, domain, description…"
             inputmode="search" />
      <button id="resetResSearch" type="button" aria-label="Clear search">Clear</button>
      <span id="resVisibleCount" class="small" aria-live="polite"></span>
    </div>
  </div>
</div>

<!-- Loading Indicator -->
<div id="loading" role="status" aria-live="polite">
  <p>Loading Resources Explorer …</p>
</div>

<!-- Cards View (auto-built from the lists below) -->
<div id="cardsGrid" class="cards" style="display:none;" aria-live="polite"></div>
<p id="emptyState" class="empty" style="display:none;">No resources match your search.</p>

<!-- Hidden Data Table (engine only) -->
<table id="resources-table" class="display stripe hover" style="width:100%; display:none;">
  <thead>
    <tr>
      <th>TitleHTML</th>
      <th>Category</th>
      <th>Subcategory</th>
      <th>DescHTML</th>
      <th>raw</th>
      <th>url</th>
      <th>domain</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

<!-- Source content (rendered Markdown but hidden from users) -->
<details id="resourcesContent" markdown="1" hidden aria-hidden="true">
  <summary>Hidden resources source</summary>

## 📚 Essential Books on AI, Machine Learning, and Large Language Models
 
- [**Deep Learning**](https://amzn.to/4hf31ss) — *Ian Goodfellow, Yoshua Bengio, and Aaron Courville*  
  A foundational textbook that covers the principles of deep learning. It provides both theoretical depth and practical insights, making it essential for understanding the architectures that underpin large language models.

- [**Artificial Intelligence: A Modern Approach**](https://amzn.to/4hifs6I) — *Stuart Russell and Peter Norvig*  
  The definitive text on AI fundamentals — from search and planning to probabilistic reasoning and learning. A must-have for anyone who wants a comprehensive grounding in AI concepts.

- [**Machine Learning: A Probabilistic Perspective**](https://amzn.to/4726Y0o) — *Kevin P. Murphy*  
  A rigorous and mathematically rich guide to machine learning through the lens of probability theory, covering everything from Bayesian inference to graphical models.

- [**Natural Language Processing with Transformers**](https://amzn.to/4hkHNcH)— *Lewis Tunstall, Leandro von Werra, and Thomas Wolf*  
  A practical guide to modern NLP with transformer models, focusing on the Hugging Face ecosystem. Ideal for hands-on practitioners building real-world LLM applications.

- [**Transformers for Natural Language Processing**](https://amzn.to/3WgJluG) — *Denis Rothman*  
  An in-depth exploration of transformer architectures from BERT to GPT-3, complete with implementation details and real-world NLP case studies.

- [**GPT-3: Building Innovative NLP Products Using Large Language Models**](https://amzn.to/3W9x4Ix)— *Sandra Kublik, Shubham Saboo, and Dhaval Pattani*  
  A hands-on guide to building applications using GPT-3. Covers prompt design, API integration, and productization strategies for generative AI systems.

- [**Hands-On Large Language Models: Language Understanding and Generation**](https://amzn.to/42O0UpL) 
  A practical toolkit for working with LLMs across copywriting, summarization, and semantic search. Includes fine-tuning, transformer internals, and optimization methods for production use.

- [**AI Engineering: Building Applications with Foundation Models**](https://amzn.to/3KVvTtP) — *Chip Huyen (2025)*  
  A modern, practical playbook for designing, deploying, and maintaining AI systems powered by foundation models. Topics include prompt engineering, RAG, evaluation, fine-tuning, latency/cost trade-offs, and continuous learning loops.

- [**Neural Networks and Deep Learning**](http://neuralnetworksanddeeplearning.com/) — *Michael Nielsen*  
  A classic free online textbook that offers a clear, intuitive introduction to deep learning fundamentals and how neural networks learn from data.

- [**Introduction to Information Retrieval**](https://amzn.to/46Wtd7O)  — *Christopher Manning, Prabhakar Raghavan, and Hinrich Schütze* A foundational reference in search, ranking, and retrieval — essential background for understanding modern RAG systems and embedding-based retrieval in LLMs.

- [**Designing Machine Learning Systems: An Iterative Process for Production-Ready Applications**](https://amzn.to/48GBMoC) — *Chip Huyen* A practical, end-to-end guide to building reliable, scalable, and maintainable machine learning systems through an iterative, data-driven design framework grounded in real-world case studies.

- [**Designing Data-Intensive Applications**](https://amzn.to/4qj9ney) — *Martin Kleppmann*  
  Explains the data systems that power large-scale AI applications. Covers distributed systems, databases, and data pipelines — indispensable for anyone engineering LLM infrastructure.

- [**Pattern Recognition and Machine Learning**](https://amzn.to/4nevdNs) — *Christopher Bishop* A classic and rigorous mathematical treatment of probabilistic machine learning and inference.

- [**Deep Learning for Coders with fastai and PyTorch**](https://amzn.to/48CTtFr) — *Jeremy Howard and Sylvain Gugger* A beginner-to-advanced hands-on guide that teaches deep learning intuitively with code-first examples.

- [**Bayesian Reasoning and Machine Learning**](https://amzn.to/4nc9PbA) — *David Barber* A highly readable book connecting Bayesian modeling to modern ML techniques.

- [**Generative Deep Learning (2nd Edition)**](https://amzn.to/4ndi2wj) — *David Foster* Explores modern generative techniques — VAEs, GANs, diffusion, and transformers — with code examples.

- [**Building LLMs for Production: Enhancing LLM Abilities and Reliability with Prompting, Fine-Tuning, and RAG**](https://amzn.to/471qWrW) - *Louis-François Bouchard & Louie Peters, 2024* A practical, end-to-end guide to designing and deploying reliable LLM applications. 

- [**Practical Deep Learning for Cloud, Mobile, and Edge**](https://amzn.to/4ngwJ1E) — *Anirudh Koul, Siddha Ganju, Meher Kasam* Great for understanding deployment challenges beyond GPUs — how to optimize and serve models efficiently.

- [**Prompt Engineering for Generative AI**](https://amzn.to/4o0zeGF) — *James Phoenix (O’Reilly, 2024)* Practical strategies for designing and evaluating prompts for ChatGPT, Claude, and Gemini-like models.

- [**Machine Learning Engineering**](https://amzn.to/42QiUj7) — *Andriy Burkov* A concise, actionable guide to deploying, monitoring, and scaling ML systems in production.

- [**Reliable Machine Learning: Applying SRE Principles to ML in Production**](https://amzn.to/4otSn3z) — *Cathy Chen, Niall Richard Murphy, Kranti Parisa, D. Sculley, Todd Underwood* A practical guide to applying Site Reliability Engineering (SRE) principles to machine learning. Covers monitoring, governance, and operational best practices for building reliable, accountable ML systems in production.

- [**Mining of Massive Datasets**](https://amzn.to/4oq8rmP) — *Anand Rajaraman, Jeff Ullman, Jure Leskovec* A comprehensive text on large-scale data mining, clustering, and graph algorithms foundational to search systems.

- [**The Alignment Problem**](https://amzn.to/4oqI93M)  — *Brian Christian* A deeply researched look at fairness, ethics, and interpretability challenges in AI systems.

- [**Tools and Weapons**](https://amzn.to/3IVS4zw) — *Brad Smith & Carol Ann Browne (Microsoft)* A thoughtful exploration of how AI reshapes society, privacy, and governance.

- [**Atlas of AI**](https://amzn.to/4qguYnJ) — *Kate Crawford* Investigates the human, environmental, and political costs of AI’s global infrastructure.

- [**Reinforcement Learning: An Introduction (2nd Edition)**](https://amzn.to/4qhiGf3) — *Richard Sutton and Andrew Barto* The gold standard for understanding reinforcement learning, policy gradients, and Q-learning.

- [**Probabilistic Graphical Models: Principles and Techniques**](https://amzn.to/4nwJx4l)— *Daphne Koller and Nir Friedman* A comprehensive text bridging probabilistic reasoning and machine learning.

- [**Speech and Language Processing (3rd Edition, Draft)**](https://amzn.to/4nbERk4) — *Dan Jurafsky and James H. Martin* The authoritative NLP text — currently updated online to cover transformers and deep learning.
  
## 📝🔗 Blog Posts & Useful Links

- [**Agentic AI: On Evaluations**](https://www.ilsilfverskiold.com/articles/agentic-ai-on-evaluations) — common metrics for multi-turn chatbots, RAG, and agentic systems; reviews frameworks like DeepEval, RAGAS, and OpenAI’s Evals library.

- [**Agentic AI: Implementing Long-Term Memory**](https://medium.com/data-science-collective/agentic-ai-implementing-long-term-memory-304be62063cc) — how to equip stateless LLMs with long-term memory so they can recall facts, maintain conversation context, and interconnect knowledge.
  
- [**Agentic RAG: Company Knowledge Slack Agents**](https://www.ilsilfverskiold.com/articles/agentic-rag-company-knowledge-slack-agents) — building an AI knowledge agent that searches internal docs and answers via Slack (or Teams/Discord), using LlamaIndex and Modal.

- [**Agentic AI: Comparing New Open-Source Frameworks**](https://www.ilsilfverskiold.com/articles/agentic-aI-comparing-new-open-source-frameworks) — hands-on testing of open-source agentic frameworks, comparing ease of use and capabilities.

- [**Managing context on the Claude Developer Platform**](https://www.anthropic.com/news/context-management): An introduction to capabilities that enable developers to build AI agents that can handle long-running tasks at higher performance and without hitting context limits or losing critical information.
  
- [**A Postmortem of Three Recent Issues**](https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues?utm_campaign=Data%20Points&utm_medium=email&_hsenc=p2ANqtz-971A2Q1z_Q9JEmIGIT7OPhT0gXZ51ghH1g5Vj-f-ME-152NDOYjJcrpZfAt6M3H52hSr5tcLs72hCYdhe4CUgo9FnSLw&_hsmi=381723746&utm_content=381723746&utm_source=hs_email): A detailed technical post by Anthropic analyzing three overlapping infrastructure bugs (involving context‐window routing, output corruption, and approximate top-k miscompilation) that intermittently degraded Claude’s response quality.
  
- [**Defeating Nondeterminism in LLM Inference**](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/): A technical deep dive published by Thinking Machines AI that explains why operations like atomicAdd introduce nondeterminism in GPU execution, disentangles common misconceptions around “GPU concurrency + floating point math,” and surveys practical strategies to ensure reproducible results in large-scale LLM inference.

- [**AI 2027: Forecasting a Superhuman AI Future**](https://ai-2027.com): A rigorously constructed scenario released on April 3, 2025 by the nonprofit *AI Futures Project*, outlining quantitative forecasts of superhuman AI emerging by 2027 and exploring both acceleration and slowdown paths.

- [**LLM Powered Autonomous Agents**](https://lilianweng.github.io/posts/2023-06-23-agent/): A deep dive into how large language models are powering the next generation of autonomous agents, enabling systems to perform complex tasks with minimal human input.

- [**Google "We Have No Moat, And Neither Does OpenAI"**](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither): Leaked internal Google document discussing the competitive landscape of AI and arguing that neither Google nor OpenAI have sustainable competitive advantages in the long term.

- [**Prompt Engineering**](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/): An introduction to prompt engineering techniques, providing guidelines on how to effectively interact with large language models to obtain the best results.

- [**How does GPT Obtain its Ability? Tracing Emergent Abilities of Language Models to their Sources**](https://yaofu.notion.site/How-does-GPT-Obtain-its-Ability-Tracing-Emergent-Abilities-of-Language-Models-to-their-Sources-b9a57ac0fcf74f30a1ab9e3e36fa1dc1): This article investigates how GPT models acquire their emergent abilities, tracing them back to the training data and architectures used.

- [**Why did all of the public reproduction of GPT-3 fail?**](https://jingfengyang.github.io/gpt): This post explores the difficulties and challenges researchers faced when attempting to reproduce the capabilities of GPT-3, offering insights into why these efforts largely fell short.

- [**Alpaca: Synthetic Data for LLMs**](https://crfm.stanford.edu/2023/03/13/alpaca.html): Stanford's approach to generating synthetic data for fine-tuning large language models using OpenAI's API.

- [**Evol-Instruct: Improving Dataset Quality**](https://arxiv.org/abs/2304.12244): Techniques for enhancing instruction datasets with evolved synthetic data.

- [**Orca: High-Quality Data Generation**](https://arxiv.org/abs/2306.02707): Orca paper explaining how to generate better synthetic data through instruction following and feedback models.

- [**Scaling Laws for LLMs**](https://arxiv.org/pdf/2001.08361.pdf): A study on scaling laws, which predict LLM performance based on model and dataset size.

- [**Chinchilla's Wild Implications**](https://www.lesswrong.com/posts/6Fpvch8RR29qLEWNH/chinchilla-s-wild-implications): Insights into how the scaling laws affect LLMs' computational efficiency.

- [**TinyLlama**](https://github.com/jzhang38/TinyLlama): A project focused on training a Llama model from scratch, providing insights into pre-training LLMs.

- [**BigBench: LLM Benchmarking**](https://github.com/google/BIG-bench): A large-scale benchmark for evaluating LLM capabilities across various tasks.

- [**Training a Causal Language Model from Scratch**](https://huggingface.co/learn/nlp-course/chapter7/6?fw=pt): Hugging Face tutorial on pre-training GPT-2 from scratch using the transformers library.

- [**LLMDataHub: Curated Datasets for LLMs**](https://github.com/Zjh-819/LLMDataHub): Collection of datasets for pre-training, fine-tuning, and RLHF of large language models.

- [**Perplexity in LLMs**](https://huggingface.co/docs/transformers/perplexity): Hugging Face guide on measuring model perplexity for text generation tasks.

- [**Karpathy's Zero to Hero: GPT**](https://www.youtube.com/watch?v=kCc8FmEb1nY): A 2-hour course by Andrej Karpathy on building a GPT model from scratch, focusing on tokenization and transformer fundamentals.

- [**Karpathy's Intro to Tokenization**](https://www.youtube.com/watch?v=jV0GMp8mb5g): A detailed introduction to tokenization for LLMs, explaining how text is processed into tokens for transformer models.
  
- [**Karpathy's LLM Intro Series**](https://www.youtube.com/@AndrejKarpathy): Multiple introductory tutorial videos on LLMs by Andrej Karpathy. A must see. 

## 📺 YouTube Channels for Learning AI/ML

- [**Andrej Karpathy**](https://www.youtube.com/@AndrejKarpathy)  
  1.05M subscribers · 17 videos  
  Deep-dive lectures on neural networks, transformers, and practical ML from a Tesla/OpenAI legend.  

- [**AI Coffee Break with Letitia**](https://www.youtube.com/@AICoffeeBreak)  
  58.1K subscribers · 138 videos  
  Bite-sized, lighthearted explanations of ML concepts and research papers.  

- [**Umar Jamil**](https://www.youtube.com/@umarjamilai)  
  72.4K subscribers · 26 videos  
  Clear tutorials on deep learning and practical ML engineering.  

- [**Simon Oz**](https://www.youtube.com/@szymonozg7862)  
  14.1K subscribers · 23 videos  
  Concise breakdowns of AI concepts, with a focus on accessibility.  

- [**3Blue1Brown**](https://www.youtube.com/@3blue1brown)  
  7.67M subscribers · 220 videos  
  Stunning visual explanations of math foundations for ML (linear algebra, calculus, neural nets).  

- [**GPU MODE**](https://www.youtube.com/@GPUMODE)  
  21.8K subscribers · 121 videos  
  Community-driven channel exploring GPU research, AI scaling, and experiments.  

- [**AI Jason**](https://www.youtube.com/@AIJasonZ)  
  204K subscribers · 76 videos  
  Practical AI tutorials and product-focused ML builds for developers.  

- [**Yannic Kilcher**](https://www.youtube.com/@YannicKilcher)  
  298K subscribers · 478 videos  
  Detailed research paper reviews and commentary on the latest ML/AI trends.  

- [**Artem Kirsanov**](https://www.youtube.com/@ArtemKirsanov)  
  307K subscribers · 47 videos  
  Explains ML/AI concepts with academic rigor — often referencing neuroscience.  

- [**Aleksa Gordić – The AI Epiphany**](https://www.youtube.com/@TheAIEpiphany)  
  61.4K subscribers · 240 videos  
  Step-by-step coding tutorials on deep learning, transformers, and modern AI systems.
  
## Podcasts with Deep Learning Superstars

- [**The AI Alignment Podcast**](https://futureoflife.org/ai-alignment-podcast/): Conversations with leading AI researchers and thinkers like Stuart Russell, Yoshua Bengio, and more, covering cutting-edge research in AI alignment and deep learning.

- [**Lex Fridman Podcast**](https://lexfridman.com/podcast/): Features interviews with AI pioneers like Yann LeCun, Geoffrey Hinton, Demis Hassabis, and Andrej Karpathy, discussing AI, deep learning, and the future of technology.

- [**Machine Learning Street Talk**](https://www.youtube.com/c/MachineLearningStreetTalk): In-depth discussions with AI researchers such as Yannic Kilcher and Connor Leahy, tackling topics in AI ethics, deep learning, and more.

- [**The Gradient Podcast**](https://thegradient.pub/category/podcast/): Interviews with researchers and practitioners in AI, deep learning, and NLP, including guests like Fei-Fei Li and Sebastian Ruder.

- [**TWIML AI Podcast**](https://twimlai.com/tag/podcast/): Host Sam Charrington interviews top minds in AI and machine learning, such as Andrew Ng and Ian Goodfellow, diving deep into industry trends and research breakthroughs.

- [**Data Skeptic**](https://dataskeptic.com/podcast): A podcast covering data science, machine learning, and AI, featuring leading experts from academia and industry, like Charles Isbell and Dario Amodei.

-  [**Andrej Karpathy – Software 3.0**](https://www.youtube.com/watch?v=zjkBMFhNj_g): A visionary keynote at AI Startup School, where Karpathy outlines the shift to “Software 3.0,” a world where foundation models are the new computing platform, and natural language becomes the new programming interface. Drawing on experience at OpenAI, Tesla, and Stanford, he explores how this transformation reshapes software, developer tools, and the future of startups.

- [**Sam Altman on AGI, GPT‑5, and What’s Next – OpenAI Podcast Ep. 1**](https://www.youtube.com/watch?v=DB9mjd-65gw): In the debut episode of the OpenAI Podcast, host Andrew Mayne speaks with Sam Altman about the future of AI — covering GPT‑5, AGI and superintelligence, OpenAI’s internal tools like Operator and Deep Research, AI-powered parenting (with ChatGPT as his personal assistant), and how AI is reshaping scientific workflows and productivity.
  
## 🎓🧠 Courses on Large Language Models (LLMs)

Below is a collection of university and online courses that offer a deep dive into the concepts, tools, and applications of Large Language Models (LLMs). These courses range from theoretical foundations to practical applications in business and data science.

### University Courses

1. [**Stanford University - TECH 16: Large Language Models for Business with Python**](https://continuingstudies.stanford.edu/courses/professional-and-personal-development/large-language-models-for-business-with-python/20232_TECH-16): This course covers the use of LLMs in business applications, with a focus on practical programming with Python. Students learn how to integrate LLMs into business processes to drive innovation and efficiency.

2. [**ETH Zürich - 263-5354-00L: Large Language Models**](https://rycolab.io/classes/llm-s23/): Focused on the theoretical underpinnings and current developments of LLMs, this course covers a broad range of topics from model training to application.

3. [**University of Toronto - COMP790-101: Large Language Models**](https://github.com/craffel/llm-seminar): This seminar-style course reviews the latest research on LLMs, covering both foundational knowledge and emerging trends in their development.

### Online Courses

1. [**Coursera - Natural Language Processing with Transformers**](https://www.coursera.org/learn/transformers): This course introduces transformers, which are the foundation of modern LLMs. It focuses on using transformers for various NLP tasks such as text classification, summarization, and translation.

2. [**DataCamp - Transformer Models for NLP**](https://www.datacamp.com/courses/transformer-models-for-nlp): Learn how to leverage transformer models to perform advanced natural language processing tasks with hands-on coding exercises in Python.

3. [**Udemy - GPT-3 and OpenAI API: A Guide for Building LLM-Powered Applications**](https://www.udemy.com/course/gpt3-openai-api/): This course provides practical insights into using GPT-3 and OpenAI’s API to build applications that utilize LLMs, with a focus on creating conversational agents and content generation.

4. [**DeepLearning.AI - Generative AI with Large Language Models**](https://www.deeplearning.ai/courses/generative-ai-with-llms/): This course from DeepLearning.AI covers the key concepts of generative AI, with a particular focus on LLMs. It includes hands-on practice in fine-tuning LLMs, prompt engineering, and applying these models to real-world use cases.

### 🤖📚 Andrew Ng’s Latest LLM & Generative AI Courses

- [**Generative AI for Everyone**](https://www.deeplearning.ai/courses/generative-ai-for-everyone/): Non-technical introduction to generative AI and large language models, covering prompt engineering, business applications, and strategy. Taught by Andrew Ng.

- [**AI Python for Beginners**](https://www.deeplearning.ai/short-courses/ai-python-for-beginners/): Learn Python API calls, chatbots, debugging, and LLM integrations. Taught by Andrew Ng.

- [**LangChain for LLM Application Development**](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/): Build intelligent LLM apps featuring chains, memory, and QA using LangChain. Co-taught by Andrew Ng and Harrison Chase.

- [**ChatGPT Prompt Engineering for Developers**](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/): Techniques for crafting effective prompts and building bots with the OpenAI API. Co-taught by Andrew Ng and Isa Fulford.

- [**Building Systems with the ChatGPT API**](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/): Develop end-to-end LLM workflows and integrations using the ChatGPT API. Co-taught by Andrew Ng and Isa Fulford.

### 🆕 New Short Courses on DeepLearning.AI

- [**Orchestrating Workflows for GenAI Applications**](https://www.deeplearning.ai/short-courses/orchestrating-workflows-for-genai-applications/): Learn to turn a GenAI or RAG prototype into a production-ready, automated pipeline using Apache Airflow. (by Astronomer)

- [**DSPy: Build and Optimize Agentic Apps**](https://www.deeplearning.ai/short-courses/dspy-build-optimize-agentic-apps/): Build, debug, and optimize AI agents using DSPy and MLflow. (by Databricks) 

- [**Reinforcement Fine-Tuning LLMs with GRPO**](https://www.deeplearning.ai/short-courses/reinforcement-fine-tuning-llms-grpo/): Improve LLM reasoning and performance with reinforcement learning using GRPO (Group Relative Policy Optimization). (by Predibase)

- [**MCP: Build Rich-Context AI Apps with Anthropic**](https://www.deeplearning.ai/short-courses/mcp-build-rich-context-ai-apps-with-anthropic/): Build AI apps that access tools, data, and prompts using Anthropic's Model Context Protocol. (by Anthropic)

- [**Building AI Voice Agents for Production**](https://www.deeplearning.ai/short-courses/building-ai-voice-agents-for-production/): Build responsive, human-like AI voice applications. (by LiveKit and RealAvatar)

- [**LLMs as Operating Systems: Agent Memory**](https://www.deeplearning.ai/short-courses/llms-as-operating-systems-agent-memory/): Build memory-augmented systems with MemGPT agents. (by Letta)

- [**Building Code Agents with Hugging Face smolagents**](https://www.deeplearning.ai/short-courses/building-code-agents-with-hugging-face-smolagents/): Build agents that write and execute code using Hugging Face's smolagents framework. (by Hugging Face)

- [**Building AI Browser Agents**](https://www.deeplearning.ai/short-courses/building-ai-browser-agents/): Build browser agents that navigate and interact with websites reliably. (by AGI Inc)

- [**Getting Structured LLM Output**](https://www.deeplearning.ai/short-courses/getting-structured-llm-output/): Generate structured output to power robust production LLM applications. (by DotTxt)

- [**Vibe Coding 101 with Replit**](https://www.deeplearning.ai/short-courses/vibe-coding-101-with-replit/): Learn to build and deploy AI coding agents in a web-based IDE. (by Replit)

- [**Long-Term Agentic Memory with LangGraph**](https://www.deeplearning.ai/short-courses/long-term-agentic-memory-with-langgraph/): Build long-memory agents using LangGraph and LangMem. (by LangChain)

- [**Event-Driven Agentic Document Workflows**](https://www.deeplearning.ai/short-courses/event-driven-agentic-document-workflows/): Process documents and fill forms using agent workflows with RAG. (by LlamaIndex)

- [**Build Apps with Windsurf’s AI Coding Agents**](https://www.deeplearning.ai/short-courses/build-apps-with-windsurf-ai-coding-agents/): Debug and deploy applications with Windsurf’s AI-powered IDE. (by Windsurf)

- [**Evaluating AI Agents**](https://www.deeplearning.ai/short-courses/evaluating-ai-agents/): Evaluate, improve, and iterate on AI agents using structured assessments. (by Arize AI)

- [**Attention in Transformers: Concepts and Code in PyTorch**](https://www.deeplearning.ai/short-courses/attention-in-transformers-concepts-and-code-in-pytorch/): Implement the attention mechanism in PyTorch and understand its impact. (by StatQuest)

- [**How Transformer LLMs Work**](https://www.deeplearning.ai/short-courses/how-transformer-llms-work/): A visual and code-based introduction to the architecture behind modern LLMs. (by Jay Alammar & Maarten Grootendorst)

- [**Building Towards Computer Use with Anthropic**](https://www.deeplearning.ai/short-courses/building-towards-computer-use-with-anthropic/): Learn how AI assistants can perform real tasks on computers. (by Anthropic)

- [**Build Long-Context AI Apps with Jamba**](https://www.deeplearning.ai/short-courses/build-long-context-ai-apps-with-jamba/): Create apps that handle long documents using the Jamba model. (by AI21 Labs)

- [**Reasoning with o1**](https://www.deeplearning.ai/short-courses/reasoning-with-o1/): Learn how to use and prompt OpenAI's o1 model for reasoning tasks. (by OpenAI)

- [**Collaborative Writing and Coding with OpenAI Canvas**](https://www.deeplearning.ai/short-courses/collaborative-writing-and-coding-with-openai-canvas/): Collaborate with AI to write and code using OpenAI Canvas. (by OpenAI)
  
## Tools & Packages

- [**LangChain**](https://python.langchain.com/docs/get_started/introduction): A framework for building LLM-powered applications with modular integrations, memory, and chaining prompts.

- [**LlamaIndex**](https://gpt-index.readthedocs.io/en/latest/): Connects LLMs with external data like documents and databases, ideal for knowledge-augmented applications.

- [**Dyson**](https://github.com/turing-technologies/dyson): Enables dynamic instruction tuning and fine-tuning of LLMs with custom prompts and instructions.

- [**LangGraph**](https://github.com/langchain-ai/langgraph): Integrates LLMs with graph-based data, enhancing structured data querying and reasoning.

- [**DeepSpeed**](https://www.deepspeed.ai/): Optimizes large model training with techniques like ZeRO, quantization, and memory efficiency.

- [**Hugging Face Transformers**](https://huggingface.co/docs/transformers): Provides tools for using, fine-tuning, and deploying transformer models like GPT and BERT.

- [**OpenRouter**](https://openrouter.ai/): An open-source alternative for routing prompts through multiple LLM APIs like GPT-4 and Claude.

- [**Guidance**](https://github.com/guidance-ai/guidance): A library to guide and structure LLM outputs programmatically for complex tasks.

- [**Haystack**](https://haystack.deepset.ai/overview/intro): A framework for building scalable LLM-powered search and retrieval systems, including RAG pipelines.

- [**FastRAG**](https://github.com/IntelLabs/fastRAG): Efficient framework for low-latency, scalable Retrieval-Augmented Generation (RAG) pipelines.

- [**DSPy**](https://github.com/stanfordnlp/dspy): A library that allows you to optimize prompts and LLM outputs through programmatic evaluation.


## 📚 LLM & AI Resources from Chip Huyen's AI Engineering and Designing Machine Learning Systems Books

Curated from Chip Huyen’s writing and references — spanning foundations, deployment, evaluation, optimization, and best practices.

### 🗂️ Data, Datasets & Data Engineering
- AWS’s Open Data — [Link](https://registry.opendata.aws/)
- Data.gov — [Link](https://data.gov)
- Dataset Search (Google) — [Link](https://datasetsearch.research.google.com/)
- Annotation Best Practices (Grammarly, 2022) — [Link](https://www.grammarly.com/blog/engineering/annotation-best-practices/)
- Deduplicating Training Data Makes LMs Better (Lee et al., 2021) — [Link](https://arxiv.org/abs/2107.06499)
- What Makes Good Data for Alignment? (Michael et al., 2023) — [Link](https://arxiv.org/abs/2305.17147)
- Will We Run Out of Data? (Villalobos et al., 2022) — [Link](https://arxiv.org/abs/2201.07311)
- A Beginner’s Guide to Data Engineering (Chang, 2018) — [Link](https://medium.com/@rchang/a-beginners-guide-to-data-engineering-part-i-4227c5c457d7)
- Data Engineering for Scaling LMs to 128K Context (Yu et al., 2024) — [Link](https://arxiv.org/abs/2402.10171v1)
- Data Science Project Quick-Start (Eugene Yan, 2022) — [Link](https://eugeneyan.com/writing/project-quick-start/)

### ⚙️ Training, Scaling & Optimization
- A Recipe for Training Neural Networks (Karpathy, 2019) — [Link](http://karpathy.github.io/2019/04/25/recipe/)
- Chinchilla: Compute-Optimal Training (DeepMind, 2022) — [Link](https://arxiv.org/abs/2203.15556)
- Scaling Laws for Generative Modeling (Kaplan et al., 2020) — [Link](https://arxiv.org/abs/2001.08361)
- Training Compute-Optimal LLMs (Hoffmann et al., 2022) — [Link](https://arxiv.org/abs/2203.15556)
- LongNet: Scaling Transformers to 1B tokens (Ding et al., 2023) — [Link](https://arxiv.org/abs/2307.02486)
- FlashAttention-2 (Dao et al., 2023) — [Link](https://arxiv.org/abs/2307.08691)
- LoRA & QLoRA: Efficient Fine-Tuning — [LoRA](https://arxiv.org/abs/2106.09685), [QLoRA](https://arxiv.org/abs/2305.14314)
- SetFit: Few-shot Fine-tuning (Tunstall et al., 2022) — [Link](https://arxiv.org/abs/2209.11055)
- Post-Training Quantization (Frantar et al., 2022/23) — [Link](https://arxiv.org/abs/2210.17323), [Link](https://arxiv.org/abs/2310.02451)
- Efficient Training Methods: Fill-in-the-Middle (Wang et al., 2022) — [Link](https://arxiv.org/abs/2207.14255)

### 📝 Surveys & Overviews
- Hallucinations in LLMs: A Survey (Ji et al., 2023) — [Link](https://arxiv.org/abs/2302.03629)
- LLMs with Tool Augmentation: A Survey (Huang et al., 2023) — [Link](https://arxiv.org/abs/2307.02783)
- Retrieval-Augmented Generation: A Survey (Guu et al., 2023) — [Link](https://arxiv.org/abs/2301.00375)
- Reinforcement Learning with Human Feedback: A Survey (Zhou et al., 2023) — [Link](https://arxiv.org/abs/2307.12966)
- Towards Reasoning in Large LMs: A Survey (Qiao et al., 2023) — [Link](https://arxiv.org/abs/2309.09690)
- Scaling Transformers to Longer Contexts: A Survey (Chen et al., 2023) — [Link](https://arxiv.org/abs/2307.02486)
- Multimodal Transformers: A Survey (Tsai et al., 2023) — [Link](https://arxiv.org/abs/2306.14876)
- XAI for LLMs: A Survey (Shen et al., 2023) — [Link](https://arxiv.org/abs/2307.10803)
- A Survey of Model Compression & Acceleration (Cheng et al., 2017) — [Link](https://arxiv.org/abs/1710.09282)
- A Review of Domain Adaptation without Target Labels (Kouw et al., 2019) — [Link](https://ieeexplore.ieee.org/abstract/document/8861136)


### 🧪 Evaluation & Benchmarks
- HELM: Holistic Evaluation of LMs (Liang et al., 2022) — [Link](https://arxiv.org/abs/2211.09110)
- Beyond Accuracy: CheckList (Ribeiro et al., 2020) — [Link](https://aclanthology.org/2020.acl-main.442/)
- TruthfulQA (Lin et al., 2021) — [Link](https://arxiv.org/abs/2109.07958)
- Replicable and Reproducible Evaluation (Yuan et al., 2023) — [Link](https://arxiv.org/abs/2306.05685)
- Real World LLM Benchmarks (LMSys, 2023) — [Link](https://llmbench.ai/)
- Stanford CRFM Foundation Model Evaluation (2023) — [Link](https://crfm.stanford.edu/2023/06/27/evaluating-llms.html)
- The State of LLM Evaluation** (Liu et al., 2023) — [Link](https://arxiv.org/abs/2311.08773)
  
### 💡 Prompt Engineering, Agents & Interaction
- Prompt Engineering Guide (DAIR.AI) — [Link](https://github.com/dair-ai/Prompt-Engineering-Guide)
- Anthropic’s Prompt Engineering Tutorial — [Link](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8/edit#gid=1733615301)
- Brex’s Prompt Engineering Guide — [Link](https://github.com/brexhq/prompt-engineering)
- Humanloop Prompt Engineering Guide — [Link](https://humanloop.gitbook.io/prompt-engineering-guide/)
- The Prompt Report (2023) — [Link](https://www.promptingguide.ai/)
- ReAct: Reason + Act (Yao et al., 2022) — [Link](https://arxiv.org/abs/2210.03629)
- Toolformer** (Schick et al., 2023) — [Link](https://arxiv.org/abs/2302.04761)
- LLMs as Software Engineers (Mokady et al., 2023) — [Link](https://arxiv.org/abs/2305.17216)
- Generative Agents: Simulated Humans (Park et al., 2023) — [Link](https://arxiv.org/abs/2304.03442)
- Unlocking the Power of LLM Agents (Shinn et al., 2023) — [Link](https://arxiv.org/abs/2309.00603)

### 🧰 Open Source Tools & Leaderboards
- Hugging Face Open LLM Leaderboard — [Link](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
- Paper with Code LLM Leaderboard — [Link](https://paperswithcode.com/leaderboard/large-language-models)
- BertViz — [Link](https://github.com/jessevig/bertviz)
- OpenAI Cookbook — [Link](https://github.com/openai/openai-cookbook)
- LlamaIndex — [Link](https://github.com/jerryjliu/llama_index)
- PEFT (Parameter-Efficient Fine-Tuning) — [Link](https://github.com/huggingface/peft)
- GPT-Engineer — [Link](https://github.com/AntonOsika/gpt-engineer)
- Guardrails AI — [Link](https://github.com/shreyashankar/gpt-guardrails)
- OpenPrompt — [Link](https://github.com/thunlp/OpenPrompt)

### 📝 Applications & Case Studies
- 150 Successful ML Models: Lessons from Booking.com (Bernardi et al., KDD 2019) — [Link](https://blog.kevinhu.me/2021/04/25/25-Paper-Reading-Booking.com-Experiences/bernardi2019.pdf)
- “Like Having a Really Bad PA”: User Expectations of Chatbots (Luger & Sellen, 2016) — [Link](https://dl.acm.org/doi/abs/10.1145/2858036.2858288)
- Applied LLMs (Yan et al., 2024)— [Link](https://applied-llms.org/)
- Introducing Claude (Anthropic, 2023) — [Link](https://www.anthropic.com/index/introducing-claude)
- GitHub Copilot Investigation (GitClear, 2023) — [Link](https://blog.gitclear.com/github-copilot-investigation/)
- A Deep Dive into Smart Email AI (Jayathilaka, 2023) — [Link](https://www.shortwave.com/blog/deep-dive-into-worlds-smartest-email-ai/)
- Interchain Foundation’s Cosmos GPT Agent — [Link](https://blog.cosmos.network/interchain-foundations-cosmos-gpt-agent-d1a18b1297fe)
- Calibration for Netflix Recommenders (Steck, 2018) — [Link](https://dl.acm.org/doi/10.1145/3240323.3240372)

### 🔒 Safety, Ethics & Society
- On the Dangers of Stochastic Parrots (Bender et al., 2021) — [Link](https://dl.acm.org/doi/10.1145/3442188.3445922)
- Hallucinations in LLMs: A Survey (Ji et al., 2023) — [Link](https://arxiv.org/abs/2302.03629)
- Failure Modes of LLMs (Anthropic, 2023) — [Link](https://www.anthropic.com/index/failure-modes-of-llms)
- Constitutional AI (Anthropic, 2022) — [Link](https://arxiv.org/abs/2212.08073)
- We Are All Guinea Pigs Now (Timnit Gebru, 2023) — [Link](https://www.technologyreview.com/2023/06/20/1075536/timnit-gebru-responsible-ai/)
- Language Tech is Power: Bias in NLP (Blodgett et al., 2020) — [Link](https://arxiv.org/abs/2005.14050)

### 📰 Industry, Deployment & Systems
- The LLM App Stack (Huyen, 2023) — [Link](https://huyenchip.com/2023/06/23/llm-stack.html)
- Application Deployment Strategies (Google) — [Link](https://cloud.google.com/solutions/application-deployment-and-testing-strategies)
- Automated Canary Analysis at Netflix (Graff & Sanden, 2018) — [Link](https://netflixtechblog.com/automated-canary-analysis-at-netflix-with-kayenta-3260bc7acc69)
- AI Datacenter Energy Dilemma (SemiAnalysis, 2024) — [Link](https://www.semianalysis.com/p/ai-datacenter-energy-dilemma-race)
- AI Models Are Devouring Energy (MIT Lincoln Lab, 2023) — [Link](https://www.ll.mit.edu/news/ai-models-are-devouring-energy-tools-reduce-consumption-are-here-if-data-centers-will-adopt)

### 📈 Trends & Market Perspectives
- 16 Things Changing with Generative AI in Enterprises (a16z, 2023) — [Link](https://a16z.com/2023/10/16/16-things-changing-with-generative-ai-in-enterprises/)
- Generative AI Is Not as Disruptive as You Think (Mollick, 2023) — [Link](https://oneusefulthing.org/p/generative-ai-is-not-as-disruptive)
- The Future of Open Source LLMs (Huyen, 2023) — [Link](https://huyenchip.com/2023/09/07/future-of-open-source-llms.html)
- Generative AI Market Map (Sequoia Capital, 2023) — [Link](https://www.sequoiacap.com/article/generative-ai-act-two/)
- State of AI Report (State of AI, 2023) — [Link](https://www.stateof.ai/)
- AI and the Future of Work (MIT Sloan, 2023) — [Link](https://sloanreview.mit.edu/article/ai-and-the-future-of-work/)
  
## 🗂️🔍 Other Collections of Related Work

- [**Awesome-LLM: a curated list of Large Language Models**](https://github.com/Hannibal046/Awesome-LLM): A comprehensive and well-maintained repository that curates resources, papers, tools, and frameworks related to Large Language Models (LLMs). It covers a wide range of topics including model architectures, training techniques, and applications.
  
</details>

<style>
  :root{
    --bg:#ffffff;
    --card:#fff;
    --muted:#6b7280;
    --line:#e5e7eb;
    --shadow:0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.04);
    --brand:#1a73e8;
  }

  /* Non-sticky, with category dividers */
  html { scroll-behavior: smooth; }
  .toolbar, .jumpbar, .cat-divider { position: static !important; }

  .toolbar{
    z-index:auto; background:#fff; border:1px solid var(--line);
    border-radius:12px; padding:10px 12px; margin:8px 0 12px;
    display:flex; align-items:center; gap:12px; box-shadow:var(--shadow);
    max-width:100%; box-sizing:border-box;
  }
  .toolbar .left{ flex:1 1 auto; min-width:0; }

  .search{
    display:flex; align-items:center; gap:.6rem; flex-wrap:wrap;
    width:100%; max-width:100%;
  }
  .search label{ font-weight:700; font-size:.85rem; }
  .search input{
    flex:1 1 240px;       /* grow within the card, shrink if needed */
    min-width:0;          /* allow shrinking without overflow */
    width:auto;           /* no fixed width */
    padding:.5rem .7rem;
    border:1px solid #cbd5e1; border-radius:8px;
    font-size:.95rem; background-color:#f8fafc;
    box-sizing:border-box;
  }
  .search input:focus{ outline:none; border-color:var(--brand); box-shadow:0 0 0 2px rgba(26,115,232,.18); }
  .search button{
    padding:.5rem .7rem; font-size:.85rem;
    border:1px solid #cbd5e1; border-radius:8px; background:#f8fafc; cursor:pointer;
    flex:0 0 auto;
  }
  .search button:hover{ background:#eef2f7; }
  .small{ color:var(--muted); font-size:.9em; }

  .jumpbar{
    display:flex; flex-wrap:wrap; gap:8px; padding:8px 0 12px; margin:0 0 8px;
    background:#fff;
  }
  .jumpbar a{
    display:inline-block; padding:.25rem .6rem;
    border:1px solid var(--line); border-radius:999px;
    text-decoration:none; color:#0f172a; font-size:.85rem;
  }
  .jumpbar a:hover{ background:#f3f4f6; }

  .cards{
    display:grid; gap:14px;
    grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
  }

  .cat-divider{
    grid-column:1 / -1;
    font-size:1.05rem; font-weight:800; letter-spacing:.02em;
    margin:24px 0 6px; padding-top:12px;
    scroll-margin-top:24px;
  }
  .cat-divider::after{
    content:"";
    display:block; height:1px; margin-top:6px;
    background:repeating-linear-gradient(
      90deg, var(--line), var(--line) 8px, transparent 8px, transparent 16px
    );
  }

  .card{
    border:1px solid var(--line); border-radius:14px; background:var(--card);
    padding:14px; box-shadow:var(--shadow); transition:transform .06s ease;
    display:flex; flex-direction:column; gap:6px; min-width:0; cursor:pointer;
  }
  .card * { min-width:0; }
  .card:hover{ transform:translateY(-1px); }
  .meta{ display:flex; align-items:center; gap:8px; margin-bottom:2px; color:var(--muted); font-size:.85rem; flex-wrap:wrap; }
  .favicon{ width:16px; height:16px; border-radius:4px; background:#f3f4f6; }

  .title{
    font-weight:700; line-height:1.25; margin:2px 0 2px;
    display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2;
    overflow:hidden; word-break:break-word; overflow-wrap:anywhere;
  }
  .title a{ text-decoration:none; color:#0f172a; }
  .title a:hover{ text-decoration:underline; }

  .desc{
    color:#374151; font-size:.95rem; line-height:1.45;
    display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:4;
    overflow:hidden; word-break:break-word; overflow-wrap:anywhere;
  }

  .badges{ display:flex; align-items:center; gap:6px; margin-top:6px; flex-wrap:wrap; }
  .badge{
    font-size:.75rem; border:1px solid var(--line); color:#0f172a; padding:.2rem .45rem;
    border-radius:999px; background:#f7f7fb; cursor:pointer;
  }

  .empty{ color:#6b7280; text-align:center; padding:24px 8px; }

  .dataTables_wrapper{ width:100%; overflow-x:hidden; }
  #resources-table{ width:100%; border-collapse:collapse; table-layout:auto; }
  #resources-table td{ white-space: normal !important; word-break: break-word; overflow-wrap:anywhere; vertical-align: top; }
  #resources-table th{ white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis; vertical-align: middle; }
  .dataTables_filter{ display:none !important; }

  #loading{
    position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
    font-size:1.05em; text-align:center; z-index:1000;
    background:white; padding:.8em 1.2em; border:1px solid #ccc; border-radius:8px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
  }

  @media (max-width: 640px){
    .toolbar{ border-radius:10px; }
    .desc{ -webkit-line-clamp: 6; }
  }
</style>

<link rel="stylesheet" href="{{ '/assets/vendor/datatables-1.13.6.min.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/vendor/dataTables.responsive-2.5.0.min.css' | relative_url }}">
<script src="{{ '/assets/vendor/jquery-3.6.0.min.js' | relative_url }}" defer></script>
<script src="{{ '/assets/vendor/datatables-1.13.6.min.js' | relative_url }}" defer></script>
<script src="{{ '/assets/vendor/dataTables.responsive-2.5.0.min.js' | relative_url }}" defer></script>

<script>
(function(){
  function waitForDT(cb, tries = 80){
    if (window.jQuery && jQuery.fn && jQuery.fn.dataTable) return cb();
    if (tries <= 0) return cb(new Error('DataTables not loaded'));
    setTimeout(() => waitForDT(cb, tries - 1), 100);
  }
  function ready(fn){
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once:true });
    } else { fn(); }
  }

  function readHashQuery(){
    const raw = window.location.hash ? window.location.hash.slice(1) : '';
    if (!raw) return '';
    try { return decodeURIComponent(raw.replace(/\+/g,' ')); } catch { return raw; }
  }
  function setHash(q){
    if (q && q.trim().length) history.replaceState(null, '', '#' + encodeURIComponent(q.trim()));
    else history.replaceState(null, '', location.pathname + location.search);
  }

  function textContentTrim(node){ return (node ? node.textContent : '').replace(/\s+/g,' ').trim(); }
  function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
  function domainFromUrl(u){ try{ return new URL(u, location.origin).hostname; } catch(e){ return ''; } }
  function faviconForDomain(d){ return d ? 'https://www.google.com/s2/favicons?domain='+encodeURIComponent(d)+'&sz=32' : ''; }
  function debounce(fn, ms=120){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }
  function slugify(s){ return (s||'uncategorised').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

  const loadingEl = document.getElementById('loading');
  const toolbarEl = document.getElementById('resToolbar');
  const inputEl   = document.getElementById('resSearch');
  const resetEl   = document.getElementById('resetResSearch');
  const countEl   = document.getElementById('resVisibleCount');
  const gridEl    = document.getElementById('cardsGrid');
  const emptyEl   = document.getElementById('emptyState');
  const contentEl = document.getElementById('resourcesContent');
  const jumpBarEl = document.getElementById('jumpBar');

  let datatable;

  function updateVisibleCount(){
    if (!datatable || !countEl) return;
    countEl.textContent = datatable.rows({ filter:'applied' }).count() + ' resources';
  }

  function applyFilter(q){
    if(!datatable) return;
    const query=(q||'').trim();
    if(inputEl) inputEl.value=query;
    datatable.search(query, false, true, true).draw(false);
    setHash(query);
    updateVisibleCount();
  }

  function withRenderedDetails(fn){
    if(!contentEl)return fn();
    const wasHidden = contentEl.hasAttribute('hidden');
    const prevDisplay = contentEl.style.display;
    const prevPos = contentEl.style.position;
    const prevLeft = contentEl.style.left;
    if (wasHidden) contentEl.removeAttribute('hidden');
    contentEl.style.display='block'; contentEl.style.position='absolute'; contentEl.style.left='-99999px';
    const out = fn();
    if (wasHidden) contentEl.setAttribute('hidden','');
    contentEl.style.display = prevDisplay || '';
    contentEl.style.position = prevPos || '';
    contentEl.style.left = prevLeft || '';
    return out;
  }

  function scrapeResources(){
    return withRenderedDetails(()=>{
      const rows = [];
      const walker = document.createTreeWalker(contentEl, NodeFilter.SHOW_ELEMENT, null);
      let currCat = '', currSub = '';

      while (walker.nextNode()){
        const el = walker.currentNode;

        if (/^H2$/i.test(el.tagName)) {
          currCat = textContentTrim(el).replace(/^#+\s*/,'');
          currSub = '';
        } else if (/^H3$/i.test(el.tagName)) {
          currSub = textContentTrim(el).replace(/^#+\s*/,'');
        } else if (/^LI$/i.test(el.tagName)) {
          const a = el.querySelector('a[href]');
          if (!a) continue;
          const url = a.getAttribute('href') || '';
          const title = textContentTrim(a) || '(untitled)';

          let full = textContentTrim(el);
          try{
            full = full.replace(new RegExp('^\\*?\\*?\\s*' + title.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\s*:?\\s*','i'), '');
          }catch{}
          const desc = full;

          const domain = domainFromUrl(url);
          const titleHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>`;
          const descHTML  = desc ? escapeHtml(desc) : '';
          const raw = [title, currCat, currSub, desc, url, domain].join(' ').toLowerCase();

          rows.push([ titleHTML, currCat, currSub, descHTML, raw, url, domain ]);
        }
      }
      return rows;
    });
  }

  function renderCards(){
    if (!datatable) return;
    const rows = datatable.rows({ filter:'applied' }).data().toArray();
    gridEl.innerHTML = '';

    if (!rows.length){
      gridEl.style.display='none';
      emptyEl.style.display='';
      if (jumpBarEl) jumpBarEl.style.display='none';
      updateVisibleCount();
      return;
    }
    emptyEl.style.display='none';
    gridEl.style.display='grid';

    let lastCat = null;
    const catsForJump = [];

    rows.forEach(r => {
      const titleHTML = r[0];
      const cat       = r[1] || 'Uncategorised';
      const subcat    = r[2] || '';
      const descHTML  = r[3];
      const url       = r[5] || '';
      const domain    = r[6] || domainFromUrl(url);

      if (cat !== lastCat){
        const id = 'cat-' + slugify(cat);
        const divider = document.createElement('h2');
        divider.className = 'cat-divider';
        divider.id = id;
        divider.textContent = cat;
        divider.addEventListener('click', ()=> applyFilter(cat));
        gridEl.appendChild(divider);
        catsForJump.push({ cat, id });
        lastCat = cat;
      }

      const card = document.createElement('article');
      card.className = 'card';
      card.setAttribute('data-cat',cat);
      card.setAttribute('data-sub',subcat);
      card.setAttribute('data-domain',domain||'');

      card.innerHTML = `
        <div class="meta">
          <img class="favicon" src="${faviconForDomain(domain)}" alt="" loading="lazy">
          <span class="meta-domain" title="Filter by site">${domain || 'link'}</span>
          ${subcat ? '<span>•</span><button class="badge badge-sub" title="Filter by subcategory">'+escapeHtml(subcat)+'</button>' : ''}
        </div>
        <h3 class="title">${titleHTML}</h3>
        <div class="desc">${descHTML}</div>
        <div class="badges">
          ${subcat ? '<button class="badge badge-sub" title="Filter by subcategory">'+escapeHtml(subcat)+'</button>' : ''}
          <button class="badge badge-cat" title="Filter by category">${escapeHtml(cat)}</button>
        </div>
      `;

      card.addEventListener('click',(e)=>{
        if(e.target.closest('a')) return;
        const subBtn=e.target.closest('.badge-sub');
        const catBtn=e.target.closest('.badge-cat');
        const domEl=e.target.closest('.meta-domain');
        if(subBtn){ applyFilter(subcat); return; }
        if(catBtn){ applyFilter(cat); return; }
        if(domEl){ applyFilter(domain); return; }
        if(url && (e.metaKey||e.ctrlKey)){ window.open(url,'_blank','noopener'); return; }
        applyFilter(subcat || cat || domain || '');
      });

      card.setAttribute('role','group'); card.tabIndex=0;
      card.addEventListener('keydown',(e)=>{
        if(e.key==='Enter'){ applyFilter(subcat || cat || domain || ''); }
        else if((e.key==='o'||e.key==='O') && url){ window.open(url,'_blank','noopener'); }
      });

      gridEl.appendChild(card);
    });

    if (jumpBarEl){
      if (catsForJump.length){
        jumpBarEl.innerHTML = catsForJump.map(c=>`<a href="#${c.id}">${escapeHtml(c.cat)}</a>`).join('');
        jumpBarEl.style.display = '';
      } else {
        jumpBarEl.style.display = 'none';
      }
    }

    updateVisibleCount();
  }

  function start(err){
    try{
      if (err || !window.jQuery || !jQuery.fn || !jQuery.fn.dataTable) {
        if (loadingEl) loadingEl.innerHTML = '<p style="color:#b00020">Failed to load: DataTables missing.</p>';
        return;
      }

      const initialQuery = readHashQuery();
      if (inputEl && initialQuery) inputEl.value = initialQuery;

      const rows = scrapeResources();

      const dt = jQuery('#resources-table').DataTable({
        data: rows,
        columns: [
          { title: "Title"      },
          { title: "Category"   },
          { title: "Section"    },
          { title: "Description"},
          { title: "raw"        },
          { title: "url"        },
          { title: "domain"     }
        ],
        responsive: { details: false },
        autoWidth: false,
        paging: false,
        searching: true,
        order: [[1,'asc'], [2,'asc'], [0,'asc']],
        columnDefs: [
          { targets: [4], visible: false, searchable: true },
          { targets: [5,6], visible: false, searchable: false }
        ],
        initComplete: function(){
          datatable = this.api();

          if (loadingEl) loadingEl.style.display='none';
          toolbarEl.style.display='';
          gridEl.style.display='grid';

          if (initialQuery) datatable.search(initialQuery, false, true, true).draw();

          renderCards();
          datatable.on('draw', renderCards);

          const apply = debounce(() => {
            const q = inputEl ? (inputEl.value || '') : '';
            datatable.search(q, false, true, true).draw(false);
            setHash(q);
          }, 120);

          inputEl.addEventListener('input', apply);
          inputEl.addEventListener('keydown', (e)=>{ if (e.key==='Enter'){ e.preventDefault(); apply(); }});
          resetEl.addEventListener('click', () => {
            inputEl.value=''; datatable.search('', false, true, true).draw(false); setHash(''); inputEl.focus();
          });
          window.addEventListener('hashchange', () => {
            const q = readHashQuery();
            inputEl.value = q;
            datatable.search(q, false, true, true).draw(false);
          });

          document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
              e.preventDefault(); inputEl.focus();
            } else if (e.key === 'Escape') {
              inputEl.value=''; datatable.search('', false, true, true).draw(false); setHash('');
            }
          });

          setTimeout(() => datatable.columns.adjust().draw(false), 60);
          updateVisibleCount();
        }
      });

      if (rows.length === 0){
        gridEl.style.display = 'none';
        if (loadingEl) loadingEl.innerHTML = '<p>No resources detected to index.</p>';
      }

    } catch (e){
      console.error(e);
      if (loadingEl) loadingEl.innerHTML = '<p style="color:#b00020">Failed to load resources.</p>';
    }
  }

  ready(() => waitForDT(start));
})();
</script>

<p style="margin-top:2rem; color:#6b7280; font-size:.95em;">
  Please, feel free to submit a <a href="contributing.html">web form</a> to add more links to this page.
  As an Amazon Associate, this site earns from qualifying purchases. Some links may be affiliate (no extra cost).
</p>
