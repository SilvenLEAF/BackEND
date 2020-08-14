const puppeteer = require('puppeteer');

/* ----------------------------------------
.               FUNCTIONS
.1) webScrape(url, xPath, property)
.2) takeScreenshot(url, path, width=1920, height=1080)
---------------------------------------- */


/* ----------------------------------------
.               WEB SCRAPE
---------------------------------------- */
module.exports.webScrape = async (url, xPath, property) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);

  const [el] = await page.$x(xPath)
  const res = await el.getProperty(property)

  const data = await res.jsonValue(); 
  console.log(data)
  browser.close()

  return data;
}










/* ----------------------------------------
.              SCREENSHOT
---------------------------------------- */
module.exports.takeScreenshot = async (url, path, width=1920, height=1080) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setViewport({ width: width, height: height });
  await page.goto(url);

  await page.screenshot({ path: path });
  await browser.close()    
  console.log(`Success!`)
}
