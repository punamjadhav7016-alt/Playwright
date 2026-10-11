import{test,expect}from'@playwright/test';

test("Xpath", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='name']").fill("Punam");
})
