import{test as baseTest} from "@playwright/test";
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"

type pages={
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    specialHotPage: SpecialHotPage
}


const testPages = baseTest.extend<pages>({

registerPage: async ({page}, use) =>{
    await use(new RegisterPage(page));
}

})

export const test = testPages;
export const expect= testPages.expect;