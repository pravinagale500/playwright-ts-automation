import{test,expect} from "@playwright/test";

test('CheckBox',async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckBox = page.locator("id=isAgeSelected");
    expect(singleCheckBox).not.toBeChecked();
    await singleCheckBox.check();
    expect(singleCheckBox).toBeChecked();
});