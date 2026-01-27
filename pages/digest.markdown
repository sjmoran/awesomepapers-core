---
layout: page
title: {{ site.content.digest.name }}
description: {{ site.content.digest.description }}
---

**{{ site.content.digest.tagline }}**

The **{{ site.content.digest.name }}** is a curated email for researchers, engineers, and founders who want to keep up with recent developments in {{ site.domain.name | downcase }} without wading through thousands of {{ site.domain.paper_term }}.

<p style="text-align:center; margin: 10px 0 0; color:#555;">
  Join a growing community of researchers, engineers, and founders.
</p>

<!-- ✅ Clear Free vs Pro positioning -->
<p style="text-align:center; margin: 8px 0 0; color:#555;">
  • &nbsp; <strong>Free:</strong> weekly highlights &nbsp; • &nbsp;
  <a href="{{ site.baseurl }}/pro.html"><strong>Explore Pro</strong></a>
</p>

<form id="subscribe-form" class="llm-news-digest-form" aria-label="Subscribe to LLM News Digest">
  <!-- Honeypot -->
  <input type="text" name="website" id="hp-website" autocomplete="off" tabindex="-1" aria-hidden="true" style="position:absolute; left:-9999px; width:1px; height:1px; opacity:0;">
  <input type="hidden" name="source" id="sub-source" value="llm-news-digest">
  <input type="hidden" name="ref" id="sub-ref" value="">

  <!-- NOTE: required is toggled by JS depending on selected frequency -->
  <input type="email" name="email" id="email" class="llm-news-input" placeholder="Your Email Address" required>

  <!-- ✅ Frequency dropdown (Free vs Pro) -->
  <div class="llm-news-frequency-row">
    <label for="frequency" class="llm-news-frequency-label">How often?</label>
    <select name="frequency" id="frequency" class="llm-news-select" aria-label="Digest frequency">
      <optgroup label="Free">
        <option value="weekly" selected>Weekly (Free)</option>
        <option value="biweekly">Bi-Weekly (Free)</option>
      </optgroup>
      <optgroup label="Pro">
        <option value="daily">Daily (Pro)</option>
        <option value="every_other_day">Every other day (Pro)</option>
      </optgroup>
    </select>
  </div>

  <button type="submit" class="llm-news-button">Get the free weekly digest</button>
  <p id="subscribe-message" style="margin-top:16px;font-weight:bold;"></p>

  <p style="text-align:center; margin: 10px 0 0; color:#666; font-size: 0.95em;">
    Want daily + alerts? <a href="{{ site.baseurl }}/pro.html"><strong>Go Pro</strong></a>.
  </p>
</form>

<p style="text-align:center;margin-top:10px;font-style:italic;color:#666;">
  No spam. Unsubscribe with zero fuss.
</p>

<div class="newsletter-gif-section">
  <h3>📬 Sample Edition: </h3>
  <img src="{{ site.baseurl }}/assets/img/newsletter-preview.gif"
       alt="Animated preview of the LLM News Digest email"
       loading="lazy" decoding="async" />
</div>

### What you get for free (weekly)

- 🔍 Recent paper summaries: hand-picked recent work on GPT, Claude, BERT, Mistral, and beyond
- 🧭 Top Papers by Theme: recent highlights from fine-tuning, RAG, prompting, alignment, and more
- 🎲 Serendipitous Pick: a surprising or quirky paper from the archive
- 🛠️ Practical Resources: hands-on blog posts, tools, courses, or papers to help you build, fine-tune, or deploy real LLM applications
- 🗞️ A few curated headlines worth knowing
- 🧭 One theme to watch (what’s rising / what’s cooling)

It's a low-noise way to stay informed.

<!-- ✅ Pro section moved to bottom -->
<hr style="max-width:900px;margin:26px auto;opacity:.25;" />

