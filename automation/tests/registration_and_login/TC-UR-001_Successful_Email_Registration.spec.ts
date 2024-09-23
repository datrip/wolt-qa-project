import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage';
import { Login } from '../../pages/login';
import { Cookies } from '../../pages/cookies';

test.describe('User Registration and Login', () => {
  test('TC-UR-001: Successful Email Registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page);
    const cookies = new Cookies(page);

    // Navigate to Wolt homepage
    await homePage.navigate();

    // Close cookies popup if visible
    await cookies.closePopup();

    // Open registration modal
    await homePage.openRegistrationModal();

    // Verify the registration modal titles
    await login.validateTitles();

    // Proceed with email registration
    await login.submitEmail();

  });
});