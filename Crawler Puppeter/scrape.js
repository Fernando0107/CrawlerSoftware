const puppeteer = require('puppeteer');

let scrape = async () => {
    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://www.prediovirtual.com');
    await page.click('#infinite_arrivals_cont > div:nth-child(1) > div.picture_product_4 > a > img')
    await page.waitFor(1000);                                       //delay to make sure, everything on page loads


    const result = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let code = document.querySelector('.content_codigo').innerText;
        return {
            title,  
            code
        }
    });

    //Scrape

    browser.close();
    return result;
    
    
};

scrape().then((value) => {
    console.log(value);         //Sucess
});
