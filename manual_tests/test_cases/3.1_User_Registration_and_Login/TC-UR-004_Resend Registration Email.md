**Test Case ID**: TC-UR-004

**Title**: Verify that a user can successfully resend the registration email

**Test Objective**: Ensure that the "Resend email" functionality allows users to receive a new registration email and confirm its arrival in the user's inbox.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to register using my email address so that I can create a Wolt account.

**Preconditions**:

- The user is not logged in.
- The email address used for registration is valid and not previously registered with Wolt.

**Test Data**:

- **Email Address**: testuser_resend@wolt.com

**Test Steps**:

1. **Navigate to Wolt Homepage and Open Registration Modal**:

   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

2. **Enter Email Address to Register**:

   - In the registration modal, enter **testuser_resend@wolt.com** into the email field.
   - Click the **"Next"** button.

3. **Verify Email Confirmation Modal**:

   - Wait for the "Great, check your inbox!" modal to appear.
   - Verify the message displayed in the modal.
   - Verify the presence of the **"Resend email"** button.

4. **Click the "Resend email" Button Multiple Times**:

   - Within the "Great, check your inbox!" modal, click the **"Resend email"** button.
   - Observe if a brief success message "Email sent!" appears.
   - Repeat clicking the **"Resend email"** button until the system prevents further resends (up to 4 attempts).

5. **Verify Error Message for Resend Limit**:

   - After reaching the resend limit, observe the error message displayed.
   - Verify if the error message contains explanatory text about reaching the limit.

6. **Check Email for Registration Links**:

   - Log in to the **testuser_resend@wolt.com** email account.
   - Verify that multiple emails from **`info@wolt.com`** with the subject "Welcome to Wolt" are received, corresponding to the number of successful resends.

7. **Begin Account Registration**:

   - Open the most recent "Welcome to Wolt" email.
   - Click the **"Register a new Wolt Account"** button in the email.
   - Ensure a new browser tab opens displaying the registration form.

8. **Continue Registration Process**:

   - **Reference**: Continue from **Step 5** onwards of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)** to complete the registration.

**Expected Results**:

- **Step 1**:
  - The Wolt homepage loads successfully without errors.
  - Clicking the **"Sign up"** button opens the registration modal.

- **Step 2**:
  - The email input accepts **testuser_resend@wolt.com**, and clicking **"Next"** initiates the registration process.

- **Step 3**:
  - The "Great, check your inbox!" modal appears with the appropriate message.
  - The **"Resend email"** button is visible and functional.

- **Step 4**:
  - Clicking the "Resend email" button sends additional registration emails.
  - A brief "Email sent!" message appears after each successful resend.
  - After the allowed number of resends (usually 4), the system prevents further resends.

- **Step 5**:
  - An error message is displayed indicating that the resend limit has been reached.
  - The error message contains explanatory text.

- **Step 6**:
  - The user's email inbox contains multiple "Welcome to Wolt" emails, one for each successful resend.

- **Step 7**:
  - The most recent email contains the correct contents.
  - Clicking the **"Register a new Wolt Account"** button opens the registration form.

- **Step 8**:
  - The user can continue the registration process as per **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)** from **Step 5** onwards.

**Actual Results**:

**Step 1: Navigate to Wolt Homepage and Open Registration Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.

**Step 2: Enter Email Address to Register**

- Entered **testuser_resend@wolt.com** into the email field.
- Clicked the **"Next"** button.
- The system accepted the email and proceeded to the next step.

**Step 3: Verify Email Confirmation Modal**

- The "Great, check your inbox!" modal appeared.
- The message stated: "We've just sent a sign-in link to **testuser_resend@wolt.com**. Please check your spam folder in case you didn't receive the email."
- The **"Resend email"** button was visible.

  [Email Confirmation Modal](../../images/TC-UR/TC-UR-004/TC-UR-004_Email_Sent.png)

**Step 4: Click the "Resend email" Button Multiple Times**

- Clicked the **"Resend email"** button multiple times.
- For the first 4 attempts, a brief success message "Email sent!" appeared each time.
- On the 5th attempt, an error indicator appeared, preventing further resends.

  [Email Resent Modal](../../images/TC-UR/TC-UR-004/TC-UR-004_Email_Resent.png)

**Step 5: Verify Error Message for Resend Limit**

- After reaching the resend limit, an error indicator (red exclamation mark) was displayed.

  [Error Without Text](../../images/defects/DEF-UR-004-001.png)

**Step 6: Check Email for Registration Links**

- Logged into the **testuser_resend@wolt.com** email account.
- Received 5 emails (1 initial + 4 resends) from **`info@wolt.com`** with the subject "Welcome to Wolt".

  [Email Inbox with 5 Registration Emails](../../images/TC-UR/TC-UR-004/TC-UR-004_Email_Inbox.png)

**Step 7: Begin Account Registration**

- Opened the most recent email.
- Clicked the **"Register a new Wolt Account"** button.
- A new browser tab opened displaying the registration form.

**Step 8: Continue Registration Process**

- Continued the registration process as per **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** from **Step 5** onwards.
- The registration completed successfully.
  
**Status**:

- [X] Pass *(with minor defect)*

**Comments**:

- **Defect Identified**: Error message lacks explanatory text when the resend limit is reached.
   [DEF-UR-004-001](../../images/defects/DEF-UR-004-001.png): Error message lacks text when email resend limit is reached.
