**Test Case ID**: TC-UR-001

**Title**: Verify that a new user can successfully register on the Wolt website using a valid credentials.

**Test Objective**: Ensure that clicking on the "Log in" and "Sign up" buttons on the Wolt homepage opens the registration modal.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to register using my email address so that I can create a Wolt account.


**Preconditions**:
- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in.
- The email address used for registration is valid and not previously registered with Wolt.
- The phone number used is valid and not previously registered with Wolt.

**Test Data**:
- **Email Address**: [Example Email Address]
- **First Name**: [Real First Name]
- **Last Name**: [Real Last Name]
- **Phone Number**: [Working Phone Number]
- **Verification Code**: [Code received via SMS]

**Test Steps**:

1. **Navigate to the Wolt Homepage**:
   - Open a web browser (Chrome or Firefox).
   - Enter "wolt.com" in the address bar and press Enter.

2. **Open Registration Modal**:
   - Click on the **"Sign Up"** or **"Log In"** button located at the top right corner of the homepage.

      *[Wolt Homepage - Sign Up or Log In Buttons](../../images/TC-UR-001/TC-UR-001_Homepage.png)*

3. **Verify the Registration Modal Appears**:
   - Confirm that a modal window appears centered on the page.

   *[Wolt homepage displaying Registration Modal](../../images/TC-UR-001/TC-UR-001_Signup_Modal.png)*

4. **Verify Modal Header and Body Text**:
   - **Header**: Confirm it says "Create an account or log in".
   - **Body Text**: Confirm it says "Log in below or create a new Wolt account."

5. **Proceed with Email Registration**:
   - Find the email input field labeled "Email".
   - Enter the a valid email address into the email field.
   - Click the "Next" button.

6. **Verify Email Confirmation Modal**:
   - A modal titled "Great, check your inbox!" should appear.
   - Confirm the message: "We've just sent a sign-in link to [Email Address]. Please check your spam folder in case you didn't receive the email."
   - Verify the presence of the **"Resend email"** button.

   *[Email Confirmation Modal - Great, Check Your Inbox!](../../images/TC-UR-001/TC-UR-001_Email_Sent.png)*

7. **Check Email for Registration Link**:
   - Log in to the email account.
   - Verify receipt of an email from **`info@wolt.com`** with the subject "Welcome to Wolt".
   - Open the email and confirm:
     - Wolt logo is displayed at the top of the email.
     - Message reads: "Hi, we'll set you up with a Wolt account in no time. Just click the button below!"
     - Below there is: **"Register a new Wolt Account"** button.

   *[Registration Email - Welcome to Wolt](../../images/TC-UR-001/TC-UR-001_Email_Content.png)*

8. **Begin Account Registration**:
   - Click the **"Register a new Wolt Account"** button in the email.
   - A new browser tab should open, displaying the registration form.

   *[Wolt Registration Form Displayed](../../images/TC-UR-001/TC-UR-001_Registration_Form.png)*

9. **Verify Registration Form Elements**:
    - Confirm the modal title reads "Create an account".
    - Verify the presence of:
      - Country selection dropdown menu.
      - Input fields for "First name" and "Last name".
      - Phone Number field with country code dropdown and input field.
      - **"Next"** button.
      - Text regarding terms of service and privacy statement with clickable links.   

10. **Fill Out Registration Form**:
    - Enter [First Name] in the "First name" field.
    - Enter [First Name] in the "Last name" field.
    - Enter [Working Phone Number] in the phone number field.
    - Click the **"Next"** button.

11. **Handle Notifications**:
    - A modal titled "Never miss a great deal" appears.
    - Message reads "Get special offers and promotions via".
    - **"Email & notifications"** toggle is present and enabled by default.
    - Choose to keep the toggle **ON**.
    - Click **"Save"** to proceed.

    *[Notification Preferences Modal - Special Offers](../../images/TC-UR-001/TC-UR-001_Registration_Promotion_Yes.png)*

12. **Enter Verification Code**:
    - A modal titled "Enter your code" appears.
    - Message reads: "We've sent a verification code to [Working Phone Number]. Enter the 5-digit code below to confirm your phone number."
    - Check your phone for the verification SMS.
    - Enter the 5-digit code received into the input fields.

    *[Phone Verification Modal - Enter Code](../../images/TC-UR-001/TC-UR-001_Registration_SMS_Verify.png)*

13. **Complete Registration**:
    - Upon entering the correct code, verify that a message "Your phone number has been verified!" appears briefly.
    - Confirm that the modal closes automatically.

    *[Success Message - Phone Number Verified](../../images/TC-UR-001/TC-UR-001_Registration_SMS_Verify_Confirmed.png)*

14. **Verify Successful Login**:
    - Confirm that you are redirected to the Wolt homepage.
    - Click on the user icon to confirm account options are accessible.

    *[Wolt Homepage - Logged In Successfully](../../images/TC-UR-001/TC-UR-001_Logged_In.png)*


**Expected Results**:

- **Step 3**: Registration modal opens upon clicking **"Sign Up"** or **"Log In"**.
- **Step 4**: Modal header and body text match the expected content.
- **Step 6**: Email input accepts the test email, and **"Next"** initiates the registration process.
- **Step 7**: "Great, check your inbox!" modal appears with correct messaging.
- **Step 8**: Registration email is received with correct content.
- **Step 9**: Clicking the email link opens the registration form.
- **Step 10**: All registration form elements are present and correctly labeled.
- **Step 11**: Form accepts valid input and proceeds upon clicking **"Next"**.
- **Step 13**: Promotion preferences can be set, and user can proceed.
- **Step 14**: Verification code entry accepts the code and proceeds.
- **Step 16**: Phone number verification is successful, and modal closes.
- **Step 17**: User is logged in, and account options are accessible.

**Actual Results**:

- **Step 3**: The registration modal opened successfully upon clicking the **"Sign Up"** button.
- **Step 4**: 
  - **Header**: Displayed "Create an account or log in" as expected.
  - **Body Text**: Showed "Log in below or create a new Wolt account."
- **Step 6**: 
  - Entered the test email address in the email field.
  - Clicked **"Next"**; the form advanced without errors.
- **Step 7**: 
  - The "Great, check your inbox!" modal appeared.
  - Message read: "We've just sent a sign-in link to [test email address]. Please check your spam folder in case you didn't receive the email."
  - **"Resend email"** button was present.
- **Step 8**: 
  - Received the registration email promptly.
  - Email content included the Wolt logo and the message as expected.
  - **"Register a new Wolt Account"** button was present.
- **Step 9**: Clicking the email link opened the registration form in a new browser tab.
- **Step 10**: 
  - Modal title was "Create an account".
  - All expected form elements were present and correctly labeled.
- **Step 11**:
  - Entered "John" in the "First name" field.
  - Entered "Doe" in the "Last name" field.
  - Entered "555-123-4567" in the phone number field.
  - Clicked **"Next"**; proceeded without errors.
- **Step 13**:
  - "Never miss a great deal" modal appeared.
  - "Email & notifications" toggle was enabled.
  - Kept the toggle **ON** and clicked **"Save"**.
- **Step 14**:
  - "Enter your code" modal appeared.
  - Received the SMS verification code on the phone.
  - Entered the 5-digit code; the form accepted it.
- **Step 16**:
  - Message "Your phone number has been verified!" appeared briefly.
  - Modal closed automatically.
- **Step 17**:
  - Redirected to the Wolt homepage.
  - User account icon was visible at the top right corner.
  - Clicking the user icon revealed account options.


**Status**:
- [X] Pass

**Comments**:

- N/A