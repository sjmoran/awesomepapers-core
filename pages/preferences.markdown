---
layout: page
title: Manage Your LLM News Digest Subscription
description: Update your LLM News Digest email preferences or unsubscribe.
---
**Manage your LLM News Digest subscription.**

If the digest isn’t quite working for you, you can change how often you receive it or unsubscribe entirely.

<p style="text-align:center; margin: 10px 0 0; color:#555;">
  We'd really appreciate a quick reason – it helps improve the newsletter.
</p>

<div class="trustbar" aria-label="Read by researchers from leading AI labs">
  <span class="trustbar-label">
    Read by researchers from leading AI labs — including Google, OpenAI, DeepMind, Anthropic, and J.P. Morgan Chase.
  </span>
</div>

<form id="prefs-form" class="llm-news-digest-form" aria-label="Manage LLM News Digest subscription">
  <input type="text" name="website" id="hp-website" autocomplete="off" tabindex="-1" aria-hidden="true"
         style="position:absolute; left:-9999px; width:1px; height:1px; opacity:0;">

  <input type="hidden" name="source" id="prefs-source" value="llm-news-digest-prefs">
  <input type="hidden" name="ref" id="prefs-ref" value="">

  <label for="prefs-email" style="display:block; text-align:left; font-weight:600; margin-bottom:6px;">
    Email address
  </label>
  <input type="email" name="email" id="prefs-email" class="llm-news-input"
         placeholder="Your Email Address" required><br><br>

  <fieldset style="text-align:left; border:none; margin:0 0 12px 0; padding:0;">
    <legend style="font-weight:600; margin-bottom:6px;">
      How often would you like to receive the digest?
    </legend>

    <label style="display:block; margin-bottom:6px;">
      <input type="radio" name="action" value="daily">
      <strong>Daily</strong>
    </label>

    <label style="display:block; margin-bottom:6px;">
      <input type="radio" name="action" value="every_other_day">
      <strong>Every other day</strong>
    </label>

    <label style="display:block; margin-bottom:6px;">
      <input type="radio" name="action" value="weekly" checked>
      <strong>Weekly</strong>
    </label>

    <label style="display:block; margin-bottom:6px;">
      <input type="radio" name="action" value="biweekly">
      <strong>Bi-weekly</strong>
    </label>

    <hr style="border:none;border-top:1px solid #ddd;margin:10px 0;">

    <label style="display:block; margin-bottom:6px;">
      <input type="radio" name="action" value="unsubscribe">
      Unsubscribe from the LLM News Digest
    </label>
  </fieldset>

  <label for="prefs-reason" style="display:block; text-align:left; font-weight:600; margin:10px 0 6px;">
    Why are you changing your subscription?
  </label>
  <select id="prefs-reason" name="reason" class="llm-news-input">
    <option value="">Select a reason (optional)</option>
    <option value="too-frequent">Emails are too frequent</option>
    <option value="not-relevant">Content isn’t relevant to me</option>
    <option value="too-long">Issues are too long / hard to skim</option>
    <option value="already-up-to-date">I’m already up to date from other sources</option>
    <option value="signed-up-by-mistake">I signed up by mistake</option>
    <option value="other">Other</option>
  </select>

  <label for="prefs-reason-detail"
         style="display:block; text-align:left; font-weight:600; margin:10px 0 6px;">
    Anything specific you’d like to share? <span style="font-weight:normal;">(optional)</span>
  </label>
  <textarea id="prefs-reason-detail" name="reason_detail" rows="3"
            class="llm-news-input"
            placeholder="Short feedback – this genuinely helps improve the digest."></textarea>

  <br>
  <button type="submit" class="llm-news-button">Update my preferences</button>
  <p id="prefs-message" style="margin-top:16px;font-weight:bold;"></p>
</form>

<p style="text-align:center;margin-top:-6px;font-style:italic;color:#666;">
  You can always resubscribe later from the website.
</p>

<style>
  .llm-news-digest-form { width:100%; max-width:600px; margin:18px auto; text-align:center; }
  .llm-news-input {
    width:100%; padding:12px 16px; font-size:1.05em; font-weight:500;
    border:2px solid #000; border-radius:6px; margin-bottom:12px;
  }
  .llm-news-button {
    padding:12px 24px; font-size:1em; font-weight:bold;
    background:#fafafa; color:#000; border:2px solid #000; border-radius:6px;
    cursor:pointer;
  }
  .trustbar { max-width:900px; margin:14px auto 6px; text-align:center; color:#555; }
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("prefs-form");
  const emailInput = document.getElementById("prefs-email");
  const msg = document.getElementById("prefs-message");
  const btn = form.querySelector(".llm-news-button");
  const hp = document.getElementById("hp-website");
  const src = document.getElementById("prefs-source");
  const ref = document.getElementById("prefs-ref");

  try {
    const params = new URLSearchParams(window.location.search);
    const qsEmail = (params.get("email") || "").trim();
    if (qsEmail && !emailInput.value) emailInput.value = qsEmail;
    ref.value = document.referrer || "";
  } catch(e) {}

  function setMessage(text, ok) {
    msg.textContent = text;
    msg.style.color = ok ? "#0a7a28" : "#b00020";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (hp.value) return;

    const email = emailInput.value.trim();
    const action = form.querySelector("input[name='action']:checked").value;

    btn.disabled = true;
    btn.textContent = "Saving…";
    setMessage("", true);

    const endpoint = action === "unsubscribe"
      ? "https://awesome-llm-papers.tinyapps.run/unsubscribe"
      : "https://awesome-llm-papers.tinyapps.run/subscribe";

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        email,
        action, // ✅ backend expects `action` (not `cadence`)
        reason: document.getElementById("prefs-reason").value,
        reason_detail: document.getElementById("prefs-reason-detail").value,
        source: src.value,
        ref: ref.value
      })
    })
    .then(async (r) => {
      let data = null;
      try { data = await r.json(); } catch(e) {}
      if (!r.ok) {
        const msgText = (data && (data.error || data.message)) ? (data.error || data.message) : "Could not update preferences.";
        throw new Error(msgText);
      }
      return data || {};
    })
    .then(d => {
      if (d.status === "success") {
        setMessage(
          action === "unsubscribe"
            ? "✅ You’ve been unsubscribed."
            : "✅ Preferences updated.",
          true
        );
      } else {
        setMessage("⚠️ Could not update preferences.", false);
      }
    })
    .catch((err) => {
      setMessage("❌ " + (err && err.message ? err.message : "Something went wrong."), false);
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Update my preferences";
    });
  });
});
</script>