<div class="pro-box" aria-label="LLM News Digest Pro">
  <h3 style="text-align:center;margin:0 0 10px;">✨ LLM News Digest Pro</h3>

  <p style="text-align:center; margin: 0 0 14px; color:#555;">
    Want high-signal AI intelligence tailored to you?
  </p>

  <ul class="pro-features" aria-label="Pro features list">
    <!-- ✅ Core digest content (explicitly included in Pro) -->
    <li>🔍 Recent paper summaries: hand-picked recent work on GPT, Claude, BERT, Mistral, and beyond</li>
    <li>🗞️ AI News of the Week: short, curated headlines from trusted sources across the AI landscape</li>
    <li>📈 Micro-Trend Watch: which topics and tags are increasing in frequency</li>
    <li>🧠 Deep Dive: a brief explanation of a single standout paper</li>
    <li>📚 AI Word of the Week: a short definition of a recurring or emerging technical term</li>
    <li>💎 Under-the-Radar Gem: a lesser-known but high-quality contribution</li>
    <li>🏆 Most Cited Classics: foundational works that still matter</li>
    <li>🛠️ Practical Resources: hands-on blog posts, tools, courses, or papers to help you build, fine-tune, or deploy real LLM applications</li>
    <li>🎲 Serendipitous Pick: a surprising or quirky paper from the archive</li>
    <li>🧭 Top Papers by Theme: recent highlights from fine-tuning, RAG, prompting, alignment, and more</li>
    <li>🕰️ Oldies But Goodies: timeless, still-relevant picks from the earliest papers in our archive</li>
    <li>📝 ICLR Blogposts Track: accessible distillations from the ICLR blogposts track, highlighting ideas with strong practical or conceptual takeaways</li>

    <!-- ✅ Pro-only capabilities -->
    <li>🚨 Topic tracking + alerts (e.g., “RAG”, “agents”, “eval”, “safety”)</li>
    <li>📌 Saved searches (pin your filters)</li>
    <li>👀 Watchlists (authors, labs, models, tags)</li>
    <li>📊 Trend graphs (tag frequency over time)</li>
    <li>🏆 Best-of picks (most-liked / most-starred / most-cited)</li>
    <li>🧹 De-duplication + noise filtering (hide repeats / low-signal sources)</li>
    <li>🗓️ Delivery controls (digest frequency + format: email/PDF)</li>
    <li>🗄️ Archive access + search (full back-catalog, fast search)</li>
    <li>📤 Export (CSV/JSON/Notion-ready list)</li>
    <li>🧪 Early access (new features / experiments)</li>
  </ul>

  <p style="text-align:center;margin:14px 0 0;">
    <a href="{{ site.baseurl }}/pro.html" class="pro-link">
      <span class="pro-link-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
          <path d="M12 2l1.2 3.7c.2.6.7 1.1 1.3 1.3L18.2 8l-3.7 1.2c-.6.2-1.1.7-1.3 1.3L12 14.2l-1.2-3.7c-.2-.6-.7-1.1-1.3-1.3L5.8 8l3.7-1.2c.6-.2.1-.7 1.3-1.3L12 2zm7 9l.6 1.8c.1.3.3.5.6.6L22 14l-1.8.6c-.3.1-.5.3-.6.6L19 17l-.6-1.8c-.1-.3-.5-.5-.6-.6L16 14l1.8-.6c.3-.1.5-.3.6-.6L19 11zM5 14l.8 2.4c.1.4.4.7.8.8L9 18l-2.4.8c-.4.1-.7.4-.8.8L5 22l-.8-2.4c-.1-.4-.7-.7-.8-.8L1 18l2.4-.8c.4-.1.7-.4.8-.8L5 14z"/>
        </svg>
      </span>
      <span>Explore LLM News Digest Pro</span>
    </a>
  </p>
</div>

