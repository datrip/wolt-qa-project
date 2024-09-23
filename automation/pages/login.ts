import { expect, Page, Locator } from '@playwright/test';  // Ensure 'Locator' is imported
import { config } from 'dotenv';

config();

export class Login {
    readonly page: Page;

    // Locators for email login
    emailInput: Locator;
    nextButton: Locator;

    // Private members for third-party login buttons
    private _googleButton: Locator | undefined;
    private _appleButton: Locator | undefined;
    private _facebookButton: Locator | undefined;

    // Email
    email: string;

    // Log in / Sign up - UI text
    static readonly LOGIN_TITLE = "Create an account or log in";
    static readonly LOGIN_SUBTITLE = "Log in below or create a new Wolt account.";

    // Email Sent - UI text
    static readonly EMAIL_SENT_TITLE = "Great, check your inbox!";
    readonly EMAIL_SENT_SUBTITLE: string;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTestId("MethodSelect.EmailInput");
        this.nextButton = page.getByTestId("StepMethodSelect.NextButton");

        this.email = process.env.EMAIL || '';

        this.EMAIL_SENT_SUBTITLE = `We've just sent a sign-in link to ${this.email}. Please check your spam folder in case you didn't get the email.`;
    }


    // Google Button (Lazy Loading)
    get googleButton(): Locator {
        if (!this._googleButton) {
            this._googleButton = this.page.getByTestId('MethodSelect.Google');
        }
        return this._googleButton;
    }

    // Apple Button (Lazy Loading)
    get appleButton(): Locator {
        if (!this._appleButton) {
            this._appleButton = this.page.getByTestId('MethodSelect.Apple');
        }
        return this._appleButton;
    }

    // Facebook Button (Lazy Loading)
    get facebookButton(): Locator {
        if (!this._facebookButton) {
            this._facebookButton = this.page.getByTestId('MethodSelect.Facebook');
        }
        return this._facebookButton;
    }

    // Validating titles
    async validateTitles() {
        await expect(this.page.getByTestId("MethodSelect.Title")).toHaveText(Login.LOGIN_TITLE);
        await expect(this.page.getByTestId("MethodSelect.SubTitle")).toHaveText(Login.LOGIN_SUBTITLE);
    }

    // Third-party login validation
    async validateThirdParty() {
        await expect(this.googleButton).toBeVisible();
        await expect(this.appleButton).toBeVisible();
        await expect(this.facebookButton).toBeVisible();
    }

    // Email submit
    async submitEmail() {
        if (!this.email) {
            throw new Error('Email is not defined in environment variables.');
        }
        
        await this.emailInput.fill(this.email);
        await this.nextButton.click();
        
        await expect(this.page.getByRole("heading")).toHaveText(Login.EMAIL_SENT_TITLE);
        await expect(this.page.getByText(this.EMAIL_SENT_SUBTITLE)).toBeVisible();
    }
}