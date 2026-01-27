---
layout: default
title: {{ site.title }} AI Agent
description: {{ site.title }} AI Agent for research discovery
---
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

<div class="alp-chat-page">
  <h2 style="font-size: 1.8em; margin-bottom: 10px;">🤖 {{ site.title }} Agentic Search</h2>
  <p style="font-size: 1.1em;">
    Meet the <strong>{{ site.title }} AI Agent</strong> — your AI guide to discovering
    the most relevant research. It searches across
    <strong>thousands</strong> of {{ site.domain.paper_term }} in the collection to help you
    quickly find the work that matters most.
  </p>

  <div class="chat-layout">
    <div class="chat-container">
      <!-- Mount point: alp-chat.js will inject the chat UI here -->
      <div id="alp-chat-mount" style="width:100%;"></div>
    </div>
  </div>
</div>

<style>
/* Scope ALL chat-specific styles to avoid changing site-wide typography/layout */
.alp-chat-page{
  --sidebar-width: 320px;
  --page-gutter: 24px;
  --app-max: min(100%, calc(100vw - var(--sidebar-width) - var(--page-gutter)));
  max-width: 100%;
  overflow-x: hidden;
}

.alp-chat-page,
.alp-chat-page *{ box-sizing: border-box; }

/* ---- Chat layout ---- */
.alp-chat-page .chat-layout { display: flex; width: 100%; min-height: 48vh; height: auto; max-height: 82vh; }
.alp-chat-page .chat-container { flex: 1; display: flex; justify-content: center; align-items: stretch; padding: clamp(8px, 2vw, 16px); width: 100%; }

/* Chatbox injected by alp-chat.js */
.alp-chat-page .chatbox {
  flex: 1; display: flex; flex-direction: column;
  width: 100%;
  max-width: var(--app-max);
  min-width: 280px;
  background: #fff;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 14px;
  overflow: hidden;
  max-height: clamp(420px, 72vh, 760px);
  box-shadow: 0 10px 30px rgba(0,0,0,.06);

  /* inherit site typography */
  font-family: inherit;
  font-size: inherit;
}

/* Header injected by alp-chat.js (kept here so page CSS can refine it if needed) */
.alp-chat-page .chat-header{
  background:#fff;
}

/* ---- Messages area ---- */
.alp-chat-page .messages {
  flex: 1;
  padding: 12px;
  border-bottom: 1px solid rgba(0,0,0,.06);
  overflow-y: auto;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
  max-height: 55vh;
  overflow-wrap: anywhere;
  word-break: break-word;

  background:
    radial-gradient(1200px 400px at 20% -10%, rgba(12,95,206,.06), transparent 55%),
    radial-gradient(900px 300px at 90% 10%, rgba(34,197,94,.05), transparent 55%),
    #fff;
}
.alp-chat-page .messages img, .alp-chat-page .messages video, .alp-chat-page .messages iframe { max-width: 100%; height: auto; display: block; }
.alp-chat-page .messages pre, .alp-chat-page .messages code { white-space: pre-wrap; word-break: break-word; }

/* ---- Input area ---- */
.alp-chat-page .input-area {
  position: sticky; bottom: 0; left: 0; right: 0;
  display: flex; gap: .5rem; align-items: stretch;
  padding: .6rem calc(.6rem + env(safe-area-inset-right))
           calc(.6rem + env(safe-area-inset-bottom))
           calc(.6rem + env(safe-area-inset-left));
  border-top: 1px solid rgba(0,0,0,.06);
  background: rgba(250,250,250,.9);
  backdrop-filter: blur(6px);
  z-index: 5;
}

