import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const viewports = [
  { name: '320px', width: 320, height: 600 },
  { name: '375px', width: 375, height: 812 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1024px', width: 1024, height: 768 },
  { name: '1440px', width: 1440, height: 900 }
];

const pages = ['/', '/programmes', '/daycare', '/gallery', '/about', '/contact'];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let totalIssues = 0;

  for (const vp of viewports) {
    for (const p of pages) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto('http://localhost:3000' + p, { waitUntil: 'networkidle2' });

      const res = await page.evaluate((viewportWidth) => {
        const clientW = viewportWidth;
        const overflows = [];
        
        const all = document.querySelectorAll('body *');
        for (const el of all) {
          // Ignore SVG defs, scripts, styles
          if (['SCRIPT', 'STYLE', 'DEFS', 'PATH', 'G', 'SYMBOL', 'CLIPPATH'].includes(el.tagName)) continue;
          
          const rect = el.getBoundingClientRect();
          // Check if visible and exceeding viewport width
          if (rect.width > 0 && rect.height > 0 && rect.right > clientW + 2) {
            overflows.push({
              tag: el.tagName,
              cls: (el.className || '').toString().slice(0, 80),
              text: (el.innerText || '').slice(0, 30).replace(/\n/g, ' '),
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width)
            });
          }
        }

        return {
          overflowCount: overflows.length,
          topOverflows: overflows.slice(0, 6)
        };
      }, vp.width);

      if (res.overflowCount > 0) {
        totalIssues++;
        console.log(`[OVERFLOW FOUND] ${p} at ${vp.name}: ${res.overflowCount} elements exceed viewport width!`);
        for (const item of res.topOverflows) {
          console.log(`  <${item.tag}> left=${item.left} right=${item.right} w=${item.width} text="${item.text}" class="${item.cls}"`);
        }
      } else {
        console.log(`[OK] ${p} at ${vp.name}`);
      }
    }
  }

  await browser.close();
  console.log(`\nAudit complete. Total with overflow: ${totalIssues}`);
}

run().catch(console.error);
