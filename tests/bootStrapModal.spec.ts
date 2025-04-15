import {test,expect} from "@playwright/test";

test("Modal Alert", async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");


    const singleModalLaunchBtn = page.locator("(//button[text()='Launch Modal'])[1]");
    const multipleModalLaunchBtn = page.locator("(//button[text()='Launch Modal'])[2]");
    const mutipleFirstModalLaunchBtn = page.locator("(//button[text()='Launch Modal'])[3]");
  

    //(//button[text()='Save Changes'])[1]
    const saveChanges1= page.locator("(//button[text()='Save Changes'])[1]");
    //(//button[text()='Close'])[1]
    const close1= page.locator("(//button[text()='Save Changes'])[1]");
    //(//button[text()='Save Changes'])[2]
    const saveChanges2= page.locator("(//button[text()='Save Changes'])[2]");
    //(//button[text()='Close'])[2]
    const close2= page.locator("(//button[text()='Save Changes'])[2]");
     //(//button[text()='Save Changes'])[3]
     const saveChanges3= page.locator("(//button[text()='Save Changes'])[3]");
     //(//button[text()='Close'])[3]
     const close3= page.locator("(//button[text()='Save Changes'])[3]");
//Single Modal
    await singleModalLaunchBtn.click();
    await saveChanges1.click();

//Multiple Modal
    await multipleModalLaunchBtn.click();
    await close2.click();

//Multiple First Modal
await multipleModalLaunchBtn.click();
await mutipleFirstModalLaunchBtn.click();
await saveChanges3.click();
await close2.click();

})