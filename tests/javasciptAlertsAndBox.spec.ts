import{test,expect} from "@playwright/test";

test("Alerts", async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
 //Javascript Alert   
    // page.on("dialog",async (alert)=>{
    //   const text = alert.message();
    //   console.log(text);
    //    await alert.accept();
    // })
    // await page.locator("button:has-text('Click Me')").nth(0).click();
//Confirm Box
    // page.on("dialog",async (alert)=>{
    //     const text = alert.message();
    //     console.log(text);
    //      await alert.dismiss();
    //   })
    // await page.locator("button:has-text('Click Me')").nth(1).click();
    // expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
//Prompt Box
    page.on("dialog",async (alert)=>{
        const text = alert.defaultValue();
        console.log(text);
         await alert.accept("pravin");
      })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'pravin' !");
});