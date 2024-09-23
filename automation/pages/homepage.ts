import { expect, Page } from '@playwright/test';


export class HomePage {
  readonly page: Page;

  // Locators
  readonly signUpButton;
  readonly logInButton;

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.getByTestId("UserStatus.Login");
    this.logInButton = page.getByTestId("UserStatus.Register");
  }

  // Navigate to the homepage
  async navigate() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Wolt Delivery: Food and more*/);
  }

  // Open registration modal
  async openRegistrationModal() {
    await this.signUpButton.click(); 


  }

}