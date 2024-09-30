**Test Case ID**: TC-UR-006

**Title**: Verify that a new user can successfully register using Apple Sign-In

**Test Objective**: Verify that a new user can successfully complete the registration process on the Wolt website using Apple Sign-In, including Apple authentication and phone number confirmation, and access their account.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to sign up using a social media account (Google, Apple, Facebook) so that I can register quickly

**Preconditions**:
- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in to Wolt.
- The user has a valid Apple account not previously registered with Wolt.
- The phone number to be used is valid and not previously registered with Wolt.

**Test Data**:
- **Apple Account**: testwoltuser@apple.com
- **Apple Account Password**: TestWoltUser123!
- **First Name**: Vardas
- **Last Name**: Pavardė
- **Phone Number**: +37061234567
- **Verification Code**: Will be received via SMS to the provided phone number.

**Test Steps**:

1. **Navigate to the Wolt Homepage**:
   - Open a web browser (Chrome or Firefox).
   - Enter "wolt.com" in the address bar and press Enter.

2. **Open Registration Modal**:
   - Click on the **"Sign up"** or **"Log in"** button located at the top right corner of the homepage.

3. **Verify the Registration Modal Appears**:
   - Wait for the registration modal window to appear centered on the page.

4. **Verify Modal Header and Body Text**:
   - Check the header text of the modal.
   - Check the body text of the modal.

5. **Proceed with Apple Sign-In**:
   - Locate the **"Continue with Apple"** button.
   - Click the **"Continue with Apple"** button.

6. **Apple Sign-In Process**:
   - Wait for the Apple sign-in popup window to load.
   - Enter **testwoltuser@apple.com** in the email field.
   - Click **"Continue with password"**.
   - Enter the password **TestWoltUser123!** in the password field.
   - Click the Continue arrow.
   - Handle Two-Factor Authentication:
     - Enter the 6-digit verification code sent to your Apple device.
   - On the confirmation page, click **"Continue"** to proceed with using Wolt with your Apple Account.

7. **Verify Registration Form Elements**:
    - Check the modal title.
    - Verify the presence of all required form elements:
      - Country selection dropdown menu.
      - "First name" input field.
      - "Last name" input field.
      - Phone Number field with country code dropdown and input field.
      - **"Next"** button.
      - Text regarding terms of service and privacy statement with clickable links.

8. **Fill Out Registration Form**:
    - Enter **Vardas** in the "First name" field.
    - Enter **Pavardė** in the "Last name" field.
    - Enter **+37061234567** in the phone number field.
    - Click the **"Next"** button.

9. **Handle Notifications**:
    - Wait for the "Never miss a great deal" modal to appear.
    - Verify the message and toggle options.
    - Ensure the **"Email & notifications"** toggle is enabled by default.
    - Choose to keep the toggle **ON**.
    - Click **"Save"** to proceed.

10. **Enter Verification Code**:
    - Wait for the "Enter your code" modal to appear.
    - Check for the verification message.
    - Retrieve the 5-digit verification code sent via SMS to **+37061234567**.
    - Enter the verification code into the input fields.

11. **Complete Registration**:
    - Verify that the success message "Your phone number has been verified!" appears.
    - Ensure the modal closes automatically after verification.

12. **Verify Successful Login**:
    - Confirm redirection to the Wolt homepage.
    - Click on the user icon to access account options.

**Expected Results**:

- **Step 1**: The Wolt homepage loads successfully without any errors.

- **Step 2**: Clicking the **"Sign up"** or **"Log in"** button triggers the display of the registration modal.

- **Step 3**: The registration modal window appears centered on the page.

- **Step 4**:
  - **Header**: Displays "Create an account or log in".
  - **Body Text**: Displays "Log in below or create a new Wolt account."

- **Step 5**: Clicking the **"Continue with Apple"** button opens an Apple sign-in popup window.

- **Step 6**: The Apple sign-in process completes successfully, including Two-Factor Authentication, and the user is redirected back to Wolt.

- **Step 7**: The registration form contains all the expected elements as described.

- **Step 8**: The form accepts **Vardas**, **Pavardė**, and **+37061234567** as valid inputs, and clicking **"Next"** proceeds to the next step.

- **Step 9**: The "Never miss a great deal" modal appears with the expected content and functionality.

- **Step 10**: The "Enter your code" modal appears, and the system accepts the verification code.

