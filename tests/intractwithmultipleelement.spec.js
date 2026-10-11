import{test,expect}from'@playwright/test';

test("Multipleelment", async({page})=>{
    test.setTimeout(40000);

    await page.goto("https://the-internet.herokuapp.com/")

   let count =await page.locator('#content a').count();
   console.log(count)

   for(let i=0;i<count;i++)
   {
    //await page.locator('#content a').nth(i).click();
    let text=await page.locator('#content a').nth(i).innerText();
       console.log(text)
       await page.locator('#content a').nth(i).click();
       console.log(await page.title());
       await page.goBack();



   }
})
   
