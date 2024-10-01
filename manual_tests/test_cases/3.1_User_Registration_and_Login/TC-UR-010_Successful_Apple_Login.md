**Test Case ID**: TC-UR-010

**Title**: Verify that a user can successfully log in using Apple Sign-In

**Test Objective**: Verify that an existing user can successfully log in to the Wolt website using Apple Sign-In and access their account without the need to fill out the registration form again.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a returning user, I want to log in using my social media account so that I can access my account easily.

**Preconditions**:

- The user is not logged in to Wolt.
- The user has a valid Apple account already registered with Wolt.

**Test Data**:

- **Apple ID**: existingwoltuser@apple.com
- **Apple Password**: ExistingWoltUser123!

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Login Modal**:
   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.

2. **Proceed with Apple Sign-In**:
   - In the login modal, click on the **"Continue with Apple"** button.

3. **Apple Authentication**:
   - In the Apple sign-in popup window:
     - Enter **existingwoltuser@apple.com** in the "Apple ID" field.
     - Click **"Continue"**.
     - Enter **ExistingWoltUser123!** in the "Password" field.
     - Click **"Continue"**.
     - If prompted, handle Two-Factor Authentication:
       - Enter the 6-digit verification code sent to your Apple device.
     - On the "Trust this browser" prompt, choose **"Not Now"** or **"Trust"**.
     - On the confirmation page, click **"Continue"** to proceed with using Wolt with your Apple ID.

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
  - Clicking the **"Continue with Apple"** button opens the Apple sign-in popup window.

- **Step 3**:
  - The Apple sign-in page appears.
  - User can enter Apple ID and password to log in successfully.
  - If prompted, Two-Factor Authentication is completed.
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

**Step 2: Proceed with Apple Sign-In**

- Located and clicked on the **"Continue with Apple"** button in the login modal.
- The Apple sign-in popup window opened.

**Screenshot**: [Apple Sign-In Button](../../images/TC-UR-010/TC-UR-010_Apple_Signin_Button.png)

**Step 3: Apple Authentication**

- The Apple sign-in window loaded successfully.
- Entered **existingwoltuser@apple.com** in the "Apple ID" field.
- Clicked **"Continue"**.
- Entered **ExistingWoltUser123!** in the "Password" field.
- Clicked **"Continue"**.
- Handled Two-Factor Authentication by entering the 6-digit verification code sent to the registered Apple device.
- On the "Trust this browser" prompt, chose **"Not Now"**.
- On the confirmation page, clicked **"Continue"**.
- The Apple authentication process completed successfully.
- Redirected back to the Wolt homepage.

**Screenshot**: [Apple Sign-In Process](../../images/TC-UR-010/TC-UR-010_Apple_Signin_Process.png)

**Step 4: Verify Successful Login**

- Automatically logged in to the Wolt account.
- User's initials appeared at the top right corner of the homepage.
- Clicked on the user icon and confirmed that account options (e.g., Profile, Settings, Logout) were accessible.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-010/TC-UR-010_Logged_In.png)

**Status**:

- [X] Pass

**Comments**:

- N/A