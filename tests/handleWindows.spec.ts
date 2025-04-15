import{test,expect, Page} from "@playwright/test";


test("Single windows popup/tab", async ({page})=>{

await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

console.log(page.url());

//de-structuring 
const [newWindow] = await Promise.all([
page.waitForEvent("popup"),
page.click("'Follow On Twitter'")

]);

console.log(newWindow.url());


});


test("Multiple windows popup/tabs", async ({page})=>{

    await page.waitForLoadState();
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    
    
    //de-structuring 
    const [multipleWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth")
    
    ]);
    await page.waitForLoadState();
    const pages = multipleWindow.context().pages();
    console.log("No of tabs: " + pages.length);
    
    
    pages.forEach(tab=>{
        console.log(tab.url());
    })
let facebookPage: Page;
for(let index =0; index < pages.length; index++){
const url = pages[index].url()

if(url=="https://www.facebook.com/lambdatest/"){
    facebookPage=pages[index];
}
  }

  const text = await facebookPage.textContent("//h1");
  console.log(text);
    
    });

