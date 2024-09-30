**Test Case ID**: TC-UR-008

**Title**: Verify that a registered user can successfully log in using a valid email address

**Test Objective**: Verify that a user with a previously registered email address can successfully log in to the Wolt website through the email verification process.

**Related User Story**:
- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)  
- **Description**: As a returning user, I want to log in using my email address so that I can access my account.

**Preconditions**:
- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in.
- The email address used for this test is already registered with a Wolt account.
  
**Test Data**:
- **Email Address**: testuser-registered@wolt.com

**Test Steps**:

1. **Navigate to the Wolt Homepage**:
   - Open a web browser (Chrome or Firefox).
   - Enter "wolt.com" in the address bar and press Enter.

2. **Open Login Modal**:
   - Click on the **"Sign up"** or **"Log in"** button located at the top right corner of the homepage.

3. **Verify the Login Modal Appears**:
   - Wait for the login/registration modal to appear in the center of the page.

4. **Verify Modal Header and Body Text**:
   - Check the header text of the modal.
   - Check the body text of the modal.

5. **Proceed with Email Login**:
   - Locate the input field labeled "Email".
   - Enter **testuser-registered@wolt.com** into the email field.
   - Click the **"Next"** button.

6. **Verify Email Link Modal**:
   - Wait for the "Great, check your inbox!" modal to appear.
   - Confirm the modal displays the correct message indicating a sign-in link was sent to the provided email.
   - Verify the presence of the **"Resend email"** button.

7. **Check Email for Login Link**:
   - Access the email inbox for **testuser-registered@wolt.com**.
   - Locate the email from **`info@wolt.com`** with the subject line "Log In to Wolt".
   - Open the email and verify its contents.

8. **Log In via Email Link**:
   - Click the **"Sign In"** button in the email.
   - Ensure a new browser tab opens and logs the user directly into their Wolt account.

9. **Verify Successful Login**:
   - Confirm the user is redirected to the Wolt homepage.
   - Check for the presence of the user's initials in the account area (user icon) on the top right of the page.

**Expected Results**:

- **Step 1**:  
  The Wolt homepage is loaded successfully without any errors.

- **Step 2**:  
  Clicking the **"Sign up"** or **"Log in"** button triggers the display of the login/modal window.

- **Step 3**:  
  The login/registration modal appears in the center of the page.

- **Step 4**:  
  - **Header**: Displays "Create an account or log in."
  - **Body Text**: Displays "Log in below or create a new Wolt account."

- **Step 5**:  
  The email input field accepts **testuser-registered@wolt.com**, and clicking **"Next"** triggers the email validation process.

- **Step 6**:  
  The system displays a modal with:
  - **Title**: "Great, check your inbox!"
  - **Message**: "We've just sent a sign-in link to testuser-registered@wolt.com. Please check your spam folder in case you didn't receive the email."
  - A **Resend email** button (large button with secondary styling)

- **Step 7**:  
  An email from **`info@wolt.com`** with the subject line "Log In to Wolt" is received. The contents of the email are:
  - A large blue circular Wolt logo in the center
  - Message: "Hello! You can sign in to Wolt by clicking the button below. Enjoy Wolt!"
  - A big blue square button that says **Sign in**

- **Step 8**:  
  Clicking the **"Sign in"** button in the email successfully opens a new browser tab and logs the user into their Wolt account.

- **Step 9**:  
  The user is redirected to the Wolt homepage.
  - The user's initials are displayed on the top right corner of the page, confirming that the user is logged in.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**  
- The Wolt homepage loaded successfully without any errors.  
**Screenshot**: [Wolt Homepage](../../images/TC-UR-008/TC-UR-008_Homepage.png)

**Step 2: Open Login Modal**  
- Clicking the **"Log in"** button at the top right corner triggered the login/modal.  
**Screenshot**: [Login Modal Opens](../../images/TC-UR-008/TC-UR-008_Login_Modal.png)

**Step 3: Verify the Login Modal Appears**  
- The login/registration modal appeared centered on the page.  

**Step 4: Verify Modal Header and Body Text**  
- **Header**: Displays "Create an account or log in" as expected.  
- **Body Text**: Displays "Log in below or create a new Wolt account."

**Step 5: Proceed with Email Login**  
- Entered **testuser-registered@wolt.com** into the email input field.
- Clicked the **"Next"** button. The email was accepted without any errors.

**Step 6: Verify Email Link Modal**  
- The "Great, check your inbox!" modal appeared as expected.
- The message displayed: "We've just sent a sign-in link to testuser-registered@wolt.com. Please check your spam folder in case you didn't receive the email."
- The **"Resend email"** button was present and working.

**Step 7: Check Email for Login Link**  
- Logged into the **testuser-registered@wolt.com** email account.
- Received an email from **`info@wolt.com`** with the subject "Log In to Wolt."
- The email contained the correct message and **"Sign in"** button.

**Screenshot**: [Login Email Content](../../images/TC-UR-008/TC-UR-008_Email_Content.png)

**Step 8: Log In via Email Link**  
- Clicked the **"Sign in"** button in the email.
- A new browser tab opened, and the user was logged in successfully.

**Step 9: Verify Successful Login**  
- The user was redirected to the Wolt homepage properly.
- The user's initials were displayed in the top right corner, confirming the user was logged in.

**Screenshot**: [User Logged In](../../images/TC-UR-008/TC-UR-008_UserLoggedIn.png) 

**Status**:  
- [X] Pass

**Comments**:  
- N/A