<style>
  .newsletter-gif-section { text-align:center; margin:30px auto 40px; max-width:700px; }
  .newsletter-gif-section h3 { margin-bottom:12px; font-size:1.4em; }
  .newsletter-gif-section img { width:100%; max-width:650px; border-radius:10px; box-shadow:0 8px 24px rgba(0,0,0,0.1); }

  .llm-news-digest-form { width:100%; max-width:600px; margin:18px auto 10px; text-align:center; }
  .llm-news-input { width:100%; padding:12px 16px; font-size:1.1em; font-weight:500; border:2px solid #000; border-radius:6px; margin-bottom:12px; }

  .llm-news-frequency-row {
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    margin:4px 0 16px;
    flex-wrap:wrap;
  }
  .llm-news-frequency-label {
    font-size:0.95em;
    color:#444;
  }
  .llm-news-select {
    padding:8px 10px;
    font-size:0.95em;
    border:2px solid #000;
    border-radius:6px;
    background:#fff;
  }

  .llm-news-button { padding:12px 24px; font-size:1em; font-weight:bold; background:#fafafa; color:#000; border:2px solid #000; border-radius:6px; cursor:pointer; transition:background .2s ease-in-out,opacity .2s ease; }
  .llm-news-button:hover { background:#eaeaea; }
  .llm-news-button[disabled]{ opacity:.6; cursor:not-allowed; }

  .pro-box{
    max-width: 900px;
    margin: 22px auto 10px;
    padding: 14px 14px 16px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 12px;
    background: rgba(0,0,0,0.02);
  }
  .pro-features{
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 760px;
  }
  .pro-features li{
    padding: 6px 0;
    color: #444;
    line-height: 1.35;
  }

  .pro-link{
    font-weight:700;
    text-decoration:underline;
    display:inline-flex;
    align-items:center;
    gap:6px;
  }
  .pro-link-icon{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    transform: translateY(1px);
  }
  .pro-link svg{
    fill: currentColor;
  }

  @media (prefers-color-scheme: dark){
    .llm-news-button{ background:#1a1a1a; color:#fff; border-color:#fff; }
    .llm-news-input{ background:#000; color:#fff; border-color:#fff; }
    .llm-news-select{ background:#000; color:#fff; border-color:#fff; }
    .newsletter-gif-section img{ box-shadow:0 8px 24px rgba(0,0,0,0.6); }
    .pro-box { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.14); }
    .pro-features li { color:#bbb; }
  }
</style>

<!-- ✅ Google Ads event snippet for Newsletter Signup -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') { window.location = url; }
  };
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-436091571/ZzbWCJCuxbUbELP1-M8B',
      'event_callback': callback
    });
  }
  return false;
}
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("subscribe-form");
  var emailInput = document.getElementById("email");
  var freqSelect = document.getElementById("frequency");
  var message = document.getElementById("subscribe-message");
  var btn = form ? form.querySelector(".llm-news-button") : null;
  var hp = document.getElementById("hp-website");
  var src = document.getElementById("sub-source");
  var ref = document.getElementById("sub-ref");

  if (freqSelect) freqSelect.value = "weekly";

  try {
    var params = new URLSearchParams(window.location.search);
    if (params.toString() && src) src.value = "llm-news-digest?" + params.toString();
    if (ref) ref.value = document.referrer || "";
  } catch(e) {}

  function isProFrequency(v) {
    v = (v || "").toLowerCase();
    return (v === "daily" || v === "every_other_day");
  }

  function setEmailRequired(required) {
    if (!emailInput) return;
    if (required) {
      emailInput.setAttribute("required", "required");
      emailInput.setAttribute("aria-required", "true");
    } else {
      emailInput.removeAttribute("required");
      emailInput.setAttribute("aria-required", "false");
    }
  }

  function syncCta() {
    var v = ((freqSelect && freqSelect.value) ? freqSelect.value : "weekly").toLowerCase();
    var pro = isProFrequency(v);

    // CTA text
    if (btn) btn.textContent = pro ? "Continue to Pro" : "Get the free weekly digest";

    // Email required only for Free
    setEmailRequired(!pro);

    // Clear any lingering error when switching modes
    if (message) {
      message.textContent = "";
      message.style.color = "";
    }
  }

  if (freqSelect) {
    freqSelect.addEventListener("change", syncCta);
    syncCta();
  }

  function goToPro(prefillEmail, frequencyValue) {
    var email = (prefillEmail || "").trim();

    // Store a fallback in case query params are stripped (ad blockers, privacy tools, etc.)
    try {
      if (email) sessionStorage.setItem("pro_prefill_email", email);
      sessionStorage.setItem("pro_prefill_frequency", (frequencyValue || "").toLowerCase());
      sessionStorage.setItem("pro_prefill_ref", (ref && ref.value) ? ref.value : "");
      sessionStorage.setItem("pro_prefill_source", (src && src.value) ? src.value : "llm-news-digest");
    } catch(e) {}

    var u = new URL("{{ site.baseurl }}/pro.html", window.location.origin);

    // Copy email through (if present)
    if (email) u.searchParams.set("email", email);

    // Also pass context for Pro page (optional but useful)
    u.searchParams.set("frequency", (frequencyValue || "").toLowerCase());
    u.searchParams.set("ref", (ref && ref.value) ? ref.value : "");
    u.searchParams.set("source", (src && src.value) ? src.value : "llm-news-digest");

    window.location.href = u.toString();
  }

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = (emailInput && emailInput.value ? emailInput.value : "").trim();
    var action = (freqSelect && freqSelect.value ? freqSelect.value : "weekly").toLowerCase();

    // Honeypot
    if (hp && hp.value) {
      if (message) {
        message.textContent = "⚠️ Subscription blocked.";
        message.style.color = "red";
      }
      return;
    }

    // Pro path: redirect even if email is blank
    if (isProFrequency(action)) {
      goToPro(email, action);
      return;
    }

    // Free path: require email
    if (!email) {
      if (message) {
        message.textContent = "Please enter your email to subscribe.";
        message.style.color = "red";
      }
      return;
    }

    if (btn) btn.disabled = true;
    var originalText = btn ? btn.textContent : "";
    if (btn) btn.textContent = "Subscribing…";

    fetch("https://awesome-llm-papers.tinyapps.run/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        email: email,
        source: (src && src.value) ? src.value : "llm-news-digest",
        ref: (ref && ref.value) ? ref.value : "",
        action: action
      })
    })
    .then(function (response) { return response.json(); })
    .then(function (data) {
      if (data && data.status === "success") {
        gtag_report_conversion();
        if (message) {
          message.textContent = "🎉 You're subscribed!";
          message.style.color = "green";
        }
        if (emailInput) emailInput.value = "";
      } else {
        if (message) {
          message.textContent = "⚠️ " + ((data && data.error) ? data.error : "Subscription failed.");
          message.style.color = "red";
        }
      }
    })
    .catch(function () {
      if (message) {
        message.textContent = "❌ Something went wrong. Please try again.";
        message.style.color = "red";
      }
    })
    .finally(function () {
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalText;
      }
      syncCta();
    });
  });
});
</script>
