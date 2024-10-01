**Test Case ID**: TC-UR-007

**Title**: Verify that a new user can successfully register using Facebook Sign-In

**Test Objective**: Verify that a new user can complete the registration process on the Wolt website using Facebook Sign-In and access their account.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to sign up using a social media account (Google, Apple, Facebook) so that I can register quickly.

**Preconditions**:

- The user is not logged in to Wolt.
- The user has a valid Facebook account not previously registered with Wolt.
- The phone number to be used is valid and not previously registered with Wolt.

**Test Data**:

- **Facebook Account Email**: testwoltuser@facebook.com
- **Facebook Password**: TestWoltUser123!
- **First Name**: Vardas
- **Last Name**: Pavardė
- **Phone Number**: +37061234567

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Registration Modal**:
   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

2. **Proceed with Facebook Sign-In**:
   - In the registration modal, click on the **"Continue with Facebook"** button.

3. **Facebook Authentication**:
   - On the Facebook login page:
     - Enter **testwoltuser@facebook.com** in the "Email or Phone" field.
     - Enter **TestWoltUser123!** in the "Password" field.
     - Click the **"Log In"** button.
     - If prompted, authorize the Wolt app by clicking **"Continue as [Your Name]"**.

4. **Continue Registration Process**:
   - After successful Facebook authentication, you are redirected back to the Wolt website.
   - **Reference**: Continue from **Step 5** onwards of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

**Expected Results**:

- **Step 1**:
  - The Wolt homepage loads successfully without errors.
  - Clicking the **"Sign up"** button opens the registration modal.

- **Step 2**:
  - Clicking the **"Continue with Facebook"** button redirects to the Facebook login page.

- **Step 3**:
  - The Facebook login page appears.
  - User can enter Facebook credentials and log in successfully.
  - If prompted, the user authorizes the Wolt app.
  - User is redirected back to the Wolt website.

- **Step 4**:
  - The registration process continues as per **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** from **Step 5** onwards.
  - The user completes the registration form, verifies their phone number, handles notification preferences, and completes the registration successfully.

**Actual Results**:

**Step 1: Navigate to Wolt Homepage and Open Registration Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.
- Clicked on the **"Sign up"** button, and the registration modal appeared.

**Step 2: Proceed with Facebook Sign-In**

- Located and clicked on the **"Continue with Facebook"** button in the registration modal.
- Redirected to the Facebook login page.

**Screenshot**: [Facebook Sign-In Button](../../images/TC-UR-007/TC-UR-007_Facebook_Signin_Button.png)

**Step 3: Facebook Authentication**

- The Facebook login page loaded successfully.
- Entered **testwoltuser@facebook.com** in the "Email or Phone" field.
- Entered **TestWoltUser123!** in the "Password" field.
- Clicked the **"Log In"** button.
- If prompted, clicked **"Continue as [Your Name]"** to authorize the Wolt app.
- Redirected back to the Wolt website.

**Screenshot**: [Facebook Login Page](../../images/TC-UR-007/TC-UR-007_Facebook_Login_Page.png)

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

- Defect identified: Closing the Facebook sign-in popup results in an empty error message being displayed.
  [DEF-UR-007-001](../../images/defects/DEF-UR-007-001.png): Error message appears without any explanatory text when Facebook login popup is closed and "Continue with Facebook" button shows a perpetual spinning icon.