const puppeteer = require('puppeteer');

const webScrape = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // const [el] = page.$x('')
  const [el] = await page.$x('//*[@id="acs-product-block-0"]/div[1]/a/img')
  const src = await el.getProperty('src')

  const srcTxt = await src.jsonValue();

  console.log({srcTxt})
  browser.close()

}

const myUrl = 'https://www.amazon.com/amazonprime/143-2104291-4273460?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0';

webScrape(myUrl)