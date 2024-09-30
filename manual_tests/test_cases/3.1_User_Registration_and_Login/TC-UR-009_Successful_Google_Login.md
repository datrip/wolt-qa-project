**Test Case ID**: TC-UR-009

**Title**: Verify that a user can successfully log in using Google Sign-In

**Test Objective**: Verify that an existing user can successfully log in to the Wolt website using Google Sign-In and access their account without the need to fill out the registration form again.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a returning user, I want to log in using my social media account so that I can access my account easily.

**Preconditions**:

- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in to Wolt.
- The user has a valid Google account already registered with Wolt.
  
**Test Data**:

- **Google Account**: existingwoltuser@gmail.com
- **Google Account Password**: ExistingWoltUser123!

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

5. **Proceed with Google Sign-In**:
   - Locate the **"Continue with Google"** button.
   - Click the **"Continue with Google"** button.

6. **Google Sign-In Process**:
   - Wait for the Google sign-in page to load.
   - Enter **existingwoltuser@gmail.com** in the "Email or phone" field.
   - Click **"Next"**.
   - Enter the password **ExistingWoltUser123!** in the password field.
   - Click **"Next"**.

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

- **Step 5**: Clicking the **"Continue with Google"** button redirects to the Google sign-in page.

- **Step 6**: The Google sign-in process completes successfully, and the user is redirected back to Wolt.

- **Step 7**:
  - The user is automatically logged in to their Wolt account.
  - The user is redirected to the Wolt homepage.
  - The user's initials or profile picture are displayed in the top right corner.
  - Clicking the user icon reveals accessible account options, indicating a successful login.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**

- The Wolt homepage loaded successfully without any errors.
- The website's main page displayed as expected.

**Screenshot**: [Wolt Homepage](../../images/TC-UR-009/TC-UR-009_Homepage.png)

**Step 2: Open Login Modal**

- Clicking on the **"Log in"** button at the top right corner of the homepage triggered the login modal.
- The modal appeared after the button was clicked.

**Screenshot**: [Login Modal Opens](../../images/TC-UR-009/TC-UR-009_Login_Modal.png)

**Step 3: Verify the Login Modal Appears**

- The login modal window appeared centered on the page.

**Step 4: Verify Modal Header and Body Text**

- **Header**: Displayed "Log in" as expected.
- **Body Text**: Displayed "Log in below to your Wolt account."

**Step 5: Proceed with Google Sign-In**

- Located the **"Continue with Google"** button in the modal.
- Clicked the **"Continue with Google"** button.
- The system initiated the Google sign-in process.

**Screenshot**: [Google Sign-In Button](../../images/TC-UR-009/TC-UR-009_Google_Signin_Button.png)

**Step 6: Google Sign-In Process**

- The Google sign-in page loaded successfully.
- Entered **existingwoltuser@gmail.com** in the "Email or phone" field.
- Clicked **"Next"**.
- Entered the password **ExistingWoltUser123!** in the password field.
- Clicked **"Next"**.
- The Google authentication process completed successfully.
- Redirected back to the Wolt homepage.

**Screenshot**: [Google Sign-In Form](../../images/TC-UR-009/TC-UR-009_Google_Signin_Page.png)

**Step 7: Verify Successful Login**

- After completing Google Sign-In, redirected to the Wolt homepage without any additional prompts.
- The user's initials appeared at the top right corner, indicating a successful login.
- Clicked on the user icon and confirmed that the account options were accessible.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-009/TC-UR-009_Logged_In.png)

**Status**:

- [X] Pass

**Comments**:

- N/A