import{test,expect} from '@playwright/test';

test('Inputs and Buttons', async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log('Before entering data: '+ await messageInput.inputValue());
    await messageInput.fill("Hi Pravin how are you?");
    console.log('After entering data: '+ await messageInput.inputValue());
});


test('Sum',async ({page})=>{

   await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
   const sum1Input = page.locator("input#sum1");
   const sum2Input = page.locator("input#sum2");

   const getValuesBtn = page.locator("//button[text()='Get Sum']");

   let num1 = 45;
   let num2 = 25;
   await sum1Input.fill("" + num1);
   await sum2Input.fill("" + num2);

   await getValuesBtn.click();
   const result = page.locator("#addmessage");
   console.log(await result.textContent());
   let expectedResult = num1 + num2;
   expect(result).toHaveText(""+expectedResult);

});

