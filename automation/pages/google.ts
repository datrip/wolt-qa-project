import { expect, Page } from '@playwright/test';
import { config } from 'dotenv';

config();

export class Google {
  readonly page: Page;


  constructor(page: Page) {
        this.page = page;

  }

  async signIn(){
    const emailInput = this.page.locator('input[type="email"]');
    const passwordInput = this.page.locator('input[type="password"]');

    const email = process.env.GMAIL_EMAIL || '';
    const password = process.env.GMAIL_PASSWORD || '';

    const nextButton = this.page.locator('button:has-text("Next")')

    if (!email || !password) {
      throw new Error('Gmail email or password are not defined in environment variables.');
  }

    await emailInput.fill(email);
    await nextButton.click();
    
    await passwordInput.fill(password);
    await nextButton.click();


  }
}