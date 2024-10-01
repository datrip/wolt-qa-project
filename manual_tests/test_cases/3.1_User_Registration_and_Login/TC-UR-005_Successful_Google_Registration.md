**Test Case ID**: TC-UR-005

**Title**: Verify that a new user can successfully register using Google Sign-In

**Test Objective**: Verify that a new user can complete the registration process on the Wolt website using Google Sign-In and access their account.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to sign up using a social media account (Google, Apple, Facebook) so that I can register quickly.

**Preconditions**:

- The user is not logged in to Wolt.
- The user has a valid Google account not previously registered with Wolt.
- The phone number to be used is valid and not previously registered with Wolt.

**Test Data**:

- **Google Account Email**: testwoltuser@gmail.com
- **Google Password**: TestWoltUser123!
- **First Name**: Vardas
- **Last Name**: Pavardė
- **Phone Number**: +37061234567

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Registration Modal**:

   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

2. **Proceed with Google Sign-In**:

   - In the registration modal, click on the **"Continue with Google"** button.

3. **Google Authentication**:

   - In the Google sign-in window:
     - Enter **testwoltuser@gmail.com** in the "Email or phone" field.
     - Click **"Next"**.
     - Enter **TestWoltUser123!** in the "Password" field.
     - Click **"Next"**.
     - If prompted, accept any terms or permissions.

4. **Continue Registration Process**:

   - After successful Google authentication, you are redirected back to the Wolt website.
   - **Reference**: Continue from **Step 5** onwards of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

**Expected Results**:

- **Step 1**:

  - The Wolt homepage loads successfully without errors.
  - Clicking the **"Sign up"** button opens the registration modal.

- **Step 2**:

  - Clicking the **"Continue with Google"** button opens the Google sign-in window.

- **Step 3**:

  - The Google sign-in window appears.
  - User can enter Google credentials and sign in successfully.
  - User is redirected back to the Wolt website.

- **Step 4**:

  - The registration process continues as per **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)** from **Step 5** onwards.
  - The user completes the registration form, verifies their phone number, handles notification preferences, and completes the registration successfully.

**Actual Results**:

**Step 1: Navigate to Wolt Homepage and Open Registration Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.
- Clicked on the **"Sign up"** button, and the registration modal appeared.

**Step 2: Proceed with Google Sign-In**

- Located and clicked on the **"Continue with Google"** button in the registration modal.
- The Google sign-in window opened.

**Screenshot**: [Google Sign-In Button](../../images/TC-UR-005/TC-UR-005_Google_Signin_Button.png)

**Step 3: Google Authentication**

- The Google sign-in window loaded successfully.
- Entered **testwoltuser@gmail.com** in the "Email or phone" field.
- Clicked **"Next"**.
- Entered **TestWoltUser123!** in the "Password" field.
- Clicked **"Next"**.
- Redirected back to the Wolt website.

**Screenshot**: [Google Sign-In Process](../../images/TC-UR-005/TC-UR-005_Google_Signin_Page.png)

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