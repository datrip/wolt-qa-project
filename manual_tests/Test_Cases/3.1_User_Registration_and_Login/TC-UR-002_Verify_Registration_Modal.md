**Test Case ID**: TC-UR-001

**Title**: Verify the presence and correctness of all UI elements in the registration modal.

**Test Objective**: Ensure that all UI elements on the registration modal are present and functional.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a user, I want a simple interface for logging in and signing up so I can easily switch between creating an account and logging in.


**Preconditions**:
- The registration modal is open (following steps from **TC-UR-001**).

**Test Data**:
- N/A

**Test Steps**:

1. **Verify the Modal Header and Body text**:
   - Header text: Verify it says "Create an account or log in".
   - Body text: Verify it says "Log in below or create a new Wolt account."

2. **Verify Third-Party Authentication Buttons**:
   - Ensure the presence of "Continue with Google" button.
   - Ensure the presence of "Continue with Apple" button.
   - Ensure the presence of "Continue with Facebook" button.

3. **Verify Email Authentication Section**:
   - Check that there is a divider with the text "or continue with email".
   - Verify the email input field is labeled "Email".
   - Check the "Next" button is present and clickable.

4. **Verify Privacy Information**:
   - Look for text regarding Wolt's privacy policy.
   - Confirm that "Privacy Statement" and link is visible and clickable.

5. **Verify Close Button**:
   - Ensure the "X" button is present at the top right corner.


**Expected Results**:

- All specified UI elements are present and correctly labeled.
- UI elements function as expected (buttons and links are clickable).

**Actual Results**:

*[Screenshot of the Sign Up/Login Modal](../../images/TC-UR-002/TC-UR-002_SignUp_Login_Modal.png)*

- **Step 1**: **Verify the Modal Header and Body Text**
  - **Header**: Displayed as "Create an account or log in" in bold font.
    - *This is visible at the top of the modal in the screenshot above.*
  - **Body text**: Displayed as "Log in below or create a new Wolt account."
    - *Located just below the header in the screenshot.*

- **Step 2**: **Verify Third-Party Authentication Buttons**
  - **"Continue with Google" Button**:
    - Button present with Google logo on the left.
    - Text displayed as "Continue with Google".
    - *See first button in the screenshot.*
  - **"Continue with Apple" Button**:
    - Button present with Apple logo on the left.
    - Text displayed as "Continue with Apple".
    - *See second button in the screenshot.*
  - **"Continue with Facebook" Button**:
    - Button present with Facebook logo on the left.
    - Text displayed as "Continue with Facebook".
    - *See third button in the screenshot.*

- **Step 3**: **Verify Email Authentication Section**
  - **Divider**:
    - Horizontal line with centered text "or continue with email".
    - *Visible in the middle of the modal in the screenshot.*
  - **Email Input Field**:
    - Visible and labeled "Email".
    - *Located below the divider in the screenshot.*
  - **"Next" Button**:
    - Present, blue background, white text "Next".
    - Button is enabled even when the email field is empty.
    - Clicking "Next" without entering an email shows "Please enter a valid email."
    - *The "Next" button is at the bottom of the modal in the screenshot.*

- **Step 4**: **Verify Privacy Information**
  - **Privacy Text**:
    - Reads: "Please visit Wolt Privacy Statement to learn more about personal data processing at Wolt. You can access the local Privacy Statement related to your Wolt account after you have provided the country and language preferences applicable to you during registration. This site is protected by hCaptcha. The hCaptcha Privacy Policy and Terms of Service apply."
    - *This text is visible at the very bottom of the modal in the screenshot.*
  - **"Privacy Statement" Link**:
    - "Privacy Statement" is a hyperlink.
    - Clicking it opens the privacy policy in a new tab.
    - *The link is underlined and highlighted in the screenshot.*

- **Step 5**: **Verify Close Button ("X")**
  - **Close Button**:
    - Present at the top right corner of the modal.
    - Icon changes color when hovered over.
    - *Visible at the top right in the screenshot.*



**Status**:
- [X] Pass

**Comments**:
- N/A