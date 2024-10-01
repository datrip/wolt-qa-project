**Test Case ID**: TC-UR-011

**Title**: Verify that a user can successfully log in using Facebook Sign-In

**Test Objective**: Verify that an existing user can successfully log in to the Wolt website using Facebook Sign-In and access their account without the need to fill out the registration form again.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a returning user, I want to log in using my social media account so that I can access my account easily.

**Preconditions**:

- The user is not logged in to Wolt.
- The user has a valid Facebook account already registered with Wolt.

**Test Data**:

- **Facebook Account Email**: existingwoltuser@facebook.com
- **Facebook Password**: ExistingWoltUser123!

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Login Modal**:
   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.

2. **Proceed with Facebook Sign-In**:
   - In the login modal, click on the **"Continue with Facebook"** button.

3. **Facebook Authentication**:
   - On the Facebook login page:
     - Enter **existingwoltuser@facebook.com** in the "Email or Phone" field.
     - Enter **ExistingWoltUser123!** in the "Password" field.
     - Click the **"Log In"** button.
   - If prompted, authorize the Wolt app by clicking **"Continue as [Your Name]"**.

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
  - Clicking the **"Continue with Facebook"** button redirects to the Facebook login page.

- **Step 3**:
  - The Facebook login page appears.
  - User can enter Facebook credentials and log in successfully.
  - If prompted, the user authorizes the Wolt app.
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

**Step 2: Proceed with Facebook Sign-In**

- Located and clicked on the **"Continue with Facebook"** button in the login modal.
- Redirected to the Facebook login page.

**Screenshot**: [Facebook Sign-In Button](../../images/TC-UR-011/TC-UR-011_Facebook_Signin_Button.png)

**Step 3: Facebook Authentication**

- The Facebook login page loaded successfully.
- Entered **existingwoltuser@facebook.com** in the "Email or Phone" field.
- Entered **ExistingWoltUser123!** in the "Password" field.
- Clicked the **"Log In"** button.
- Facebook authentication completed successfully.
- If prompted, clicked **"Continue as [Your Name]"** to authorize the Wolt app.
- Redirected back to the Wolt homepage.

**Screenshot**: [Facebook Login Page](../../images/TC-UR-011/TC-UR-011_Facebook_Login_Page.png)

**Step 4: Verify Successful Login**

- Automatically logged in to the Wolt account.
- User's initials appeared at the top right corner of the homepage.
- Clicked on the user icon and confirmed that account options (e.g., Profile, Settings, Logout) were accessible.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-011/TC-UR-011_Logged_In.png)

**Status**:

- [X] Pass

**Comments**:

- N/A