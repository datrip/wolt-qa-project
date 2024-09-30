**Test Case ID**: TC-UR-010

**Title**: Verify that a user can successfully log in using Apple Sign-In

**Test Objective**: Verify that an existing user can successfully log in to the Wolt website using Apple Sign-In and access their account without the need to fill out the registration form again.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a returning user, I want to log in using my social media account so that I can access my account easily.

**Preconditions**:

- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in to Wolt.
- The user has a valid Apple account already registered with Wolt.

**Test Data**:

- **Apple Account**: existingwoltuser@apple.com
- **Apple Account Password**: ExistingWoltUser123!

**Test Steps**:

1. **Navigate to the Wolt Homepage**:
   - Open a web browser (Chrome or Firefox).
   - Enter "wolt.com" in the address bar and press Enter.

2. **Open Login Modal**:
   - Click on the **"Log in"** button located at the top right corner of the homepage.

3. **Verify the Login Modal Appears**:
   - Wait for the login modal window to appear centered on the page.

4. **Verify Modal Header and Body Text**:
   - Check the header text of the modal.
   - Check the body text of the modal.

5. **Proceed with Apple Sign-In**:
   - Locate the **"Continue with Apple"** button.
   - Click the **"Continue with Apple"** button.

6. **Apple Sign-In Process**:
   - Wait for the Apple sign-in popup window to load.
   - Enter **existingwoltuser@apple.com** in the email field.
   - Click **"Continue with password"**.
   - Enter the password **ExistingWoltUser123!** in the password field.
   - Click the Continue arrow.
   - Handle Two-Factor Authentication if prompted:
     - Enter the 6-digit verification code sent to your Apple device.
   - On the confirmation page, click **"Continue"** to proceed with using Wolt with your Apple Account.

7. **Verify Successful Login**:
   - Confirm that you are redirected back to the Wolt homepage.
   - Ensure that you are automatically logged in without being prompted to fill out the registration form.
   - Verify that your user icon or initials appear in the top right corner.
   - Click on the user icon to access account options and confirm they are accessible.

**Expected Results**:

- **Step 1**: The Wolt homepage loads successfully without any errors.

- **Step 2**: Clicking the **"Log in"** button triggers the display of the login modal.

- **Step 3**: The login modal window appears centered on the page.

- **Step 4**:
  - **Header**: Displays "Log in".
  - **Body Text**: Displays "Log in below to your Wolt account."

- **Step 5**: Clicking the **"Continue with Apple"** button opens an Apple sign-in popup window.

- **Step 6**: The Apple sign-in process completes successfully, and the user is redirected back to Wolt.

- **Step 7**:
  - The user is automatically logged in to their Wolt account.
  - The user is redirected to the Wolt homepage.
  - The user's initials or profile picture are displayed in the top right corner.
  - Clicking the user icon reveals accessible account options, indicating a successful login.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**

- The Wolt homepage loaded successfully without any errors.
- The website's main page displayed as expected.

**Screenshot**: [Wolt Homepage](../../images/TC-UR-010/TC-UR-010_Homepage.png)

**Step 2: Open Login Modal**

- Clicking on the **"Log in"** button at the top right corner of the homepage triggered the login modal.
- The modal appeared after the button was clicked.

**Screenshot**: [Login Modal Opens](../../images/TC-UR-010/TC-UR-010_Login_Modal.png)

**Step 3: Verify the Login Modal Appears**

- The login modal window appeared centered on the page.

**Step 4: Verify Modal Header and Body Text**

- **Header**: Displayed "Log in" as expected.
- **Body Text**: Displayed "Log in below to your Wolt account."

**Step 5: Proceed with Apple Sign-In**

- Located the **"Continue with Apple"** button in the modal.
- Clicked the **"Continue with Apple"** button.
- The Apple sign-in popup window opened.

**Screenshot**: [Apple Sign-In Button](../../images/TC-UR-010/TC-UR-010_Apple_Signin_Button.png)

**Step 6: Apple Sign-In Process**

- The Apple sign-in popup window loaded successfully.
- Entered **existingwoltuser@apple.com** in the email field.
- Clicked **"Continue with password"**.
- Entered the password **ExistingWoltUser123!** in the password field.
- Clicked the Continue arrow.
- Handled Two-Factor Authentication by entering the 6-digit verification code.
- On the confirmation page, clicked **"Continue"**.
- The Apple authentication process completed successfully.
- Redirected back to the Wolt homepage.

**Screenshot**: [Apple Sign-In Process](../../images/TC-UR-010/TC-UR-010_Apple_Signin_Process.png)

**Step 7: Verify Successful Login**

- After completing Apple Sign-In, redirected to the Wolt homepage without any additional prompts.
- The user's initials appeared at the top right corner, indicating a successful login.
- Clicked on the user icon and confirmed that the account options were accessible.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-010/TC-UR-010_Logged_In.png)

**Status**:

- [X] Pass

**Comments**:

- N/A