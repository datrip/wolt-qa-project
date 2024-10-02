import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage';
import { Login } from '../../pages/login';
import { Inbox } from '../../pages/inbox';
import { RegisterForm } from '../../pages/registerForm';
import { Google } from '../../pages/google';
import { Apple } from '../../pages/apple';
import { Facebook } from '../../pages/facebook';

test.describe('User Registration and Login', () => {
  test('TC-UR-001: Successful Email Registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page, false); 
    const inbox = new Inbox(page, false);
    const registerForm = new RegisterForm(page);

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

    // Input user's information
    await registerForm.inputInfo();

    // Actual registration is skipped due to working with production environment and to not break the terms & conditions

  });

  test('TC-UR-002: Invalid Email Format', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page);
    
    // Navigate to Wolt homepage
    await homePage.navigate();

    // Close cookies popup if visible
    await homePage.closePopup();

    // Open registration modal
    await homePage.openRegistrationModal();

    // Verify errors are displayed for invalid emails
    await login.invalidEmailFormat();

  });

  test('TC-UR-003: Email Already Registered', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page, true);
    const inbox = new Inbox(page, true);

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

    // Verify Login email contents
    await inbox.verifyLoginEmail();

    // Verify Login email link
    await inbox.openLoginLink();

    // Verify account menu displayed on top right of the page
    await homePage.verifyLoggedIn();

  });

  test('TC-UR-004: Resend Registration Email', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page, false); 
    const inbox = new Inbox(page, false);

    // Navigate to Wolt homepage
    await homePage.navigate();

    // Close cookies popup if visible
    await homePage.closePopup();

    // Open registration modal
    await homePage.openRegistrationModal();

    // Proceed with email registration
    await login.submitEmail();

    // Resend emails until error is encountered
    await login.verifyResendEmail();

    // Navigate to Inbox homepage
    await inbox.navigateToInbox();

    // Open email inbox
    await inbox.loginInbox();

    // Check for multiple registration emails and verify the content of the most recent one
    await inbox.checkMultipleEmails();

  });

  test('TC-UR-005: Successful Google Registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const login = new Login(page, false); 
    const google = new Google(page);

    // Navigate to Wolt homepage
    await homePage.navigate();

    // Close cookies popup if visible
    await homePage.closePopup();

    // Open registration modal
    await homePage.openRegistrationModal();

    // Verify that third-party buttons are visible
    await login.validateThirdParty();

    // Click "Continue with Google"
    await login.clickGoogle();

    // Sign-in using Gmail credentials [Disabled due to Google's bot auto detection]
    // await google.signIn();

    // Input user's information
    // await registerForm.inputInfo();

    // Actual registration is skipped due to working with production environment and to not break the terms & conditions
  });

  test('TC-UR-006: Successful Apple Registration', async ({ page, context}) => {
    const homePage = new HomePage(page);
    const login = new Login(page, false); 
    const apple = new Apple(page);

    // Navigate to Wolt homepage
    await homePage.navigate();

    // Close cookies popup if visible
    await homePage.closePopup();

    // Open registration modal
    await homePage.openRegistrationModal();

    // Verify that third-party buttons are visible
    await login.validateThirdParty();

   // Click "Continue with Apple" and capture the popup window
   const [applePopup] = await Promise.all([
    context.waitForEvent('page'),
    login.clickApple(),  
  ]);

    // Sign-in using Gmail credentials [Disabled due to Apple's bot auto detection]
    //await apple.signIn(applePopup);

    // Input user's information
    // await registerForm.inputInfo();
  });
  
  test('TC-UR-007: Successful Facebook Registration', async ({ page, context }) => {
    const homePage = new HomePage(page);
    const login = new Login(page, false);
    const facebook = new Facebook(page);
  
    // Navigate to your application's homepage
    await homePage.navigate();
  
    // Close any popups if present
    await homePage.closePopup();
  
    // Open registration modal
    await homePage.openRegistrationModal();
  
    // Verify that third-party buttons are visible
    await login.validateThirdParty();
  
    // Click "Continue with Facebook" and capture the popup window
    const [facebookPopup] = await Promise.all([
      context.waitForEvent('page'),
      login.clickFacebook(),  
    ]);
  
    // Sign-in using Facebook credentials in the popup [Disabled due to Facebook's bot auto detection]
    // await facebook.signIn(facebookPopup);

    // Input user's information
    // await registerForm.inputInfo();
  
  });
  
});