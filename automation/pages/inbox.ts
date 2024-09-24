import { expect, Page } from '@playwright/test';
import { config } from 'dotenv';

config();

export class Inbox {
    readonly page: Page;

    // Locators
    readonly senderEmail;
    readonly registerLink;
    readonly loginLink;

    constructor(page: Page) {
        this.page = page;

        // Locators
        this.senderEmail = page.locator('address[title="info@wolt.com"]');
        this.registerLink = page.getByRole('link', { name: 'Register a new Wolt account' });
        this.loginLink = page.getByRole('link', { name: 'Sign in' });
    }


    // Navigate to inbox.eu
    async navigateToInbox() {
        await this.page.goto('https://login.inbox.eu/login');
        await expect(this.page).toHaveTitle(/.*Inbox\.eu.*/);
    }


    // Close any popup that appears
    async closePopup() {
        await this.page.waitForTimeout(2000);

        const acceptButton = this.page.getByText("Continue with free trial");
        if (await acceptButton.isVisible()) {
            await acceptButton.click();
        }
    }

    // Verify the registration email content
    async verifyRegistrationEmail() {
        const registrationSubject = this.page.getByText("Welcome to Wolt").first();
        const woltLogo = this.page.locator('img[data-sourceurl*="blue_logo.png"]');
        const emailText = this.page.getByText("Hi, we'll set you up with a Wolt account in no time. Just click the button below!");

        await registrationSubject.click();

        await expect(this.senderEmail).toBeVisible();
        await expect(woltLogo).toBeVisible();
        await expect(emailText).toBeVisible();
        await expect(this.registerLink).toBeVisible();
    }

    // Open the registration link from the email
    async openRegistrationLink() {
        await this.registerLink.click();
    }

    // Open the login link from the email
    async openLoginLink() {
        await this.loginLink.click();
    }

    // Verify the login email content
    async verifyLoginEmail() {
        const loginSubject = this.page.getByText("Log in to Wolt").first();
        const woltLogo = this.page.locator('img[data-sourceurl*="blue_logo.png"]');
        const emailText = this.page.getByText("Hello! You can sign in to Wolt by clicking the button below. Enjoy Wolt!");

        await loginSubject.click();

        await expect(this.senderEmail).toBeVisible();
        await expect(woltLogo).toBeVisible();
        await expect(emailText).toBeVisible();
        await expect(this.loginLink).toBeVisible();
    }

    // Log in to the inbox using provided credentials
    async loginInbox() {
        const email = process.env.INBOX_EMAIL || '';
        const password = process.env.INBOX_PASSWORD || '';

        if (!email || !password) {
            throw new Error('Email or password are not defined in environment variables.');
        }

        const emailInput = this.page.locator("#userName");
        const passwordInput = this.page.locator("#password");
        const submitButton = this.page.locator("#implogin__btn_sign-in");

        await emailInput.fill(email);
        await passwordInput.fill(password);
        await submitButton.click();

        await this.closePopup();
    }
}