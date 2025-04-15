import{test,expect} from "@playwright/test";

test("Download Files", async ({page})=>{

await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
await page.waitForSelector("id=textbox");
await page.fill("id=textbox", "I am Pravin Agale doing automation practise using playwright typescript");
await page.locator("id=create").scrollIntoViewIfNeeded();
await page.click("id=create")


const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("id=link-to-download")
])

const fileName = download.suggestedFilename()
// const path = await download.path();
await download.saveAs(fileName);
console.log(fileName);


});

test("Upload File", async({page})=>{


    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    // await page.setInputFiles("input[type='file']", "uploadFiles/sample.txt");
   const [uploadFiles]  = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("input[type='file']")
    ])
    // const isSingle = uploadFiles.isMultiple();
     uploadFiles.setFiles("uploadFiles/sample.txt");

})