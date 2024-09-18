**Test Case ID**: TC-UR-003

**Title**: Verify that the system handles registration with an email that is already registered.

**Test Objective**: Ensure that when a user attempts to register with an email address that is already associated with an existing Wolt account, the system prevents duplicate account creation and guides the user to log in instead.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to register using my email address so that I can create a Wolt account.

**Preconditions**:

- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in.
- The email address used for registration is already registered with Wolt.
- The email account is accessible for receiving emails.

**Test Data**:

- **Email Address**: existinguser@wolt.com (an email address that is already registered)

**Test Steps**:

1. **Navigate to the Wolt Homepage**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Enter `https://wolt.com` in the address bar and press **Enter**.

2. **Open the Registration Modal**:
   - Click on **"Sign up"** button located at the top right corner of the homepage.

3. **Attempt Registration with an Already Registered Email**:
   - In the registration modal, enter the email address **`existinguser@wolt.com`** in the "Email" input field.
   - Click the **"Next"** button.

4. **Check for Sign-In Email**:
   - Log in to the email account **`existinguser@wolt.com`**.
   - Locate the email from **`info@wolt.com`** with the subject **"Log in to Wolt"**.
   - Open the email.

5. **Log In Using the Email Link**:
   - Click on the **"Sign in"** button within the email.

6. **Confirm Successful Login**:
   - Verify that you are logged into the Wolt account associated with **`existinguser@wolt.com`**.

**Expected Results**:

- **Step 1**:
  - The Wolt homepage loads successfully without any errors.

- **Step 2**:
  - The registration modal titled **"Create an account or log in"** appears.

- **Step 3**:
  - Upon clicking **"Next"**, the system recognizes that the email is already registered.
  - A message is displayed prompting the user to check their inbox for a sign-in link:
    - The modal shows **"Great, check your inbox!"** with the message:
      - **"We've just sent a sign-in link to existinguser@wolt.com. Please check your spam folder in case you didn't receive the email."**
    - A **"Resend email"** button is available.

- **Step 4**:
  - An email from **`info@wolt.com`** with the subject **"Log in to Wolt"** is received.
  - The email contains:
    - The Wolt logo at the top of the email.
    - A greeting message: **"Hello! You can sign in to Wolt by clicking the button below. Enjoy Wolt!"**
    - A blue **"Sign in"** button.

- **Step 5**:
  - Clicking the **"Sign in"** button opens a new browser tab or window.
  - The system securely logs the user into their existing Wolt account without requiring additional credentials.

- **Step 6**:
  - The user is redirected to the Wolt homepage or dashboard.
  - The user is logged in (account icon is visible at the top right corner).
  - The user has access to all features available to logged-in users.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**
- The Wolt homepage loaded successfully without any errors.
- The website's main page displayed as expected.

**Screenshot**: [Wolt Homepage - Sign Up or Log In Buttons](../../images/TC-UR-003/TC-UR-003_Homepage.png)

**Step 2: Open the Registration Modal**
- Clicking on the "Sign Up" button at the top right corner of the homepage triggered the registration modal.
- The modal titled "Create an account or log in" appeared centered on the page.

**Screenshot**: [Wolt Homepage Displaying Registration/Login Modal](../../images/TC-UR-003/TC-UR-003_Signup_Modal.png)

**Step 3: Attempt Registration with an Already Registered Email**
- Entered "existinguser@wolt.com" into the email field.
- Clicked the "Next" button.
- The system displayed the "Great, check your inbox!" modal with the message: "We've just sent a sign-in link to existinguser@wolt.com. Please check your spam folder in case you didn't receive the email."
- The "Resend email" button was present and functional.

**Screenshot**: [Already Registered Email Response Modal](../../images/TC-UR-003/TC-UR-003_Email_Sent.png)

**Step 4: Check for Sign-In Email**
- Logged into the "existinguser@wolt.com" email account successfully.
- Received an email from "info@wolt.com" with the subject "Log in to Wolt."
- The email contained the Wolt logo, a greeting message ("Hello! You can sign in to Wolt by clicking the button below. Enjoy Wolt!"), and a blue "Sign in" button.
- All links and images in the email loaded correctly.

**Screenshot**: [Log In Email from Wolt](../../images/TC-UR-003/TC-UR-003_Login_Email.png)

**Step 5: Log In Using the Email Link**
- Clicked the "Log In" button in the email.
- A new browser tab opened automatically.
- The user was logged into their Wolt account without needing to enter any additional credentials.

**Step 6: Confirm Successful Login**

- Automatically redirected to the Wolt homepage.
- Clicked on the user icon located at the top right corner.
- Verified that the Account menu was displayed on top right of the page

**Status**:

- [X] Pass

**Comments**:

- N/A