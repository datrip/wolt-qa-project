**Test Case ID**: TC-UR-006

**Title**: Verify that a new user can successfully register using Apple Sign-In

**Test Objective**: Verify that a new user can complete the registration process on the Wolt website using Apple Sign-In and access their account.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to sign up using a social media account (Google, Apple, Facebook) so that I can register quickly.

**Preconditions**:

- The user is not logged in to Wolt.
- The user has a valid Apple account not previously registered with Wolt.
- The phone number to be used is valid and not previously registered with Wolt.

**Test Data**:

- **Apple Account Email**: testwoltuser@apple.com
- **Apple Password**: TestWoltUser123!
- **First Name**: Vardas
- **Last Name**: Pavardė
- **Phone Number**: +37061234567

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Registration Modal**:

   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

2. **Proceed with Apple Sign-In**:

   - In the registration modal, click on the **"Continue with Apple"** button.

3. **Apple Authentication**:

   - In the Apple sign-in window:
     - Enter **testwoltuser@apple.com** in the email field.
     - Click **"Continue with password"**.
     - Enter **TestWoltUser123!** in the password field.
     - Click the Continue arrow.
     - If prompted, complete Two-Factor Authentication by entering the 6-digit verification code sent to your Apple device.
     - On the confirmation page, click **"Continue"** to authorize Wolt to use your Apple account.

4. **Continue Registration Process**:

   - After successful Apple authentication, you are redirected back to the Wolt website.
   - **Reference**: Continue from **Step 5** onwards of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

**Expected Results**:

- **Step 1**:

  - The Wolt homepage loads successfully without errors.
  - Clicking the **"Sign up"** button opens the registration modal.

- **Step 2**:

  - Clicking the **"Continue with Apple"** button opens the Apple sign-in window.

- **Step 3**:

  - The Apple sign-in window appears.
  - User can enter Apple credentials and sign in successfully.
  - If prompted, the user completes Two-Factor Authentication.
  - User is redirected back to the Wolt website.

- **Step 4**:

  - The registration process continues as per **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** from **Step 5** onwards.
  - The user completes the registration form, verifies their phone number, handles notification preferences, and completes the registration successfully.

**Actual Results**:

**Step 1: Navigate to Wolt Homepage and Open Registration Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.
- Clicked on the **"Sign up"** button, and the registration modal appeared.

**Step 2: Proceed with Apple Sign-In**

- Located and clicked on the **"Continue with Apple"** button in the registration modal.
- The Apple sign-in window opened.

**Screenshot**: [Apple Sign-In Button](../../images/TC-UR-006/TC-UR-006_Apple_Signin_Button.png)

**Step 3: Apple Authentication**

- The Apple sign-in window loaded successfully.
- Entered **testwoltuser@apple.com** in the email field.
- Clicked **"Continue with password"**.
- Entered **TestWoltUser123!** in the password field.
- Clicked the Continue arrow.
- Completed Two-Factor Authentication by entering the 6-digit code received on the Apple device.
- On the confirmation page, clicked **"Continue"** to authorize Wolt.
- Redirected back to the Wolt website.

**Screenshot**: [Apple Sign-In Process](../../images/TC-UR-006/TC-UR-006_Apple_Signin_Process.png)

**Step 4: Continue Registration Process**

- Continued the registration process as per **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** from **Step 5** onwards.
- Entered **First Name**: Vardas.
- Entered **Last Name**: Pavardė.
- Entered **Phone Number**: +37061234567.
- Completed the phone number verification.
- Handled notification preferences.
- Registration completed successfully, and user was logged in.

**Status**:

- [X] Pass

**Comments**:

- N/A