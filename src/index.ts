import puppeteer, { Browser } from 'puppeteer';
import { getPropertyBySelector, setUpNewPage } from 'puppeteer-helpers';

(async () => {
    try {
        let browser: Browser;
        let ubuntu = false;
        let headless = false;
        if (process.argv[2] === 'ubuntu' || process.argv[3] === 'ubuntu') {
            ubuntu = true;
        }
        if (process.argv[2] === 'headless' || process.argv[3] === 'headless') {
            headless = true;
        }
        if (ubuntu) {
            browser = await puppeteer.launch({ headless: true, args: [`--window-size=${1800},${1200}`, '--no-sandbox', '--disable-setuid-sandbox'] });
        }
        else {
            browser = await puppeteer.launch({ headless: headless, args: [`--window-size=${1800},${1200}`] });
        }

        const baseUrl = `https://www.amazon.com/dp/`;
        
        // Whatever products you want to scrape
        const asins = [ 'B0007L7GMW', 'B0007LHZCS', 'B0007LDX8I'];

        for (let asin of asins) {
            const url = baseUrl + asin;

            const page = await setUpNewPage(browser);
            await page.goto(url);
            const price = await getPropertyBySelector(page, '#priceblock_ourprice', 'innerHTML');
            const vendor = await getPropertyBySelector(page, '#merchant-info a', 'innerHTML');
            console.log('price, asin', price, vendor);

            await page.close();

            // Update database or price or something else?
        }

        await browser.close();

    }
    catch (e) {
        console.log('Error in initial');
    }
})();