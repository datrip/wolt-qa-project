**Test Case ID**: TC-UR-004

**Title**: Verify that a user can successfully resend the registration email

**Test Objective**: Ensure that the "Resend email" functionality allows users to receive a new registration email and confirm its arrival in the user's inbox.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to register using my email address so that I can create a Wolt account.

**Preconditions**:

- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in.
- The email address used for registration is valid and not previously registered with Wolt.

**Test Data**:

- **Email Address**: testuser_resend@wolt.com

**Test Steps**:

1. **Navigate to the Wolt Homepage**:
   - Open a web browser (Chrome or Firefox).
   - Enter "wolt.com" in the address bar and press Enter.

2. **Open Registration Modal**:
   - Click on the **"Sign up"** or **"Log in"** button located at the top right corner of the homepage.

3. **Enter Email Address to Register**:
   - Locate the email input field labeled "Email".
   - Enter **testuser_resend@wolt.com** into the email field.
   - Click the "Next" button.

4. **Verify Email Confirmation Modal**:
   - Wait for the "Great, check your inbox!" modal to appear.
   - Check the message displayed in the modal.
   - Verify the presence of the **"Resend email"** button.

5. **Click the "Resend email" Button Multiple Times**:
   - Within the "Great, check your inbox!" modal, click the **"Resend email"** button.
   - Observe if a brief success message "Email sent!" appears.
   - Repeat clicking the **"Resend email"** button until the system prevents further resends (4 attempts).

6. **Verify Error Message for Resend Limit**:
   - After reaching the resend limit, observe the error message displayed.
   - Check if the error message contains explanatory text about reaching the limit.

7. **Check Email for Registration Links**:
   - Log in to the **testuser_resend@wolt.com** email account.
   - Locate the emails from **`info@wolt.com`** with the subject "Welcome to Wolt".
   - Verify that there are multiple emails received, corresponding to the number of successful resends.

8. **Verify Contents of the Latest Email**:
   - Open the most recent "Welcome to Wolt" email.
   - Verify its content.

9. **Begin Account Registration**:
   - Click the **"Register a new Wolt Account"** button in the most recent email.
   - Ensure a new browser tab opens displaying the registration form.

**Expected Results**:

- **Step 1**:  
  The Wolt homepage loads successfully without any errors.

- **Step 2**:  
  Clicking the **"Sign up"** or **"Log in"** button triggers the display of the registration modal.

- **Step 3**:  
  The email input accepts **testuser_resend@wolt.com**, and clicking **"Next"** initiates the registration process.

- **Step 4**:  
  The "Great, check your inbox!" modal appears with the message:
  "We've just sent a sign-in link to testuser_resend@wolt.com. Please check your spam folder in case you didn't receive the email."
  The **"Resend email"** button is visible.

- **Step 5**:  
  The "Resend email" button functions correctly for the first few attempts, showing a brief "Email sent!" message each time. After reaching the limit (4 attempts), the system prevents further resends.

- **Step 6**:  
  An error message is displayed "Too many requests".

- **Step 7**:  
  5 emails (1 initial and 4 resends) from **`info@wolt.com`** with the subject "Welcome to Wolt" are received in the inbox of **testuser_resend@wolt.com**.

- **Step 8**:  
  The most recent email contains:
  - The Wolt logo at the top of the email.
  - A welcome message: "Welcome to Wolt!"
  - Text: "Get ready for the best restaurants, grocery stores and other shops in your area - all in one app. To get started, please register your account by clicking the button below."
  - A **"Register a new Wolt Account"** button.

- **Step 9**:  
  Clicking the **"Register a new Wolt Account"** button opens a new browser tab displaying the registration form.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**

- The Wolt homepage loaded successfully without any errors.
- The website's main page displayed as expected.

**Screenshot**: [Wolt Homepage](../../images/TC-UR-004/TC-UR-004_Homepage.png)

**Step 2: Open Registration Modal**

- Clicking on the **"Sign up"** button at the top right corner of the homepage triggered the registration modal.
- The modal appeared after the button was clicked.

**Screenshot**: [Registration Modal Opens](../../images/TC-UR-004/TC-UR-004_Signup_Modal.png)

**Step 3: Enter Email Address to Register**

- Entered **testuser_resend@wolt.com** into the email field.
- Clicked the **"Next"** button.
- The system accepted the email and didn't throw an error.

**Step 4: Verify Email Confirmation Modal**

- The "Great, check your inbox!" modal appeared immediately.
- The message stated: "We've just sent a sign-in link to **testuser_resend@wolt.com**. Please check your spam folder in case you didn't receive the email."
- The **"Resend email"** button was present and functional.

**Screenshot**: [Email Confirmation Modal](../../images/TC-UR-004/TC-UR-004_Email_Sent.png)

**Step 5: Click the "Resend email" Button Multiple Times**

- Clicked the **"Resend email"** button 4 times.
- For the first 4 attempts, a brief success message "Email sent!" appeared for a few seconds after each click.
- On the 5th attempt, an error indicator appeared, preventing further resends.

**Screenshot**: [Email Resent Modal](../../images/TC-UR-004/TC-UR-004_Email_Resent.png)

**Step 6: Verify Error Message for Resend Limit**

- After reaching the resend limit, an error indicator (red exclamation mark) was displayed.
- However, no explanatory text about reaching the limit was shown.

**Screenshot**: [Error Without Text](../../images/defects/DEF-UR-004-001.png)

**Step 7: Check Email for Registration Links**

- Logged into the **testuser_resend@wolt.com** email account successfully.
- Found 5 emails (1 initial + 4 resends) from **`info@wolt.com`** with the subject "Welcome to Wolt."

**Screenshot**: [Email Inbox with 5 Registration Emails](../../images/TC-UR-004/TC-UR-004_Email_Inbox.png)

**Step 8: Verify Contents of the Latest Email**

- Opened the most recent "Welcome to Wolt" email from info@wolt.com.
- The email contained:
  - A large Wolt logo (blue circular design) in the center of the email.
  - A short message: "Hi, we'll set you up with a Wolt account in no time. Just click the button below!"
  - A big blue square button that says "Register a new Wolt Account"
- All links and images in the email loaded correctly.

**Screenshot**: [Latest Registration Email Content](../../images/TC-UR-004/TC-UR-004_Email_Content.png)

**Step 9: Begin Account Registration**

- Clicked the **"Register a new Wolt Account"** button in the email.
- A new browser tab opened automatically.
- The registration form was displayed without loading issues.

**Screenshot**: [Registration Form Displayed](../../images/TC-UR-004/TC-UR-004_Registration_Form.png)

**Status**:

- [X] Fail

**Comments**:

- Defect identified: After multiple resend attempts, an error is displayed without any explanatory text. 
  [DEF-UR-004-001](../../images/defects/DEF-UR-004-001.png): Error message lacks text when email resend limit is reached.