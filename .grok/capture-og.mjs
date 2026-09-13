import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const html = "/workspace/.grok/og-card.html";
const out = "/workspace/.grok/card-raw.jpg";

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });
  await page.goto(pathToFileURL(html).href, { waitUntil: "networkidle", timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  await page.screenshot({ path: out, type: "jpeg", quality: 92, fullPage: false });
  console.log(JSON.stringify({ ok: true, screenshot: out }));
} finally {
  await browser.close();
}
