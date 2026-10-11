import { test, expect } from '@playwright/test';

test("File upload", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/upload");
        await page.waitForTimeout(2000)


    const file = 'C:\\Users\\Punam Jadhav\\OneDrive\\Desktop\\Telecom.postman_environment.json';

    await page.setInputFiles('#fileInput', file);

    await page.waitForTimeout(4000)

    await page.locator('#fileSubmit').click();
        await page.waitForTimeout(2000)

       
});