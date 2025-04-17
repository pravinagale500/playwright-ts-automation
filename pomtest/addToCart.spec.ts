import{test,expect} from "../base/pomFixture";
import * as data from "../test-data/addToCart.json";

test("Register", async ({page, baseURL,registerPage})=>{
//   const register = new RegisterPage(page);    
  await page.goto(`${baseURL}route=account/register`);
  await registerPage.enterFirstName(data.fistname);
  await registerPage.enterLastName(data.lastname);
  await registerPage.enterEmail(data.email);
  await registerPage.enterTelephone(data.telephone); 
  await registerPage.enterPassword(data.password);
  await registerPage.enterConfirmPassword(data.password);
  expect(registerPage.isSubscribeChecked()).toBeChecked();
  await registerPage.clickContinueToRegisterBtn();
})