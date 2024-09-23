**Test Case ID**: TC-UR-001

**Title**: Verify that a new user can successfully register using a valid email address

**Test Objective**: Verify that a new user can successfully complete the registration process on the Wolt website using a valid email address, including email verification and phone number confirmation, and access their account.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to register using my email address so that I can create a Wolt account.


**Preconditions**:
- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in.
- The email address used for registration is valid and not previously registered with Wolt.
- The phone number used is valid and not previously registered with Wolt.

**Test Data**:
- **Email Address**: testuser@wolt.com
- **First Name**: Vardas
- **Last Name**: Pavardė
- **Phone Number**: +37061234567
- **Verification Code** Will be received via SMS to the provided phone number.

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

5. **Proceed with Email Registration**:
   - Locate the email input field labeled "Email".
   - Enter **testuser@wolt.com** into the email field.
   - Click the "Next" button.

6. **Verify Email Confirmation Modal**:
   - Wait for the "Great, check your inbox!" modal to appear.
   - Check the message displayed in the modal.
   - Verify the presence of the **"Resend email"** button.

7. **Check Email for Registration Link**:
   - Log in to the **testuser@wolt.com** email account.
   - Locate the email from **`info@wolt.com`** with the subject "Welcome to Wolt".
   - Open the email and verify its content.

8. **Begin Account Registration**:
   - Click the **"Register a new Wolt Account"** button in the email.
   - Ensure a new browser tab opens displaying the registration form.

9. **Verify Registration Form Elements**:
    - Check the modal title.
    - Verify the presence of all required form elements:
      - Country selection dropdown menu.
      - "First name" input field.
      - "Last name" input field.
      - Phone Number field with country code dropdown and input field.
      - **"Next"** button.
      - Text regarding terms of service and privacy statement with clickable links.

10. **Fill Out Registration Form**:
    - Enter **Vardas** in the "First name" field.
    - Enter **Pavardė** in the "Last name" field.
    - Enter **+37061234567** in the phone number field.
    - Click the **"Next"** button.

11. **Handle Notifications**:
    - Wait for the "Never miss a great deal" modal to appear.
    - Verify the message and toggle options.
    - Ensure the **"Email & notifications"** toggle is enabled by default.
    - Choose to keep the toggle **ON**.
    - Click **"Save"** to proceed.

12. **Enter Verification Code**:
    - Wait for the "Enter your code" modal to appear.
    - Check for the verification message.
    - Retrieve the 5-digit verification code sent via SMS to **+37061234567**.
    - Enter the verification code into the input fields.

13. **Complete Registration**:
    - Verify that the success message "Your phone number has been verified!" appears.
    - Ensure the modal closes automatically after verification.

14. **Verify Successful Login**:
    - Confirm redirection to the Wolt homepage.
    - Click on the user icon to access account options.


**Expected Results**:

- **Step 1**:  
  The Wolt homepage loads successfully without any errors.

- **Step 2**:  
  Clicking the **"Sign up"** or **"Log in"** button triggers the display of the registration modal.

- **Step 3**:  
  The registration modal window appears centered on the page.

- **Step 4**:  
  - **Header**: Displays "Create an account or log in".
  - **Body Text**: Displays "Log in below or create a new Wolt account."

- **Step 5**:  
  The email input accepts **testuser@wolt.com**, and clicking **"Next"** initiates the registration process.

- **Step 6**:  
  The "Great, check your inbox!" modal appears with:
  - Title: "Great, check your inbox!"
  - Message: "We've just sent a sign-in link to testuser@wolt.com. Please check your spam folder in case you didn't receive the email."
  - A "Resend email" button (large button with secondary styling)

- **Step 7**:  
  An email from **`info@wolt.com`** with the subject "Welcome to Wolt" is received. The email contains:
  - A large blue circular Wolt logo in the center
  - Message: "Hi, we'll set you up with a Wolt account in no time. Just click the button below!"
  - A big blue square button that says "Register a new Wolt Account"

- **Step 8**:  
  Clicking the **"Register a new Wolt Account"** button opens a new browser tab displaying the registration form.

- **Step 9**:  
  The registration form contains:
  - A close button (X) at the top
  - Main title: "Create an account"
  - Country selection dropdown
  - "First name" and "Last name" input fields side by side
  - Phone number section with country code dropdown and phone number input
  - A note about using the number for order-related contact
  - A big blue "Next" button
  - Small text about agreeing to Terms of Service and Privacy Statement (with links)

- **Step 10**:  
  The form accepts **Vardas**, **Pavardė**, and **+37061234567** as valid inputs, and clicking **"Next"** proceeds to the next step.

- **Step 11**:  
  The "Never miss a great deal" modal appears with:
  - Back button (left arrow) and close button (X) at the top
  - Main title: "Never miss a great deal"
  - Subtitle: "Get special offers and promotions via"
  - "Email & notifications" toggle (enabled by default)
  - An image of a cartoon character or mascot
  - Two buttons: "No, thanks" (grey) and "Save" (blue)

