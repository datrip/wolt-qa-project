import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage';
import { Login } from '../../pages/login';
import { Inbox } from '../../pages/inbox';

test.describe('User Registration and Login', () => {
  test('TC-UR-001: Successful Email Registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page);
    const inbox = new Inbox(page);

    // Navigate to Wolt homepage
    await homePage.navigate();

    // Close cookies popup if visible
    await homePage.closePopup();

    // Open registration modal
    await homePage.openRegistrationModal();

    // Verify the registration modal titles
    await login.validateTitles();

    // Proceed with email registration
    await login.submitEmail();

    // Navigate to Inbox homepage
    await inbox.navigateToInbox();

    // Open email inbox
    await inbox.loginInbox();

    // Verify Registration email contents
    await inbox.verifyRegistrationEmail();

    // Verify Registration email link
    await inbox.openRegistrationLink();

    // Actual registration is skipped due to working with production environment and to not break the terms & conditions
  });
});