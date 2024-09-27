import { expect, Page, Locator } from '@playwright/test';  
import { config } from 'dotenv';

config();

export class Login {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly nextButton: Locator;
    readonly isRegistered: boolean;

    // Log in / Sign up - UI text
    static readonly LOGIN_TITLE = "Create an account or log in";
    static readonly LOGIN_SUBTITLE = "Log in below or create a new Wolt account.";

    // Email Sent - UI text
    static readonly EMAIL_SENT_TITLE = "Great, check your inbox!";

    constructor(page: Page, isRegistered: boolean = false) {
        this.page = page;
        this.isRegistered = isRegistered;
        this.emailInput = page.getByTestId("MethodSelect.EmailInput");
        this.nextButton = page.getByTestId("StepMethodSelect.NextButton");
    }

    // Validating titles
    async validateTitles() {
        await expect(this.page.getByTestId("MethodSelect.Title")).toHaveText(Login.LOGIN_TITLE);
        await expect(this.page.getByTestId("MethodSelect.SubTitle")).toHaveText(Login.LOGIN_SUBTITLE);
    }

    // Third-party login validation
    async validateThirdParty() {
        const googleButton = this.page.getByTestId('MethodSelect.Google');
        const appleButton = this.page.getByTestId('MethodSelect.Apple');
        const facebookButton = this.page.getByTestId('MethodSelect.Facebook');

        await expect(googleButton).toBeVisible();
        await expect(appleButton).toBeVisible();
        await expect(facebookButton).toBeVisible();
    }

    // Email submit
    async submitEmail() {
        const email = this.isRegistered 
            ? process.env.REGISTERED_INBOX_EMAIL 
            : process.env.NEW_INBOX_EMAIL;

        if (!email) {
            throw new Error(`${this.isRegistered ? 'Registered' : 'New'} email is not defined in environment variables.`);
        }

            

        const EMAIL_SENT_SUBTITLE = `We've just sent a sign-in link to ${email}. Please check your spam folder in case you didn't get the email.`;

        await this.emailInput.fill(email);
        await this.nextButton.click();

        await expect(this.page.getByRole("heading")).toHaveText(Login.EMAIL_SENT_TITLE);
        await expect(this.page.getByText(EMAIL_SENT_SUBTITLE)).toBeVisible();
    }

    async invalidEmailFormat(){
        const invalidEmails = [
            'plainaddress',
            '@test-test.wolt',
            'user@',
            'user@.wolt',
            '.user@wolt.com',
            'user..2000@wolt.com',
            'user@wolt@wolt.com',
            'user@wolt',
            'user@wolt..com',
            'user@%*.wolt'
        ];

        const errorElement = this.page.getByTestId("MethodSelect.EmailInputError");

            for (const email of invalidEmails) {
            // Clear the input field
            await this.emailInput.clear();

            // Enter the invalid email
            await this.emailInput.fill(email);

            // Click the Next button
            await this.nextButton.click();

            // Verify that the error message is displayed
            await expect(errorElement).toBeVisible();
            await expect(errorElement).toHaveText("Please enter a valid email.");

            // If next button is still visible, that means we didn't navigate to the next page
            await expect(this.emailInput).toBeVisible();

    }
}

    async verifyResendEmail(){
        const resendButton = this.page.getByTestId("EmailSent.Resend");
        const resendSuccess = this.page.getByTestId("EmailSent.Success");
        const resendError = this.page.getByTestId("EmailSent.Error");

         // Attempt to resend email 5 times
        for (let i = 0; i < 5; i++) {
            await resendButton.click();

            if (i < 4) {
                // For the first 4 attempts, expect success message
                await expect(resendSuccess).toBeVisible({ timeout: 5000 });
                await expect(resendSuccess).toHaveText("Email sent!");
            } else {
                // On the 5th attempt, expect error indicator
                await expect(resendError).toBeVisible();
                await expect(this.page.getByText("Too many requests")).toBeVisible();
            }

            // Wait a bit between attempts
            await this.page.waitForTimeout(1000);
        }
    }
}