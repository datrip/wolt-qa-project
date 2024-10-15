import { Page } from '@playwright/test';
import { HomePage } from './homepage'; // Ensure this line is present
import { Login } from './login';
import { Inbox } from './inbox';

export async function loginToApplication(page: Page): Promise<void> {
  const homePage = new HomePage(page);
  const login = new Login(page, true);
  const inbox = new Inbox(page, true);

  await homePage.navigate();
  await homePage.closePopup();
  await homePage.openRegistrationModal();
  await login.validateTitles();
  await login.submitEmail();
  await inbox.navigateToInbox();
  await inbox.loginInbox();
  await inbox.verifyLoginEmail();

  await inbox.openLoginLink();
  
  const homePageAfterLogin = new HomePage(page);
  await homePageAfterLogin.verifyLoggedIn();

  await page.goto('https://wolt.com/en/discovery');
}