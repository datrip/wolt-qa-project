import { expect, Page } from '@playwright/test';
import { config } from 'dotenv';

config();

export class Apple {
  constructor(readonly page: Page) {}

  async signIn(applePopup: Page) {
    const emailInput = applePopup.locator('input[id="account_name_text_field"]');
    const passwordInput = applePopup.locator('input[type="password"]');

    const email = process.env.APPLE_EMAIL || '';
    const password = process.env.APPLE_PASSWORD || '';

    const nextButton = applePopup.locator('button#sign-in');
    const continueButton = applePopup.locator('button#continue-password');

    if (!email || !password) {
      throw new Error('Apple email or password are not defined in environment variables.');
    }

    await emailInput.fill(email);
    await nextButton.click();

    // Wait for continue button to appear (if necessary)
    await continueButton.waitFor();
    await continueButton.click();

    await passwordInput.fill(password);
    await nextButton.click();
  }
}