/* Input is now a textarea in alp-chat.js */
.alp-chat-page .chat-input {
  flex: 1; min-width: 0;
  padding: .5rem .65rem;
  font-size: 1rem; /* 16px+ prevents iOS zoom */
  border: 1px solid rgba(0,0,0,.18);
  border-radius: 10px;
  background-color: #fff;
  line-height: 1.35;
  font-family: inherit;
}
.alp-chat-page .chat-input:focus { border-color: #0c5fce; box-shadow: 0 0 0 2px rgba(26,115,232,.25); outline: none; }

.alp-chat-page .btn-row { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }

/* ---- Buttons ---- */
.alp-chat-page .send-button, .alp-chat-page .stop-button {
  padding: .5rem .85rem;
  font-size: 1rem;
  border: 1px solid rgba(0,0,0,.18);
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  white-space: nowrap;
  transition: transform .06s ease, background .15s ease;
  font-family: inherit;
}
.alp-chat-page .send-button:hover, .alp-chat-page .stop-button:hover { background: #f2f2f2; }
.alp-chat-page .send-button:active, .alp-chat-page .stop-button:active { transform: translateY(1px); }
.alp-chat-page .send-button:disabled, .alp-chat-page .stop-button:disabled { opacity: .6; cursor: not-allowed; }
.alp-chat-page .stop-button { border-color: rgba(180,35,24,.35); }

/* ---- Message bubbles ---- */
.alp-chat-page .message {
  padding: 10px 12px;
  margin-bottom: 10px;
  border-radius: 12px;
  max-width: min(80%, 68ch);
  line-height: 1.45;
  box-shadow: 0 1px 0 rgba(0,0,0,.04);
}
.alp-chat-page .user { align-self: flex-end; background: #eef5ff; text-align: right; border: 1px solid rgba(12,95,206,.12); }
.alp-chat-page .bot  { align-self: flex-start; background: #f4f8f4; text-align: left; border: 1px solid rgba(34,197,94,.12); }
.alp-chat-page .muted { color: #666; font-size: .9rem; }

/* ---- Spinner ---- */
.alp-chat-page .spinner {
  display: inline-block; width: 24px; height: 24px;
  border: 3px solid rgba(0,0,0,0.2); border-top: 3px solid #0c5fce;
  border-radius: 50%; animation: spin 1s linear infinite; vertical-align: middle; margin-right: 8px;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ---- Responsive rules ---- */
@media (max-width: 1200px){
  .alp-chat-page{ --app-max: calc(100vw - var(--page-gutter)); }
}
@media (max-width: 960px){
  .alp-chat-page{ --sidebar-width: 0px; }
  .alp-chat-page .chatbox { width: 100%; max-width: 100%; border-radius: 14px; max-height: 80svh; }
  .alp-chat-page .messages { max-height: 50svh; -webkit-overflow-scrolling: touch; }
  .alp-chat-page .message { max-width: 100%; }
}
@media (max-width: 480px){
  .alp-chat-page .chat-input, .alp-chat-page .send-button, .alp-chat-page .stop-button { font-size: 16px; }
  .alp-chat-page .chatbox { max-height: 78svh; }
  .alp-chat-page .messages { max-height: 48svh; }
  .alp-chat-page .btn-row { gap: .4rem; }
}
</style>

<!-- IMPORTANT: use baseurl so this works on GitHub Pages project sites -->
<script src="{{ site.baseurl }}/public/js/alp-chat.js" defer></script>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const mountEl = document.getElementById("alp-chat-mount");

    function tryMount() {
      if (!mountEl) {
        console.error("ALPChat mount element missing: #alp-chat-mount");
        return true; // stop retrying
      }
      if (window.ALPChat && typeof window.ALPChat.mount === "function") {
        window.ALPChat.mount(mountEl);
        return true;
      }
      return false;
    }

    // Try immediately (after deferred script should have executed)
    if (tryMount()) return;

    // Retry briefly in case something else delays alp-chat.js execution
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      if (tryMount() || attempts >= 30) {
        if (attempts >= 30) console.error("ALPChat not available after retries. Check alp-chat.js loaded and sets window.ALPChat.");
        clearInterval(timer);
      }
    }, 100);
  });
</script>
