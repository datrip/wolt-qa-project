import { expect, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  userMenu;
  userMenu_Profile;
  constructor(page: Page) {
    this.page = page;

    this.userMenu = this.page.getByTestId("UserStatus.ProfileImage");
    this.userMenu_Profile = this.page.getByTestId("UserMenuItem.Profile");
  }

  // Navigate to the homepage and verify the title
  async navigate() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Wolt Delivery: Food and more*/);
  }

  // Open the registration modal by clicking the sign-up button
  async openRegistrationModal() {
    // Locate the sign-up button within this method
    const signUpButton = this.page.getByTestId("UserStatus.Login");
    await signUpButton.click();
  }

  // Close the popup if it's visible
  async closePopup() {
    // Wait for potential popup to appear
    await this.page.waitForTimeout(2000);

    // Locate the accept button within this method
    const acceptButton = this.page.getByTestId("allow-button");

    // If the accept button is visible, click it to close the popup
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
    }
  }

  async verifyLoggedIn(){
    await expect(this.userMenu).toBeVisible();
    await expect(this.userMenu_Profile).toBeVisible();

  }
}