const {test, expect} = require("@playwright/test")

test('Home Page', async ({page})=>{
    await page.goto("https://www.demoblaze.com/");
    
    const pageTitle = page.title();
    const pageURL = page.url();
    
    await expect(page).toHaveTitle("STORE"); //check if title is STORE
    await expect(page).toHaveURL("https://www.demoblaze.com/");
    
    await page.close();

})