const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const releasesURL = 'https://github.com/GarlicoinOrg/Garlicoin/releases';
const releaseSelector = '.repository-content > div.position-relative.border-top.clearfix > div:nth-child(1) > div > div.d-none.d-md-block.flex-wrap.flex-items-center.col-12.col-md-3.col-lg-2.px-md-3.pb-1.pb-md-4.pt-md-4.float-left.text-md-right.v-align-top > ul > li:nth-child(1) > a > span';
const relativePath = '../src/_data/downloads.js';
const filePath = path.join(__dirname, relativePath);

const fetch = async() => {
  await console.log('Fetching newest release');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(releasesURL);
  await page.waitForSelector(releaseSelector);
  const release = await page.$eval(releaseSelector, el => el.innerText);
  await console.log('Release:', release);

  if (fs.existsSync(filePath)) {
    await console.log('Writing to file');
    const lineReplacement = `const release = '${release}';`;
    try {
      await fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return console.log(err);
        }
        const result = data.replace(/const release = '.*?';/, lineReplacement);
        if (result.includes(lineReplacement)) {
          console.log('Write successful');
        }
        else {
          console.log('Write failed');
        }

        fs.writeFile(filePath, result, 'utf8', err => {
          if (err) return console.log(err);
        });
      });
    }
    catch (e) {
      console.log(e);
    }
  }
  else {
    console.log('File path does not exist');
  }

  await browser.close();
};

fetch();
