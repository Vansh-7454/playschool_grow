import fs from "fs";
import path from "path";
import puppeteer from "puppeteer-core";

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = process.env.SITE_URL || "http://localhost:3000";

const viewports = [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const pages = [
  { name: "home", path: "/" },
  { name: "programmes", path: "/programmes" },
  { name: "daycare", path: "/daycare" },
  { name: "gallery", path: "/gallery" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

async function capture() {
  const qaDir = path.join(process.cwd(), "qa");
  if (!fs.existsSync(qaDir)) {
    fs.mkdirSync(qaDir, { recursive: true });
  }

  console.log(`Connecting to ${BASE_URL}...`);
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  await page.setCacheEnabled(false);

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

    for (const p of pages) {
      const url = `${BASE_URL}${p.path}?t=${Date.now()}`;
      console.log(`Navigating to ${url} at ${vp.width}px...`);
      try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
        await new Promise((r) => setTimeout(r, 1200));

        // Quick scroll down to trigger lazy images, then back to top
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
        await new Promise((r) => setTimeout(r, 300));
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await new Promise((r) => setTimeout(r, 500));
        await page.evaluate(() => window.scrollTo(0, 0));
        await new Promise((r) => setTimeout(r, 400));

        const filename = `${p.name}-${vp.name}.png`;
        const filepath = path.join(qaDir, filename);
        await page.screenshot({ path: filepath, fullPage: true });
        console.log(`Captured: qa/${filename}`);
      } catch (err) {
        console.error(`Failed to capture ${url} at ${vp.width}:`, err.message);
      }
    }
  }

  await browser.close();
  console.log("All screenshots captured in /qa successfully!");
}

capture().catch((err) => {
  console.error("Screenshot error:", err);
  process.exit(1);
});