- **Step 11**: The success message "Your phone number has been verified!" displays briefly, and the modal closes automatically.

- **Step 12**: The user is redirected to the Wolt homepage, and clicking the user icon successfully displays accessible account options, indicating a successful login.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**

- The Wolt homepage loaded successfully without any errors.
- The website's main page displayed as expected.

**Screenshot**: [Wolt Homepage](../../images/TC-UR-006/TC-UR-006_Homepage.png)

**Step 2: Open Registration Modal**

- Clicking on the **"Sign up"** button at the top right corner of the homepage triggered the registration modal.
- The modal appeared after the button was clicked.

**Screenshot**: [Registration Modal Opens](../../images/TC-UR-006/TC-UR-006_Signup_Modal.png)

**Step 3: Verify the Registration Modal Appears**

- The registration modal window appeared centered on the page.

**Step 4: Verify Modal Header and Body Text**

- **Header**: Displayed "Create an account or log in" as expected.
- **Body Text**: Displayed "Log in below or create a new Wolt account."

**Step 5: Proceed with Apple Sign-In**

- Located the **"Continue with Apple"** button in the modal.
- Clicked the **"Continue with Apple"** button.
- A popup window for Apple Sign-In opened.

**Screenshot**: [Apple Sign-In Button](../../images/TC-UR-006/TC-UR-006_Apple_Signin_Button.png)

**Step 6: Apple Sign-In Process**

- The Apple sign-in popup window loaded successfully.
- Entered **testwoltuser@apple.com** in the email field.
- Clicked **"Continue with password"**.
- Entered the password **TestWoltUser123!** in the password field.
- Clicked the Continue arrow.
- Two-Factor Authentication window appeared with six empty boxes for the verification code.
- Entered the 6-digit verification code sent to the Apple device.
- Confirmation page appeared asking, "Do you want to continue using Wolt with your Apple Account "testwoltuser@apple.com"?"
- Clicked **"Continue"** to proceed.
- The Apple authentication process completed successfully.
- Redirected back to the Wolt registration form.

**Screenshot**: [Apple Sign-In Form](../../images/TC-UR-006/TC-UR-006_Apple_Signin_Process.png)

**Step 7: Verify Registration Form Elements**

- The modal title read "Create an account" as expected.
- All required form elements were present and functional:
  - Country selection dropdown
  - "First name" and "Last name" input fields
  - Phone Number field with country code dropdown
  - **"Next"** button
  - Terms of service and privacy statement links (clickable)

**Screenshot**: [Registration Form Displayed](../../images/TC-UR-006/TC-UR-006_Registration_Form.png)

**Step 8: Fill Out Registration Form**

- Entered **Vardas** in the "First name" field without issues.
- Entered **Pavardė** in the "Last name" field without issues.
- Entered **+37061234567** in the phone number field.
- Clicked the **"Next"** button.
- The form accepted all inputs as valid and proceeded to the next step.

**Step 9: Handle Notifications**

- The "Never miss a great deal" modal appeared with the correct message.
- The **"Email & notifications"** toggle was visible and enabled by default.
- Chose to keep the toggle **ON**.
- Clicked **"Save"** to proceed.

**Screenshot**: [Notification Preferences Modal](../../images/TC-UR-006/TC-UR-006_Registration_Promotion_Yes.png)

**Step 10: Enter Verification Code**

- The "Enter your code" modal appeared with the correct message.
- Received an SMS on **+37061234567** containing the 5-digit verification code.
- Entered the verification code into the input fields.
- The system accepted the code and proceeded without errors.

**Screenshot**: [Phone Verification Modal](../../images/TC-UR-006/TC-UR-006_Registration_SMS_Verify.png)

**Step 11: Complete Registration**

- Upon entering the correct verification code, a message displayed: "Your phone number has been verified!"
- The message appeared as an overlay on the modal.
- The modal closed automatically after the success message.

**Screenshot**: [Phone Number Verified Message](../../images/TC-UR-006/TC-UR-006_Registration_SMS_Verify_Confirmed.png)

**Step 12: Verify Successful Login**

- Automatically redirected to the Wolt homepage.
- Clicked on the user icon located at the top right corner.
- Verified that the user's initials were displayed in the account section.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-006/TC-UR-006_Logged_In.png)

**Status**:
- [X] Pass

**Comments**:

N/A