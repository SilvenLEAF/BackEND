const puppeteer = require('puppeteer')

const formSubmission = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.google.com/');

  await page.type('.gLFyf.gsfi', 'One Punch Man Season 3');  
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  console.log('New Page URL:', page.url());
  await browser.close();
};




formSubmission()