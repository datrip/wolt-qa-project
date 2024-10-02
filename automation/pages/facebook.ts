import { expect, Page } from '@playwright/test';
import { config } from 'dotenv';

config();

export class Facebook {
  constructor(readonly page: Page) {}

  async signIn(facebookPopup: Page) {
    const emailInput = facebookPopup.locator('input#email');
    const passwordInput = facebookPopup.locator('input#pass');
    const submitButton = facebookPopup.locator('input[type="submit"]');
    const acceptCookiesButton = facebookPopup.getByRole('button', { name: 'Allow all cookies' });

    const email = process.env.FACEBOOK_EMAIL || '';
    const password = process.env.FACEBOOK_PASSWORD || '';

    if (!email || !password) {
      throw new Error('Facebook email or password are not defined in environment variables.');
    }

    
    acceptCookiesButton.click();

    await emailInput.fill(email);
    await passwordInput.fill(password);
    await submitButton.click();


  }

  async closeFacebookPopUp(facebookPopup: Page){
    

  }
}