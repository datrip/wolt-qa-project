**Test Case ID**: TC-UR-003

**Title**: Verify that the system handles registration with an email that is already registered

**Test Objective**: Ensure that when a user attempts to register with an email address that is already associated with an existing Wolt account, the system prevents duplicate account creation and guides the user to log in instead.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to register using my email address so that I can create a Wolt account.

**Preconditions**:

- The user is not logged in.
- The email address **existinguser@wolt.com** is already registered with Wolt.
- The email account **existinguser@wolt.com** is accessible for receiving emails.

**Test Data**:

- **Email Address**: existinguser@wolt.com

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Registration Modal**:

   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

2. **Attempt Registration with an Already Registered Email**:

   - In the registration modal, enter **existinguser@wolt.com** into the email field.
   - Click the **"Next"** button.

3. **Verify Email Confirmation Modal**:

   - Observe the modal that appears after clicking **"Next"**.

4. **Check for Sign-In Email**:

   - Log in to the **existinguser@wolt.com** email account.
   - Locate the email from **`info@wolt.com`** with the subject **"Log in to Wolt"**.
   - Open the email.

5. **Log In Using the Email Link**:

   - Click on the **"Log in"** button within the email.

6. **Verify Successful Login**:

   - Confirm that you are redirected to the Wolt homepage.
   - Verify that you are logged in, and your user icon or initials appear in the top right corner.
   - Click on the user icon and confirm that account options are accessible.

**Expected Results**:

- **Step 1**:
  - The Wolt homepage loads successfully without errors.
  - Clicking the **"Sign up"** button opens the registration modal.

- **Step 2**:
  - The email input accepts **existinguser@wolt.com**, and clicking **"Next"** initiates the process.

- **Step 3**:
  - A modal appears with the message:
    - **"Great, check your inbox!"** with the text:
      - **"We've just sent a sign-in link to existinguser@wolt.com. Please check your spam folder in case you didn't receive the email."**
  - A **"Resend email"** button is available.

- **Step 4**:
  - An email from **`info@wolt.com`** with the subject **"Log in to Wolt"** is received.
  - The email contains:
    - The Wolt logo.
    - A greeting message: **"Hello! You can sign in to Wolt by clicking the button below. Enjoy Wolt!"**
    - A **"Log in"** button.

- **Step 5**:
  - Clicking the **"Log in"** button opens a new browser tab.
  - The system logs the user into their existing Wolt account without requiring additional credentials.

- **Step 6**:
  - The user is redirected to the Wolt homepage.
  - The user's profile icon or initials are displayed in the top right corner.
  - Account options are accessible, indicating a successful login.

**Actual Results**:

**Step 1: Navigate to Wolt Homepage and Open Registration Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.
- Clicked on the **"Sign up"** button, and the registration modal appeared.


**Step 2: Attempt Registration with an Already Registered Email**

- Entered **existinguser@wolt.com** into the email field.
- Clicked the **"Next"** button.
- The system accepted the email and processed the request.


**Step 3: Verify Email Confirmation Modal**

- The "Great, check your inbox!" modal appeared.
- The message stated: "We've just sent a sign-in link to **existinguser@wolt.com**. Please check your spam folder in case you didn't receive the email."
- The **"Resend email"** button was visible.

**Screenshot**: [Email Confirmation Modal](../../images/TC-UR-003/TC-UR-003_Email_Sent.png)


**Step 4: Check for Sign-In Email**

- Logged into the **existinguser@wolt.com** email account.
- Received an email from **`info@wolt.com`** with the subject **"Log in to Wolt"**.
- The email contained:
  - Wolt logo.
  - Greeting message: "Hello! You can sign in to Wolt by clicking the button below. Enjoy Wolt!"
  - A **"Log in"** button.

**Screenshot**: [Log In Email](../../images/TC-UR-003/TC-UR-003_Login_Email.png)


**Step 5: Log In Using the Email Link**

- Clicked the **"Log in"** button in the email.
- A new browser tab opened.
- The user was logged into their Wolt account without entering additional credentials.


**Step 6: Verify Successful Login**

- Automatically redirected to the Wolt homepage.
- User's initials or profile icon appeared at the top right corner.
- Clicked on the user icon and confirmed that account options were accessible.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-003/TC-UR-003_Homepage.png)


**Status**:

- [X] Pass

**Comments**:

- N/A