**Test Case ID**: TC-UR-001

**Title**: Verify that the registration modal opens correctly from the "Log in" and "Sign up" buttons.

**Test Objective**: Ensure that clicking on the "Log in" and "Sign up" buttons on the Wolt homepage opens the registration modal with the correct header and authentication options.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a user, I want a simple interface for logging in and signing up so I can easily switch between creating an account and logging in.


**Preconditions**:
- The user is on the Wolt homepage (https://wolt.com/).
- The user is not logged in to any account.

**Test Data**:
- N/A

**Test Steps**:

1. **Navigate to the Wolt Homepage**:

   - Open a web browser (Chrome, Firefox).
   - Enter "wolt.com" in the address bar and press Enter.

2. **Locate and Click the "Log in" Button**:

   - Identify the "Log in" button located at the top right corner of the page.
   - Click on the "Log in" button.   

3. **Verify the Registration Modal**:

   - Check that the modal has the header "Create an account or log in".
   - Verify the modal contents:
     - Text below header: "Log in below or create a new Wolt account."
     - Third-party authentication buttons:
       - "Continue with Google".
       - "Continue with Apple".
       - "Continue with Facebook".
     - Text below: "or continue with email".
     - Email input field labeled "Email".
     - "Next" button.
     - "Wolt Privacy" information at the footer.
     - Close button (X) at the top right corner.

4. **Close the Modal**:

   - Click on the "X" button at the top right corner of the modal to close it.
   - Ensure the modal closes, returning to the homepage.

5. **Locate and Click the "Sign up" Button**:

   - Identify the "Sign up" button located next to the "Log in" button.
   - Click on the "Sign up" button.

6. **Verify the Registration Modal Appears Again**:

   - Confirm that all elements listed in step 3 are present and identical.

**Expected Results**:

- **Step 1**:
  - The Wolt homepage loads successfully without errors.
- **Step 2**:
  - Clicking the "Log in" button triggers the registration modal to appear.
- **Step 3**:
  - The modal displays with the correct header: "Create an account or log in".
  - All mentioned elements and options are present and correctly labeled.
- **Step 4**:
  - Clicking the "X" closes the modal.
- **Step 5**:
  - Clicking the "Sign up" button triggers the same registration modal to appear.
- **Step 6**:
  - The modal displayed is identical to the one that appeared after clicking "Log in".
  - All elements are present, and there are no differences between the two modals.

**Actual Results**:

- **Step 1**:
  - The Wolt homepage loaded successfully without errors.
- **Step 2**:
  - Clicking the "Log in" button opened the registration modal.
- **Step 3**:
  - The modal displayed with the header "Create an account or log in".
  - The following elements were present:
    - **Text below header**: "Log in below or create a new Wolt account."
    - **Third-party authentication buttons**:
      - "Continue with Google" button with Google logo.
      - "Continue with Apple" button with Apple logo.
      - "Continue with Facebook" button with Facebook logo.
    - **Email authentication**:
      - Divider with text "or continue with email".
      - Email input field "Email".
      - "Next" button.
    - **Privacy information**:
      - Text explaining Wolt's privacy policy.
    - **Close button (X)**: Present in the top-right corner.
- **Step 4**:
  - Clicking the "X" closed the modal, returning focus to the homepage.
- **Step 5**:
  - Clicking the "Sign up" button opened the same registration modal.
- **Step 6**:
  - The modal displayed was identical to the one opened via "Log in".
  - All elements were present and matched the previous findings.


**Status**:
- [X] Pass

**Comments**:

*[View Screenshot](../../images/TC-UR-001/TC-UR-001_Step3_Registration_Modal.png)*