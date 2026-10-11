import{test,expect}from'@playwright/test';

test("Xpath", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   let logo= await page.getByAltText('company-branding');
   await expect(logo).toBeVisible();

      await page.getByRole('textbox',{name:' Username '}).fill("Admin")
        await page.waitForTimeout(1000)

   await page.getByRole('button',{name:' Login '}).click();
     screenshort({path:'tests/screenshort/homepge.png'})

})
