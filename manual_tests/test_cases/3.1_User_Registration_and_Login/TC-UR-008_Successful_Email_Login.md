**Test Case ID**: TC-UR-008

**Title**: Verify that a registered user can successfully log in using a valid email address

**Test Objective**: Verify that a user with a previously registered email address can successfully log in to the Wolt website through the email verification process.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a returning user, I want to log in using my email address so that I can access my account.

**Preconditions**:

- The user is not logged in.
- The email address used for this test is already registered with a Wolt account.

**Test Data**:

- **Email Address**: testuser-registered@wolt.com

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Login Modal**:
   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.

2. **Proceed with Email Login**:
   - In the login modal, enter **testuser-registered@wolt.com** into the email field.
   - Click the **"Next"** button.

3. **Verify Email Link Modal**:
   - Wait for the "Great, check your inbox!" modal to appear.
   - Confirm the modal displays the correct message indicating a sign-in link was sent to the provided email.
   - Verify the presence of the **"Resend email"** button.

4. **Check Email for Login Link**:
   - Access the email inbox for **testuser-registered@wolt.com**.
   - Locate the email from **`info@wolt.com`** with the subject line **"Log In to Wolt"**.
   - Open the email and verify its contents.

5. **Log In via Email Link**:
   - Click the **"Sign in"** button in the email.
   - Ensure a new browser tab opens and logs the user directly into their Wolt account.

6. **Verify Successful Login**:
   - Confirm that you are redirected to the Wolt homepage.
   - Ensure that you are automatically logged in without being prompted to fill out any registration forms.
   - Verify that your user icon or initials appear in the top right corner.
   - Click on the user icon and confirm that account options are accessible.

**Expected Results**:

- **Step 1**:
  - The Wolt homepage loads successfully without errors.
  - Clicking the **"Log in"** button opens the login modal.

- **Step 2**:
  - The email input field accepts **testuser-registered@wolt.com**.
  - Clicking **"Next"** triggers the email validation process.

- **Step 3**:
  - The system displays a modal with:
    - **Title**: "Great, check your inbox!"
    - **Message**: "We've just sent a sign-in link to testuser-registered@wolt.com. Please check your spam folder in case you didn't receive the email."
    - A **"Resend email"** button is present.

- **Step 4**:
  - An email from **`info@wolt.com`** with the subject line **"Log In to Wolt"** is received.
  - The email contains:
    - A large blue Wolt logo.
    - Message: "Hello! You can sign in to Wolt by clicking the button below. Enjoy Wolt!"
    - A big blue **"Sign in"** button.

- **Step 5**:
  - Clicking the **"Sign in"** button in the email successfully opens a new browser tab and logs the user into their Wolt account.

- **Step 6**:
  - The user is redirected to the Wolt homepage.
  - The user's initials or profile icon are displayed in the top right corner.
  - Account options are accessible, indicating a successful login.

**Actual Results**:

**Step 1: Navigate to Wolt Homepage and Open Login Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.
- Clicked on the **"Log in"** button, and the login modal appeared.

**Step 2: Proceed with Email Login**

- Entered **testuser-registered@wolt.com** into the email field.
- Clicked the **"Next"** button. The email was accepted without any errors.

**Step 3: Verify Email Link Modal**

- The "Great, check your inbox!" modal appeared as expected.
- The message displayed: "We've just sent a sign-in link to testuser-registered@wolt.com. Please check your spam folder in case you didn't receive the email."
- The **"Resend email"** button was present and functioning.

**Step 4: Check Email for Login Link**

- Accessed the email inbox for **testuser-registered@wolt.com**.
- Received an email from **`info@wolt.com`** with the subject **"Log In to Wolt"**.
- The email contained the correct message and **"Sign in"** button.

**Screenshot**: [Login Email Content](../../images/TC-UR-008/TC-UR-008_Email_Content.png)

**Step 5: Log In via Email Link**

- Clicked the **"Sign in"** button in the email.
- A new browser tab opened, and the user was logged in successfully.

**Step 6: Verify Successful Login**

- The user was redirected to the Wolt homepage.
- The user's initials appeared in the top right corner, confirming that the user was logged in.
- Account options were accessible from the user icon.

**Screenshot**: [User Logged In](../../images/TC-UR-008/TC-UR-008_Logged_In.png)

**Status**:

- [X] Pass

**Comments**:

- N/A