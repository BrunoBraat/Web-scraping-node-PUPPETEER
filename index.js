const pup = require('puppeteer');

const url = "https://www.mercadolivre.com.br/";
const searchFor = "macbook";

(async () => {
    //inicializa o navegador
    const browser = await pup.launch({ headless: false });
    const page = await browser.newPage();
    console.log('Iniciei');

    await page.goto(url);
    console.log('Fui para a url!')

    await page.waitForSelector('#cb1-edit');

    await page.type('#cb1-edit', searchFor);

    await Promise.all([
        page.waitForNavigation(),
        page.click('.nav-search-btn')
    ])

    const links = await page.$$eval('ui-search-result-image__element > a', el => el.map(link => link.href));
    console.log(links);

    await page.setTimeout(() => {
        
    }, 3000);

    await browser.close();
})();