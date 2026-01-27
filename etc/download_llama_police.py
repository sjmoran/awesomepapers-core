# scripts/download_llama_police.py

from playwright.sync_api import sync_playwright

EMBED_URL = "https://airtable.com/embed/app0UKsRSCA7YJhgu/shrqkqcrzRkYrLbpd"
OUTPUT_FILE = "llama_police.csv"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(accept_downloads=True)
    page = context.new_page()

    page.goto(EMBED_URL, wait_until="load", timeout=60000)
    page.wait_for_timeout(5000)  # Give Airtable time to load fully

    # Use more specific and correct locator
    download_button = page.locator("a:has-text('Download CSV')").first
    download_button.wait_for(timeout=10000)

    with page.expect_download(timeout=30000) as download_info:
        download_button.click()

    download = download_info.value
    download.save_as(OUTPUT_FILE)
    print(f"✅ Downloaded CSV to {OUTPUT_FILE}")

    browser.close()
