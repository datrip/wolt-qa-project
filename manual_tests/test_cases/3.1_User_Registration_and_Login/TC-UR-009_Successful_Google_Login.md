**Test Case ID**: TC-UR-009

**Title**: Verify that a user can successfully log in using Google Sign-In

**Test Objective**: Verify that an existing user can successfully log in to the Wolt website using Google Sign-In and access their account without the need to fill out the registration form again.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a returning user, I want to log in using my social media account so that I can access my account easily.

**Preconditions**:

- The user is not logged in to Wolt.
- The user has a valid Google account already registered with Wolt.

**Test Data**:

- **Google Account Email**: existingwoltuser@gmail.com
- **Google Password**: ExistingWoltUser123!

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Login Modal**:
   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.

2. **Proceed with Google Sign-In**:
   - In the login modal, click on the **"Continue with Google"** button.

3. **Google Authentication**:
   - On the Google sign-in page:
     - Enter **existingwoltuser@gmail.com** in the "Email or phone" field.
     - Click **"Next"**.
     - Enter **ExistingWoltUser123!** in the "Password" field.
     - Click **"Next"**.
   - If prompted, accept any terms and permissions requested by Wolt.

4. **Verify Successful Login**:
   - Confirm that you are redirected back to the Wolt homepage.
   - Ensure that you are automatically logged in without being prompted to fill out any registration forms.
   - Verify that your user icon or initials appear in the top right corner.
   - Click on the user icon and confirm that account options are accessible.

**Expected Results**:

- **Step 1**:
  - The Wolt homepage loads successfully without errors.
  - Clicking the **"Log in"** button opens the login modal.

- **Step 2**:
  - Clicking the **"Continue with Google"** button redirects to the Google sign-in page.

- **Step 3**:
  - The Google sign-in page appears.
  - User can enter Google credentials and sign in successfully.
  - If prompted, the user accepts any terms and permissions.
  - User is redirected back to the Wolt website.

- **Step 4**:
  - The user is automatically logged in to their Wolt account.
  - The user's profile icon or initials are displayed in the top right corner.
  - Account options are accessible, indicating a successful login.

**Actual Results**:

**Step 1: Navigate to Wolt Homepage and Open Login Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.
- Clicked on the **"Log in"** button, and the login modal appeared.

**Step 2: Proceed with Google Sign-In**

- Located and clicked on the **"Continue with Google"** button in the login modal.
- Redirected to the Google sign-in page.

**Screenshot**: [Google Sign-In Button](../../images/TC-UR-009/TC-UR-009_Google_Signin_Button.png)

**Step 3: Google Authentication**

- The Google sign-in page loaded successfully.
- Entered **existingwoltuser@gmail.com** in the "Email or phone" field.
- Clicked **"Next"**.
- Entered **ExistingWoltUser123!** in the "Password" field.
- Clicked **"Next"**.
- Google authentication completed successfully.
- If prompted, accepted any terms and permissions requested by Wolt.
- Redirected back to the Wolt homepage.

**Screenshot**: [Google Sign-In Form](../../images/TC-UR-009/TC-UR-009_Google_Signin_Page.png)

**Step 4: Verify Successful Login**

- Automatically logged in to the Wolt account.
- User's initials appeared at the top right corner of the homepage.
- Clicked on the user icon and confirmed that account options were accessible.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-009/TC-UR-009_Logged_In.png)

**Status**:

- [X] Pass

**Comments**:

- N/A