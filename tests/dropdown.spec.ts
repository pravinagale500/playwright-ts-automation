import{test,expect} from "@playwright/test";

test("Single Dropdown", async({page})=>{

await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

await page.selectOption("#select-demo",{
    // label:"Tuesday"//by label
    // value:"Monday"//by value
    index:5 //by index
})
});

test("Multiple Select Dropdown", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.locator("#multi-select").scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.selectOption("#multi-select",[
    { 
        label:"Texas"
    },//by label
    { 
        value:"Washington"
    }, //by value ,
    { 
        index:2 
    }//by index} 
    ])
    
    });

    test("jquery dropdown search", async({page})=>{

        await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
        
        await page.locator("#country+span").click();
//locator chaining
        await page.locator("ul#select2-country-results").locator("li",{
            hasText:"India"
        }).click();

 //Using Function       
    await selectCountry("Denmark");
       
async function selectCountry(countryName) {
        await page.locator("#country+span").click();
        //locator chaining
                await page.locator("ul#select2-country-results").locator("li",{
                    hasText:countryName
                }).click();
            }
});     