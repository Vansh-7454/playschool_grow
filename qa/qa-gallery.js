const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Desktop
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/gallery', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));

  // Capture hero
  await page.screenshot({ path: 'qa/gallery-new-hero-desktop.png', clip: { x: 0, y: 0, width: 1440, height: 750 } });
  
  // Click first photo to open lightbox
  const firstCard = await page.$('.cursor-pointer');
  if (firstCard) {
    await firstCard.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'qa/gallery-lightbox-desktop.png' });
    // Close lightbox
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));
  }

  await page.screenshot({ path: 'qa/gallery-new-full-desktop.png', fullPage: true });

  // Mobile
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, isMobile: true });
  await mobilePage.goto('http://localhost:3000/gallery', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await mobilePage.screenshot({ path: 'qa/gallery-new-hero-mobile.png', clip: { x: 0, y: 0, width: 375, height: 850 } });
  await mobilePage.screenshot({ path: 'qa/gallery-new-full-mobile.png', fullPage: true });

  await browser.close();
  console.log('All screenshots including lightbox captured!');
})();
