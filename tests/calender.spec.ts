import {test,expect} from "@playwright/test";
import moment from "moment";

test("Select Date dd/mm/yyyy using fill", async ({page})=>{
await page.waitForLoadState("domcontentloaded");
await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

let date="2025-04-14";

await page.fill("#birthday",date);


});

test("Select Date using moment", async ({page})=>{
    await page.waitForLoadState("domcontentloaded");
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    

    await selectDate(12, "December 2017");

    await page.reload();
    await selectDate(5, "December 2023");
    await page.reload();
    await selectDate(15, "March 2025");
    
    async function selectDate(date: number, dateToselect: string){
        await page.click("//input[@placeholder='Start date']");
        const mmyy =page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prevBtn = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const nextBtn =page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
    

    // let dateToselect: string = "December 2025";

        const thisMonth = moment(dateToselect, "MMMM YYYY").isBefore();

        console.log("this month? "+ thisMonth);

    while(await mmyy.textContent()!= dateToselect){
        if(thisMonth){
        await prevBtn.click();
        }else{

            await nextBtn.click(); 
        }
    }
    await page.click(`//td[@class='day'][text()='${date}']`);
}
    
    });
