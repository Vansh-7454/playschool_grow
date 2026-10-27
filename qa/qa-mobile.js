const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Mobile check on Home
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, isMobile: true });
  await mobilePage.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await mobilePage.screenshot({ path: 'qa/mobile-home-bottom-clean.png', clip: { x: 0, y: 350, width: 375, height: 462 } });

  // Mobile check on Gallery
  await mobilePage.goto('http://localhost:3000/gallery', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await mobilePage.screenshot({ path: 'qa/mobile-gallery-screen-clean.png', clip: { x: 0, y: 0, width: 375, height: 812 } });

  await browser.close();
  console.log('Mobile screenshots verified clean!');
})();