- **Step 12**:  
  The "Enter your code" modal appears with:
  - Close button (X) at the top
  - Main title: "Enter your code"
  - Message: "We've sent a verification code to +37061234567. Enter the 5-digit code below to confirm your phone number."
  - Five empty boxes for code entry
  - "I didn't get a code" button

- **Step 13**:  
  The success message "Your phone number has been verified!" displays briefly, and the modal closes automatically.

- **Step 14**:  
  The user is redirected to the Wolt homepage, and clicking the user icon successfully displays accessible account options, indicating a successful login.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**

- The Wolt homepage loaded successfully without any errors.
- The website's main page displayed as expected.

**Screenshot**: [Wolt Homepage](../../images/TC-UR-001/TC-UR-001_Homepage.png)

**Step 2: Open Registration Modal**

- Clicking on the **"Sign up"** button at the top right corner of the homepage triggered the registration modal.
- The modal appeared after the button was clicked.

**Screenshot**: [Registration Modal Opens](../../images/TC-UR-001/TC-UR-001_Signup_Modal.png)

**Step 3: Verify the Registration Modal Appears**

- The registration modal window appeared centered on the page.

**Step 4: Verify Modal Header and Body Text**

- **Header**: Displayed "Create an account or log in" as expected.
- **Body Text**: Displayed "Log in below or create a new Wolt account."

**Step 5: Proceed with Email Registration**

- Entered **testuser@wolt.com** into the email field.
- Clicked the **"Next"** button.
- The system accepted the email and didn't throw an error.

**Step 6: Verify Email Confirmation Modal**

- The "Great, check your inbox!" modal appeared immediately.
- The message stated: "We've just sent a sign-in link to **testuser@wolt.com**. Please check your spam folder in case you didn't receive the email."
- The **"Resend email"** button was present and functional.

**Screenshot**: [Email Confirmation Modal](../../images/TC-UR-001/TC-UR-001_Email_Sent.png)

**Step 7: Check Email for Registration Link**

- Logged into the **testuser@wolt.com** email account successfully.
- Received an email from **`info@wolt.com`** with the subject "Welcome to Wolt."
- The email contained the Wolt logo, welcome message, and **"Register a new Wolt Account"** button.
- All links and images in the email loaded correctly.

**Screenshot**: [Registration Email Content](../../images/TC-UR-001/TC-UR-001_Email_Content.png)

**Step 8: Begin Account Registration**

- Clicked the **"Register a new Wolt Account"** button in the email.
- A new browser tab opened automatically.
- The registration form was displayed without loading issues.

**Screenshot**: [Registration Form Displayed](../../images/TC-UR-001/TC-UR-001_Registration_Form.png)

**Step 9: Verify Registration Form Elements**

- The modal title read "Create an account" as expected.
- All required form elements were present and functional:
  - Country selection dropdown
  - "First name" and "Last name" input fields
  - Phone Number field with country code dropdown
  - **"Next"** button
  - Terms of service and privacy statement links (clickable)

**Step 10: Fill Out Registration Form**

- Entered **Vardas** in the "First name" field without issues.
- Entered **Pavardė** in the "Last name" field without issues.
- Entered **+37061234567** in the phone number field.
- Clicked the **"Next"** button.
- The form accepted all inputs as valid and proceeded to the next step.

**Step 11: Handle Notifications**

- The "Never miss a great deal" modal appeared with the correct message.
- The **"Email & notifications"** toggle was visible and enabled by default.
- Chose to keep the toggle **ON**.
- Clicked **"Save"** to proceed.

**Screenshot**: [Notification Preferences Modal](../../images/TC-UR-001/TC-UR-001_Registration_Promotion_Yes.png)

**Step 12: Enter Verification Code**

- The "Enter your code" modal appeared with the correct message.
- Received an SMS on **+37061234567** containing the 5-digit verification code.
- Entered the verification code into the input fields.
- The system accepted the code and proceeded without errors.

**Screenshot**: [Phone Verification Modal](../../images/TC-UR-001/TC-UR-001_Registration_SMS_Verify.png)

**Step 13: Complete Registration**

- Upon entering the correct verification code, a message displayed: "Your phone number has been verified!"
- The message appeared as an overlay on the modal.
- The modal closed automatically after the success message.

**Screenshot**: [Phone Number Verified Message](../../images/TC-UR-001/TC-UR-001_Registration_SMS_Verify_Confirmed.png)

**Step 14: Verify Successful Login**

- Automatically redirected to the Wolt homepage.
- Clicked on the user icon located at the top right corner.
- Verified that the user's initials were displayed in the account section.

**Screenshot**: [Logged In Successfully](../../images/TC-UR-001/TC-UR-001_Logged_In.png)


**Status**:
- [X] Pass

**Comments**:

- Buttons "Log in" and "Sign up" both have the same functionality and therefore either one can be used. A potential UX improvement could be to merge them in to one button such as "Log in/Sign up" or just "Enter". 

- After inputting an email in the "Sign up" form, a message **"We've just sent a sign-in link to testuser@wolt.com. Please check your spam folder in case you didn't receive the email."** appeared, however the email was previously unregistered and therefore the message might be misleading. "Sign-in" could be change to "Sign up". 