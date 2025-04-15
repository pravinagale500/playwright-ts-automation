import{test, expect} from "@playwright/test";

test("Handle Frames", async ({page})=>{


await page.goto("https://letcode.in/frame");

const allframes =  page.frames();
console.log("No of frames: "+ allframes.length);

const myframe = page.frame("firstFr");

await myframe?.fill("input[name='fname']", "Pravin");

await myframe?.fill("input[name='lname']","Agale");

expect(await myframe?.locator("p.has-text-info").textContent()).toContain("You have entered");

});


test("Frame Locator", async ({page})=>{

    await page.goto("https://letcode.in/frame");

    const frame = page.frameLocator("#firstFr");

    await frame.locator("input[name='fname']").fill("Pravin");
    await frame.locator("input[name='lname']").fill("Agale");

    expect(await frame.locator("p.has-text-info").textContent()).toContain("You have entered");

});

test("Nested Frame", async ({page})=>{

    await page.goto("https://letcode.in/frame");

    const frame = page.frameLocator("#firstFr");
    const innnerFrame = frame.frameLocator("iframe[src='innerframe']");

    const enterEmail =  innnerFrame.locator("input[name='email']");
    console.log("Before email entered is: " + await enterEmail.inputValue());
    await enterEmail.fill("pravinagale500@gmail.com");
    console.log("After email entered is: " + await enterEmail.inputValue());

    await frame.locator("input[name='fname']").fill("Pravin");
})