---
layout: page
title: LLM News Digest Pro
description: Join the Pro waitlist for premium, high-signal LLM updates and filters.
---

**Pro is the premium version of the LLM News Digest — designed for people who want tighter filtering, faster scanning, and fewer misses.**

<p style="text-align:center; margin: 10px 0 0; color:#555;">
  Join the <strong>Pro waitlist</strong> to get early access + founding pricing.
</p>

## Join the Pro waitlist

<form id="pro-waitlist-form" class="llm-news-digest-form" aria-label="Join LLM News Digest Pro waitlist">
  <!-- Honeypot -->
  <input type="text" name="website" id="hp-website" autocomplete="off" tabindex="-1" aria-hidden="true"
         style="position:absolute; left:-9999px; width:1px; height:1px; opacity:0;">

  <input type="hidden" name="source" id="sub-source" value="llm-news-digest-pro">
  <input type="hidden" name="ref" id="sub-ref" value="">

  <input type="email" name="email" id="email" class="llm-news-input" placeholder="Your Email Address" required>

  <!-- ✅ Delivery frequency -->
  <div class="llm-news-frequency-row" aria-label="Delivery frequency selection">
    <span class="llm-news-frequency-label">Delivery:</span>
    <select id="frequency" name="frequency" class="llm-news-select">
      <option value="daily" selected>Daily</option>
      <option value="every_other_day">Every other day</option>
      <option value="weekly">Weekly</option>
      <option value="biweekly">Bi-Weekly</option>
    </select>
  </div>

  <button type="submit" class="llm-news-button">Join Pro Waitlist</button>
  <p id="subscribe-message" style="margin-top:16px;font-weight:bold;"></p>

  <p style="text-align:center; margin: 10px 0 0; color:#666; font-size: 0.95em;">
    Prefer free? <a href="{{ site.baseurl }}/digest.html"><strong>Get the weekly digest</strong></a>.
  </p>
</form>

## What Pro includes

**Everything in the free digest, plus:**

### Included in Pro:

- 🔍 Concise paper summaries: hand-picked recent work on GPT, Claude, BERT, Mistral, and beyond
- 🗞️ AI News of the Week: short, curated headlines from trusted sources across the AI landscape
- 📈 Micro-Trend Watch: which topics and tags are increasing in frequency
- 🧠 Deep Dive: a brief explanation of a single standout paper
- 📚 AI Word of the Week: a short definition of a recurring or emerging technical term
- 💎 Under-the-Radar Gem: a lesser-known but high-quality contribution
- 🏆 Most Cited Classics: foundational works that still matter
- 🕰️ Oldies But Goodies: timeless, still-relevant picks from the earliest papers in our archive
- 📝 ICLR Blogposts Track: accessible distillations from the ICLR blogposts track, highlighting ideas with strong practical or conceptual takeaways
- 🎯 Topic filters: only receive what you care about (e.g., RAG, alignment, agents, evals, multimodal)
- 🚨 Topic tracking + alerts: get notified when topics spike (e.g., “RAG”, “agents”, “eval”, “safety”)
- 📌 Saved searches: pin your filters and re-run them instantly
- 👀 Watchlists: track authors, labs, models, and tags
- 📊 Trend graphs: tag frequency over time
- 🧹 De-duplication + noise filtering: hide repeats and low-signal items
- 🗄️ Better archive: full back-catalog + fast search
- 🗓️ Delivery controls: daily / every-other-day / weekly / bi-weekly
- 📤 Export: CSV/JSON/Notion-ready list
- 📄 Premium PDF edition: clean, shareable summary for offline reading
- 🧪 Early access: new features and experiments before they ship to free

<!-- ✅ Pricing (moved to bottom) -->
<div class="pricing-card" aria-label="LLM News Digest Pro pricing">
  <div class="pricing-title">Pro pricing</div>
  <div class="pricing-price">$10<span class="pricing-unit">/month</span></div>
  <div class="pricing-subtitle">Includes a <strong>7-day free trial</strong>. Cancel anytime.</div>
</div>

<style>
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

  /* ✅ Pricing card */
  .pricing-card{
    max-width: 520px;
    margin: 18px auto 10px;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 14px 16px;
    text-align: center;
    background: #fff;
  }
  .pricing-title{
    font-size: 0.95rem;
    color:#444;
    margin-bottom: 6px;
    letter-spacing: .02em;
    text-transform: uppercase;
  }
  .pricing-price{
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 6px;
  }
  .pricing-unit{
    font-size: 1rem;
    font-weight: 700;
    margin-left: 4px;
    color:#333;
  }
  .pricing-subtitle{
    font-size: 0.95rem;
    color:#555;
  }

  @media (prefers-color-scheme: dark){
    .llm-news-button{ background:#1a1a1a; color:#fff; border-color:#fff; }
    .llm-news-input{ background:#000; color:#fff; border-color:#fff; }
    .llm-news-select{ background:#000; color:#fff; border-color:#fff; }

    .pricing-card{ background:#000; border-color:#fff; }
    .pricing-title{ color:#bbb; }
    .pricing-unit{ color:#ddd; }
    .pricing-subtitle{ color:#aaa; }
  }
</style>

<!-- ✅ Google Ads event snippet for Waitlist Signup -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) !== 'undefined') { window.location = url; }
  };
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      send_to: 'AW-436091571/ZzbWCJCuxbUbELP1-M8B',
      event_callback: callback
    });
  }
  return false;
}
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("pro-waitlist-form");
  if (!form) return;

  var emailInput = document.getElementById("email");
  var freqSelect = document.getElementById("frequency");
  var message = document.getElementById("subscribe-message");
  var btn = form.querySelector(".llm-news-button");
  var hp = document.getElementById("hp-website");
  var src = document.getElementById("sub-source");
  var ref = document.getElementById("sub-ref");

  // attribution
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.toString() && src) src.value = "llm-news-digest-pro?" + params.toString();
    if (ref) ref.value = document.referrer || "";
  } catch (e) {}

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = (emailInput && emailInput.value ? emailInput.value : "").trim();
    var frequency = (freqSelect && freqSelect.value ? freqSelect.value : "daily").trim();

    if (!email) return;

    if (hp && hp.value) {
      if (message) {
        message.textContent = "⚠️ Submission blocked.";
        message.style.color = "red";
      }
      return;
    }

    if (btn) {
      btn.disabled = true;
      var originalText = btn.textContent;
      btn.textContent = "Joining…";
    }

    var payload = new URLSearchParams();
    payload.set("email", email);
    payload.set("source", src ? src.value : "");
    payload.set("ref", ref ? ref.value : "");
    payload.set("frequency", frequency);

    fetch("https://awesome-llm-papers.tinyapps.run/pro_subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString()
    })
    .then(function (response) { return response.json(); })
    .then(function (data) {
      if (data && data.status === "success") {
        gtag_report_conversion();
        if (message) {
          message.textContent = "✅ You're on the Pro waitlist!";
          message.style.color = "green";
        }
        if (emailInput) emailInput.value = "";
        if (freqSelect) freqSelect.value = "daily";
      } else {
        if (message) {
          message.textContent = "⚠️ " + ((data && data.error) ? data.error : "Waitlist signup failed.");
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
    });
  });
});
</script>
