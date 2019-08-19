const puppeteer = require('puppeteer');             // we require our Puppeteer dependency

async function getPic() {                                           //This function will hold all of our atomation code
    //const browser = await puppeteer.launch();                       //Launch Puppeteer, launching an instance of Chrome
    const browser = await puppeteer.launch({headless: false});      //Headless manner -> watch Google Chrome works
    const page = await browser.newPage();                           //Create a new page to open and save ir in put varibale (page)
    await page.goto('https://www.google.com');                       //We goto the website we  choose
    await page.setViewport({
        width: 1000,
        height: 500
    })
    await page.screenshot({                                         //Take screenshot of the current page
        path: 'google.png'                                          //Save the screenshot as picturename.png               
    });

    await browser.close();                                          ///Close browser
}

getPic();       //this is an async function || async/await(wait for the promise) || returns a 'promise'