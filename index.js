const pup = require('pupeteer');

const url = "https://www.mercadolivre.com.br/";
const searchFor = "macbook";

(async () => {
    //inicializa o navegador
    const browser = await pup.launch();
    const page = await browser.newPage();
    console.log('Iniciei');

    await page.goto(url);
    console.log('Fui para a url!')

    await browser.close();
})();