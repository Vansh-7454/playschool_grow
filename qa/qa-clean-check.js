const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Gallery page
  await page.goto('http://localhost:3000/gallery', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'qa/gallery-clean-top-filters.png', clip: { x: 0, y: 0, width: 1440, height: 800 } });

  // 2. Programmes page
  await page.goto('http://localhost:3000/programmes', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'qa/programmes-clean-top.png', clip: { x: 0, y: 0, width: 1440, height: 500 } });

  // 3. Mobile Gallery page
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, isMobile: true });
  await mobilePage.goto('http://localhost:3000/gallery', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await mobilePage.screenshot({ path: 'qa/gallery-mobile-clean.png', clip: { x: 0, y: 0, width: 375, height: 750 } });

  await browser.close();
  console.log('All clean verification screenshots captured!');
})();
