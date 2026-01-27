// Compact popup chat; improved UX: header+status, jump-to-latest, textarea w/ autoresize,
// smarter autoscroll, clear chat, better keyboard shortcuts, and safer scrolling.

window.ALPChat = (function () {
  // Use site config if available, with fallbacks for standalone use
  const CONFIG = window.SITE_CONFIG || {};
  const CHAT_CONFIG = CONFIG.chat || {};
  
  const API_BASE = CONFIG.api?.base || "https://awesome-llm-papers.tinyapps.run";
  const BOT_NAME = CHAT_CONFIG.botName || CONFIG.title + " AI Agent" || "Paper Search AI Agent";
  const PLACEHOLDER = CHAT_CONFIG.placeholder || "Ask about papers… (Enter to send, Shift+Enter for newline)";
  
  let initialized = false;

  // Example queries shown in the welcome intro
  // Mix of natural-language (inferred) + explicit filter syntax
  const EXAMPLE_QUERIES = CHAT_CONFIG.exampleQueries || [
    "deep learning papers by Geoff Hinton",
    "LoRA papers",
    "top Hugging Face liked diffusion transformer papers",
    'author:"Yoshua Bengio" tag:safety',
    "tag:agents",
  ];

  function setStyles(el, styles) {
    if (!el || !styles) return;
    Object.assign(el.style, styles);
  }

  function nowTimeLabel() {
    try {
      return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch (_) {
      return "";
    }
  }

  function mount(mountEl) {
    if (initialized) return;
    if (!mountEl) return;
    initialized = true;

    mountEl.innerHTML = `
      <div class="chatbox">
        <div class="chat-header" style="
          display:flex; align-items:center; justify-content:space-between;
          gap:10px; padding:10px 12px;
          border-bottom:1px solid rgba(0,0,0,.08);
          background:#fff; position:sticky; top:0; z-index:6;
        ">
          <div style="min-width:0;">
            <div style="font-weight:700; font-size:.95rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${BOT_NAME}
            </div>
            <div id="alp-status" style="color:#6b7280; font-size:.8rem; margin-top:2px;">Idle</div>
          </div>

          <div style="display:flex; gap:8px; align-items:center; flex:0 0 auto;">
            <button id="alp-jump" type="button" style="
              display:none;
              border:1px solid rgba(0,0,0,.12);
              background:rgba(255,255,255,.95);
              border-radius:999px;
              padding:6px 10px;
              cursor:pointer;
              box-shadow:0 10px 24px rgba(0,0,0,.08);
              font-size:.85rem;
              white-space:nowrap;
            " title="Jump to latest (scroll)">Latest ↓</button>

            <button id="alp-clear" type="button" style="
              border:1px solid rgba(0,0,0,.12);
              background:#fff;
              border-radius:10px;
              padding:6px 8px;
              cursor:pointer;
              font-size:.9rem;
            " title="Clear chat">🗑️</button>
          </div>
        </div>

        <div id="messages" class="messages" aria-live="polite" aria-label="Chat messages"></div>

        <div id="loading" style="display:none; text-align:center; padding:8px;">
          <span class="spinner"></span>
          <span id="loading-text">Retrieving response...</span>
          <div id="slow-hint" class="muted" style="display:none; margin-top:6px;">Still working…</div>
        </div>

        <div class="input-area">
          <textarea
            id="query"
            rows="1"
            placeholder="${PLACEHOLDER}"
            class="chat-input"
            inputmode="search"
            style="resize:none; overflow:hidden;"
          ></textarea>

          <div class="btn-row">
            <button id="sendBtn" class="send-button" type="button" disabled>Send</button>
            <button id="stopBtn" class="stop-button" type="button" disabled>Stop</button>
          </div>
        </div>

        <div style="padding:6px 12px 10px; color:#6b7280; font-size:.78rem;">
          Tips: <strong>⌘/Ctrl+K</strong> focus • <strong>Esc</strong> stop • <strong>↑</strong> edit last
        </div>
      </div>
    `;

    const widgetBody = mountEl.closest(".chat-widget__body");
    if (widgetBody) {
      setStyles(widgetBody, { display: "flex", flexDirection: "column", height: "100%", minHeight: "0" });
    }

    const chatboxEl = mountEl.querySelector(".chatbox");
    if (chatboxEl) {
      setStyles(chatboxEl, { display: "flex", flexDirection: "column", height: "100%", minHeight: "0" });
    }

    const messagesDiv = mountEl.querySelector("#messages");
    const inputEl = mountEl.querySelector("#query");
    const sendBtn = mountEl.querySelector("#sendBtn");
    const stopBtn = mountEl.querySelector("#stopBtn");
    const loadingBox = mountEl.querySelector("#loading");
    const loadingTxt = mountEl.querySelector("#loading-text");
    const slowHint = mountEl.querySelector("#slow-hint");
    const inputArea = mountEl.querySelector(".input-area");
    const statusEl = mountEl.querySelector("#alp-status");
    const clearBtn = mountEl.querySelector("#alp-clear");
    const jumpBtn = mountEl.querySelector("#alp-jump");

    setStyles(messagesDiv, {
      flex: "1 1 auto",
      minHeight: "0",
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      padding: "10px",
      boxSizing: "border-box",
    });

    if (inputArea) {
      setStyles(inputArea, { flexShrink: "0", borderTop: "1px solid #ddd", background: "#fff" });
    }

    messagesDiv.setAttribute("tabindex", "0");

    setStyles(mountEl, { display: "flex", flexDirection: "column", height: "100%", minHeight: "0" });
    if (mountEl.parentElement) {
      if (getComputedStyle(mountEl.parentElement).display.includes("flex")) {
        setStyles(mountEl.parentElement, { minHeight: "0" });
      }
    }

    const ensureScrollable = () => {
      if (widgetBody) setStyles(widgetBody, { minHeight: "0", overflow: "hidden" });
      if (chatboxEl) setStyles(chatboxEl, { minHeight: "0", overflow: "hidden" });
      setStyles(messagesDiv, { overflowY: "auto", WebkitOverflowScrolling: "touch" });
    };
    ensureScrollable();

    const ro = "ResizeObserver" in window ? new ResizeObserver(ensureScrollable) : null;
    if (ro) ro.observe(chatboxEl || mountEl);

    let currentController = null;
    let tickTimer = null,
      slowTimer = null,
      clientTimer = null;

    // Autoscroll behavior: only scroll if user is near bottom
    let autoScroll = true;
    const BOTTOM_EPS_PX = 48;

    function isNearBottom() {
      const { scrollTop, scrollHeight, clientHeight } = messagesDiv;
      return scrollHeight - (scrollTop + clientHeight) <= BOTTOM_EPS_PX;
    }

    function updateJumpButton() {
      if (!jumpBtn) return;
      jumpBtn.style.display = autoScroll ? "none" : "inline-flex";
    }

    function scrollToBottom(force = false) {
      if (!force && !autoScroll) return;
      requestAnimationFrame(() => {
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
      });
    }

    messagesDiv.addEventListener("scroll", () => {
      autoScroll = isNearBottom();
      updateJumpButton();
    });

    if (jumpBtn) {
      jumpBtn.addEventListener("click", () => {
        autoScroll = true;
        updateJumpButton();
        scrollToBottom(true);
        inputEl.focus();
      });
    }

    function setStatus(text) {
      if (!statusEl) return;
      statusEl.textContent = text || "Idle";
    }

    function setSendEnabled() {
      const q = (inputEl.value || "").trim();
      sendBtn.disabled = !q || !!currentController;
    }

    // Textarea autoresize
    function autoresizeTextarea() {
      if (!inputEl) return;
      inputEl.style.height = "auto";
      const max = 160; // px (~7-8 lines depending on font)
      const next = Math.min(inputEl.scrollHeight, max);
      inputEl.style.height = `${next}px`;
      inputEl.style.overflowY = inputEl.scrollHeight > max ? "auto" : "hidden";
    }

    let lastUserQuery = "";

    function appendMessage(cls, text) {
      const el = document.createElement("div");
      el.classList.add("message", cls);
      el.textContent = text;
      const t = nowTimeLabel();
      if (t) el.setAttribute("title", t);
      messagesDiv.appendChild(el);
      scrollToBottom();
    }

    function appendMessageHTML(cls, html) {
      const el = document.createElement("div");
      el.classList.add("message", cls);
      el.innerHTML = html;
      const t = nowTimeLabel();
      if (t) el.setAttribute("title", t);
      messagesDiv.appendChild(el);
      scrollToBottom();
      return el;
    }

    function displayBotMessage(text) {
      appendMessage("bot", `${BOT_NAME}: ${text}`);
    }

    function escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function renderExamplesHtml() {
      const items = EXAMPLE_QUERIES.map((q) => {
        const safe = escapeHtml(q);
        return `
          <button
            type="button"
            class="example-query"
            data-q="${safe}"
            style="
              display:block;
              width:100%;
              text-align:left;
              padding:8px 10px;
              margin:6px 0 0 0;
              border:1px solid #e6e6e6;
              border-radius:10px;
              background:#fff;
              cursor:pointer;
              font-size:13px;
              line-height:1.25;
            "
            title="Click to fill the input"
            aria-label="Example query: ${safe}"
          >
            “${safe}”
          </button>
        `;
      }).join("");

      return `
        <div style="margin-top:10px;">
          <div style="color:#666; font-size:12px; margin-bottom:2px;">Try an example:</div>
          ${items}
        </div>
      `;
    }

    function renderWelcome(welcome) {
      const paperTerm = CONFIG.domain?.paperTerm || "papers";
      const defaultWelcome = `Hi! Ask me for relevant ${paperTerm}.`;
      const line =
        typeof welcome === "string" && welcome.trim()
          ? welcome.replace(/\s+/g, " ").trim()
          : defaultWelcome;

      appendMessageHTML(
        "bot",
        `
        <div>
          <p style="margin:0 0 6px 0;"><strong>${escapeHtml(BOT_NAME)}:</strong> ${escapeHtml(line)}</p>
          ${renderExamplesHtml()}
        </div>
        `
      );
    }

    function tryParseJson(x) {
      if (typeof x !== "string") return null;
      const s = x.trim();
      if (!s || (!s.startsWith("{") && !s.startsWith("["))) return null;
      try {
        return JSON.parse(s);
      } catch (_) {
        return null;
      }
    }

    function humanizeIntent(intent) {
      const v = String(intent || "").toLowerCase();
      if (v === "list") return "find and list relevant papers";
      if (v === "explain") return "explain the topic with references";
      if (v === "compare") return "compare papers and summarize differences";
      return intent ? `handle your request (${intent})` : "answer your question";
    }

    function humanizeRetrieval(r) {
      const v = String(r || "").toLowerCase();
      if (v === "hybrid") return "a mix of keyword and semantic matching";
      if (v === "bm25") return "keyword matching";
      if (v === "faiss" || v === "vector") return "semantic matching";
      return r || "search";
    }

    function planToNarrative(planLike) {
      const parsed = typeof planLike === "object" && planLike ? planLike : tryParseJson(planLike);
      const plan = parsed || (typeof planLike === "object" ? planLike : null);

      if (!plan) {
        return `I’ll search the library, rank the most relevant papers, and summarize the best matches.`;
      }

      const retrieval = humanizeRetrieval(plan.retrieval);
      const intent = humanizeIntent(plan.intent);

      const parts = [];
      parts.push(`I’ll ${intent}.`);
      parts.push(`I’ll search using ${retrieval}.`);
      parts.push(`Then I’ll rank the results and return the best matches.`);

      if (plan.need_full_docs === true) parts.push(`If needed, I’ll fetch full documents for deeper details.`);
      if (plan.answer_style) {
        const style = String(plan.answer_style).replace(/_/g, " ").trim();
        parts.push(`I’ll present results as ${style}.`);
      }

      return parts.join(" ");
    }

    function parseKeyValueLine(line) {
      const out = {};
      const s = String(line || "").trim();
      if (!s) return out;

      const rewrittenMatch = s.match(/rewritten\s*=\s*'([^']*)'/i);
      if (rewrittenMatch) out.rewritten = rewrittenMatch[1];

      const tokens = s.split(/\s+/);
      for (const t of tokens) {
        const eq = t.indexOf("=");
        if (eq === -1) continue;
        const k = t.slice(0, eq).trim();
        let v = t.slice(eq + 1).trim();
        if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) {
          v = v.slice(1, -1);
        }
        if (!k) continue;
        out[k] = v;
      }
      return out;
    }

    function stepToFriendlyText(step) {
      if (typeof step === "string") {
        const s = step.trim();
        const cleaned = s.replace(/^Step\s*\d+:\s*/i, "").trim();
        const kv = parseKeyValueLine(cleaned);

        if (kv.rewritten) return `Rewrote your query to: “${kv.rewritten}”.`;

        if (kv.intent || kv.retrieval || kv.bm25_k || kv.faiss_k || kv.final_k) {
          const intent = kv.intent ? humanizeIntent(kv.intent) : null;
          const retrieval = kv.retrieval ? humanizeRetrieval(kv.retrieval) : null;

          const bits = [];
          if (intent) bits.push(`Goal: ${intent}`);
          if (retrieval) bits.push(`Method: ${retrieval}`);
          bits.push(`Scanned and ranked candidate papers.`);
          bits.push(`Selected the best matches for the final response.`);

          return bits.join(" · ") + ".";
        }

        if (kv.label) return `Ran a quick safety/quality check.`;
        if (kv.candidates && kv.retrieval) return `Pulled relevant candidates using ${humanizeRetrieval(kv.retrieval)}.`;
        if (kv.selected) return `Selected the best matches for the final response.`;
        if (kv.model) return `Drafted the response.`;

        return cleaned ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1) : "";
      }

      if (step && typeof step === "object") {
        if (step.rewritten) return `Rewrote your query to: “${step.rewritten}”.`;

        if (step.name) {
          const n = String(step.name).toLowerCase();
          if (n === "moderate") return "Ran a quick safety/quality check.";
          if (n === "rewrite") return "Rewrote and clarified your query.";
          if (n === "retrieve") return "Searched the library and ranked candidate papers.";
          if (n === "synthesize" || n === "final" || n === "answer") return "Drafted the response.";
          if (n === "plan") return "Created a working plan.";
        }

        const detail = step.detail || step.step || step.message || "";
        const maybe = tryParseJson(detail);
        if (maybe) return planToNarrative(maybe);

        if (step.retrieval || step.intent) {
          const intent = step.intent ? humanizeIntent(step.intent) : null;
          const retrieval = step.retrieval ? humanizeRetrieval(step.retrieval) : null;
          const bits = [];
          if (intent) bits.push(`Goal: ${intent}`);
          if (retrieval) bits.push(`Method: ${retrieval}`);
          bits.push(`Scanned and ranked candidate papers.`);
          bits.push(`Selected the best matches for the final response.`);
          return bits.join(" · ") + ".";
        }

        return detail ? String(detail) : "";
      }

      return "";
    }

    function stepsToFriendlyHtml(steps) {
      const arr = Array.isArray(steps) ? steps : [];
      const items = arr
        .map((s) => stepToFriendlyText(s))
        .filter(Boolean)
        .map((t) => `<li>${escapeHtml(t)}</li>`)
        .join("");

      return items ? `<ol class="agent-ol">${items}</ol>` : "";
    }

    // Streaming-friendly agent panel (updates in-place)
    function upsertAgentPanel(panelEl, plan, steps) {
      if (!panelEl) return;

      const narrative = planToNarrative(plan);
      const stepsHtml = stepsToFriendlyHtml(steps);

      panelEl.innerHTML = `
        <div class="agent-card" style="
          border:1px solid #e6e6e6; background:#fafafa; border-radius:12px;
          padding:10px 12px; margin:2px 0 10px 0;
        ">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
            <div style="
              width:10px; height:10px; border-radius:999px; background:#4c8bf5;
              flex:0 0 auto;
            "></div>
            <div style="font-weight:600;">${escapeHtml(BOT_NAME)}</div>
            <div style="color:#666; font-size:12px;">Working plan</div>
          </div>

          <div style="color:#222; line-height:1.35; font-size:14px;">
            ${escapeHtml(narrative)}
          </div>

          ${
            stepsHtml
              ? `
            <details class="agent-details" style="margin-top:8px;">
              <summary style="cursor:pointer; color:#444; font-size:13px;">Show steps</summary>
              <div style="margin-top:6px; color:#444; font-size:13px;">
                ${stepsHtml}
              </div>
            </details>
          `
              : ""
          }
        </div>
      `;

      scrollToBottom();
    }

    // Click-to-fill example queries (delegated)
    messagesDiv.addEventListener("click", (e) => {
      const btn = e.target && e.target.closest ? e.target.closest(".example-query") : null;
      if (!btn) return;
      const q = btn.getAttribute("data-q") || "";
      if (!q) return;
      inputEl.value = q;
      autoresizeTextarea();
      setSendEnabled();
      inputEl.focus();
      scrollToBottom();
    });

    // Clear chat
    function clearChat() {
      messagesDiv.innerHTML = "";
      autoScroll = true;
      updateJumpButton();
      setStatus("Idle");
      renderWelcome();
      inputEl.value = "";
      autoresizeTextarea();
      setSendEnabled();
      inputEl.focus();
      scrollToBottom(true);
    }
    if (clearBtn) clearBtn.addEventListener("click", clearChat);

    // Initial welcome call (non-streaming)
    fetch(`${API_BASE}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_input: "" }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && (data.welcome || data.answer === undefined)) renderWelcome(data.welcome);
        else if (data && data.answer) parseAndDisplayAnswer(data.answer);
        else renderWelcome();
      })
      .catch(() => renderWelcome());

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      const isK = e.key && e.key.toLowerCase() === "k";
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault();
        inputEl.focus();
        return;
      }
      if (e.key === "Escape") {
        // Esc: stop if running; otherwise clear input
        if (currentController) stopRequest();
        else {
          inputEl.value = "";
          autoresizeTextarea();
          setSendEnabled();
          inputEl.focus();
        }
      }
    });

    inputEl.addEventListener("input", () => {
      autoresizeTextarea();
      setSendEnabled();
    });

    inputEl.addEventListener("keydown", (e) => {
      // Enter sends; Shift+Enter newline
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendQuery();
        return;
      }

      // ArrowUp edits last message if input empty
      if (e.key === "ArrowUp") {
        const empty = !(inputEl.value || "").trim();
        if (empty && lastUserQuery) {
          e.preventDefault();
          inputEl.value = lastUserQuery;
          autoresizeTextarea();
          setSendEnabled();
          // move cursor to end
          try {
            inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
          } catch (_) {}
        }
      }
    });

    sendBtn.addEventListener("click", sendQuery);
    stopBtn.addEventListener("click", stopRequest);

    function stopRequest() {
      if (currentController) {
        currentController.abort();
        displayBotMessage("Request cancelled.");
        cleanupLoadingUI();
      }
    }

    // Streaming reader: supports true SSE (event:/data: blocks) AND NDJSON fallbacks.
    async function readStream(res, onEvent) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");

      let buf = "";
      let sseEvent = "";
      let sseDataLines = [];

      function dispatchSseEvent() {
        if (!sseEvent && sseDataLines.length === 0) return;

        const eventName = sseEvent || "message";
        const dataStr = sseDataLines.join("\n").trim();

        sseEvent = "";
        sseDataLines = [];

        if (!dataStr) {
          onEvent({ event: eventName, data: "" });
          return;
        }

        try {
          const obj = JSON.parse(dataStr);
          if (obj && typeof obj === "object") onEvent({ ...obj, event: obj.event || obj.type || eventName });
          else onEvent({ event: eventName, data: obj });
        } catch (_) {
          onEvent({ event: eventName, data: dataStr });
        }
      }

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });

        let idx;
        while ((idx = buf.indexOf("\n")) >= 0) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);

          if (line === "") {
            dispatchSseEvent();
            continue;
          }

          if (line.startsWith(":")) continue;

          if (line.startsWith("event:")) {
            sseEvent = line.slice(6).trim();
            continue;
          }
          if (line.startsWith("data:")) {
            sseDataLines.push(line.slice(5).trim());
            continue;
          }

          const trimmed = line.trim();
          if (!trimmed) continue;

          if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
            try {
              const obj = JSON.parse(trimmed);
              if (obj && typeof obj === "object") onEvent({ ...obj, event: obj.event || obj.type || "message" });
              else onEvent({ event: "message", data: obj });
            } catch (_) {}
            continue;
          }

          if (trimmed.startsWith("data:")) {
            const payload = trimmed.slice(5).trim();
            if (!payload) continue;
            try {
              const obj = JSON.parse(payload);
              if (obj && typeof obj === "object") onEvent({ ...obj, event: obj.event || obj.type || "message" });
              else onEvent({ event: "message", data: obj });
            } catch (_) {
              onEvent({ event: "message", data: payload });
            }
          }
        }
      }

      dispatchSseEvent();

      const rem = buf.trim();
      if (rem) {
        try {
          const obj = JSON.parse(rem);
          if (obj && typeof obj === "object") onEvent({ ...obj, event: obj.event || obj.type || "message" });
          else onEvent({ event: "message", data: obj });
        } catch (_) {}
      }
    }

    function showInlineError(message, retryText) {
      const safeMsg = escapeHtml(message || "Request failed.");
      const safeRetry = escapeHtml(retryText || lastUserQuery || "");
      const html = `
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div><strong>${escapeHtml(BOT_NAME)}:</strong> <span style="color:#b42318;">${safeMsg}</span></div>
          ${
            safeRetry
              ? `<button type="button" class="alp-retry" data-retry="${safeRetry}" style="
                  align-self:flex-start;
                  border:1px solid rgba(0,0,0,.12);
                  background:#fff;
                  border-radius:10px;
                  padding:6px 10px;
                  cursor:pointer;
                  font-size:.9rem;
                ">Retry</button>`
              : ""
          }
        </div>
      `;
      appendMessageHTML("bot", html);
    }

    messagesDiv.addEventListener("click", (e) => {
      const btn = e.target && e.target.closest ? e.target.closest(".alp-retry") : null;
      if (!btn) return;
      const q = btn.getAttribute("data-retry") || "";
      if (!q) return;
      inputEl.value = q;
      autoresizeTextarea();
      setSendEnabled();
      inputEl.focus();
      scrollToBottom();
    });

    async function sendQuery() {
      const query = (inputEl.value || "").trim();
      if (!query || currentController) return;

      lastUserQuery = query;

      appendMessage("user", "You: " + query);
      inputEl.value = "";
      autoresizeTextarea();
      setSendEnabled();

      sendBtn.disabled = true;
      stopBtn.disabled = false;
      loadingBox.style.display = "block";
      slowHint.style.display = "none";
      setStatus("Thinking…");

      const started = Date.now();
      loadingTxt.textContent = "Retrieving response...";
      tickTimer = setInterval(() => {
        const s = Math.floor((Date.now() - started) / 1000);
        loadingTxt.textContent = `Retrieving response... (${s}s)`;
      }, 1000);
      slowTimer = setTimeout(() => {
        slowHint.style.display = "block";
      }, 3000);

      currentController = new AbortController();
      clientTimer = setTimeout(() => currentController.abort(), 120000);

      // Agent panel for this query (updated as chunks arrive)
      const agentPanelWrapper = appendMessageHTML("bot", `<div class="agent-panel"></div>`);
      let latestPlan = null;
      let latestSteps = [];

      function pushStep(stepObj) {
        if (!stepObj) return;
        if (Array.isArray(stepObj.steps)) {
          latestSteps = stepObj.steps;
          return;
        }
        if ("step" in stepObj) {
          latestSteps.push(stepObj.step);
          return;
        }
        if (stepObj.name || stepObj.detail) {
          latestSteps.push({ name: stepObj.name, detail: stepObj.detail });
          return;
        }
        latestSteps.push(stepObj);
      }

      try {
        // Prefer streaming endpoint (SSE)
        let res = await fetch(`${API_BASE}/chat_stream`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_input: query }),
          signal: currentController.signal,
        });

        const contentType = (res.headers.get("content-type") || "").toLowerCase();
        const canStream = res.ok && res.body;

        if (res.status === 429) {
          showInlineError("Rate limit reached, please try again tomorrow.", query);
          return;
        }

        if (!res.ok || !canStream) {
          // Non-streaming fallback
          res = await fetch(`${API_BASE}/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_input: query }),
            signal: currentController.signal,
          });

          const raw = await res.text();
          let data = null;
          try {
            data = JSON.parse(raw);
          } catch (_) {}

          if (res.status === 429) {
            showInlineError("Rate limit reached, please try again tomorrow.", query);
            return;
          }

          if (!res.ok) {
            const errText = data && data.error ? String(data.error) : "";
            if (res.status === 404 && /no matching papers were found/i.test(errText)) {
              showInlineError("I could not find any matching papers. Try different keywords.", query);
              return;
            }
            if (errText) throw new Error(errText);
            throw new Error(`HTTP ${res.status}: ${raw.slice(0, 200)}`);
          }

          if (data && data.welcome) {
            renderWelcome(data.welcome);
            return;
          }

          if (data && (data.plan || data.steps)) {
            latestPlan = data.plan || latestPlan;
            latestSteps = data.steps || latestSteps;
            upsertAgentPanel(agentPanelWrapper, latestPlan, latestSteps);
          }

          if (!data || !("answer" in data)) throw new Error("Malformed response from server (missing 'answer').");
          parseAndDisplayAnswer(data.answer);
          return;
        }

        await readStream(res, (obj) => {
          if (!obj) return;

          const evt = String(obj.event || obj.type || "").toLowerCase();

          if (evt === "meta") {
            if (obj.plan) latestPlan = obj.plan;
            if (Array.isArray(obj.steps)) latestSteps = obj.steps;
            upsertAgentPanel(agentPanelWrapper, latestPlan, latestSteps);
            return;
          }

          if (evt === "step") {
            pushStep(obj);
            upsertAgentPanel(agentPanelWrapper, latestPlan, latestSteps);
            return;
          }

          if (evt === "error") {
            showInlineError(obj.error || obj.message || "Request failed.", query);
            return;
          }

          if (evt === "done" || evt === "final") {
            if (obj.plan) latestPlan = obj.plan;
            if (Array.isArray(obj.steps)) latestSteps = obj.steps;
            upsertAgentPanel(agentPanelWrapper, latestPlan, latestSteps);

            if (obj.answer) parseAndDisplayAnswer(obj.answer);
            return;
          }

          if (obj.plan) latestPlan = obj.plan;
          if (Array.isArray(obj.steps)) latestSteps = obj.steps;
          if (obj.plan || obj.steps) upsertAgentPanel(agentPanelWrapper, latestPlan, latestSteps);
          if (obj.answer) parseAndDisplayAnswer(obj.answer);
        });
      } catch (err) {
        if (err && err.name === "AbortError") {
          showInlineError("Request cancelled.", lastUserQuery);
        } else if (err) {
          showInlineError(`Error - ${err.message || "Unknown network error"}`, lastUserQuery);
        }
      } finally {
        cleanupLoadingUI();
      }
    }

    function cleanupLoadingUI() {
      clearInterval(tickTimer);
      clearTimeout(slowTimer);
      clearTimeout(clientTimer);
      tickTimer = slowTimer = clientTimer = null;

      loadingBox.style.display = "none";
      stopBtn.disabled = true;
      currentController = null;

      setStatus("Idle");
      setSendEnabled();
      inputEl.focus();
      scrollToBottom();
    }

    function parseAndDisplayAnswer(answer) {
      try {
        let papers = answer;

        if (typeof answer === "string") {
          const start = answer.indexOf("[");
          const end = answer.lastIndexOf("]") + 1;
          if (start === -1 || end === 0) throw new Error("No valid JSON found in answer.");
          const jsonSlice = answer.substring(start, end);
          papers = JSON.parse(jsonSlice);
        }

        if (!Array.isArray(papers)) throw new Error("Expected an array of papers.");

        const html = `<p style="margin:0 0 8px 0;"><strong>${escapeHtml(BOT_NAME)}:</strong></p><ul style="margin:0; padding-left:18px;">${formatBotResponse(
          papers
        )}</ul>`;
        appendMessageHTML("bot", html);
      } catch (e) {
        showInlineError(`Error parsing the response.${e?.message ? " (" + e.message + ")" : ""}`, lastUserQuery);
      }
    }

    function capitalizeTitle(t) {
      const m = ["the", "in", "and", "of", "to", "for"];
      return (t || "")
        .split(" ")
        .map((w, i) =>
          m.includes(w.toLowerCase()) && i !== 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join(" ");
    }

    function capitalizeSentence(s) {
      if (!s) return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    }

    function formatBotResponse(papers) {
      return papers
        .map((p) => {
          const url = escapeHtml(p.url || "#");
          const name = escapeHtml(capitalizeTitle(p.name || "Untitled"));
          const desc = escapeHtml(capitalizeSentence(p.description || ""));
          return `<li style="margin:0 0 8px 0;"><strong><a href="${url}" target="_blank" rel="noopener">${name}</a></strong>: ${desc}</li>`;
        })
        .join("");
    }

    // Initial focus / sizing
    setTimeout(() => {
      autoresizeTextarea();
      setSendEnabled();
      inputEl && inputEl.focus();
    }, 80);

    window.addEventListener("resize", () => {
      autoresizeTextarea();
      scrollToBottom();
    });
  }

  return { mount };
})();
