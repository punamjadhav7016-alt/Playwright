import { test, expect } from '@playwright/test';

test('Locator Demo', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    let acturl = await page.url();

    console.log(acturl)

    await expect(page).toHaveURL(acturl);

    const title=await page.title();
    console.log(title);
     await expect(page).toHaveTitle(title);

});