import{test,expect} from "@playwright/test";

import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"

const email= "pravin500@mail.com";
const password = "pravin@12234";
test("Register", async ({page, baseURL})=>{
  const register = new RegisterPage(page);    
  await page.goto(`${baseURL}route=account/register`);
  await register.enterFirstName("pravin");
  await register.enterLastName("agale");
  await register.enterEmail(email);
  await register.enterTelephone("9877654333");
  await register.enterPassword(password);
  await register.enterConfirmPassword(password);
  expect(register.isSubscribeChecked()).toBeChecked();
  await register.clickContinueToRegisterBtn();
})