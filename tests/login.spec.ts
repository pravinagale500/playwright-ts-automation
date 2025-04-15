import{test,expect, chromium} from '@playwright/test';

test("Login Test", async ()=>{

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();  
const page = await context.newPage();


await page.goto("https://ecommerce-playground.lambdatest.io/");
await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
await page.click("'Login'");
await page.fill("input#input-email.form-control","pravinagale500@gmail.com");
await page.fill("input#input-password.form-control","Lambdatest@1234");
await page.click("input[value='Login']");

const newContext = await browser.newContext();
const newPage = await newContext.newPage();
await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

});

