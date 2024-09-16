**Test Case ID**: TC-UR-001

**Title**: Verify that the registration modal opens correctly from the "Log in" and "Sign up" buttons.

**Test Objective**: Ensure that clicking on the "Log in" and "Sign up" buttons on the Wolt homepage opens the registration modal.

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
   - Open a web browser (Chrome or Firefox).
   - Enter "wolt.com" in the address bar and press Enter.

2. **Click the "Log in" Button**:
   - Locate the "Log in" button at the top right corner of the homepage.
   - Click on the "Log in" button.

3. **Verify the Registration Modal Appears**:
   - Confirm that a modal window appears centered on the page.

4. **Close the Modal**:
   - Click the "X" button at the top right corner of the modal.

5. **Click the "Sign up" Button**:
   - Locate the "Sign up" button next to the "Log in" button.
   - Click on the "Sign up" button.

6. **Verify the Registration Modal Appears Again**:
   - Confirm that the modal window appears again.

**Expected Results**:

- **Step 1**: The Wolt homepage loads successfully without errors.
- **Step 2**: Clicking the "Log in" button opens the registration modal.
- **Step 3**: The registration modal appears on the screen.
- **Step 4**: The modal closes, returning to the homepage.
- **Step 5**: Clicking the "Sign up" button opens the registration modal.
- **Step 6**: The registration modal appears again.

**Actual Results**:

- **Step 1**:
  - The Wolt homepage loaded successfully without errors.
  - *[Screenshot of the Homepage](../../images/TC-UR-001/TC-UR-001_Homepage.png)*
- **Step 2**:
  - Clicking the "Log in" button opened the registration modal.
- **Step 3**:
  - The registration modal appeared with the header "Create an account or log in".
  - All expected elements were present.
  - *[Screenshot of the Login Modal](../../images/TC-UR-001/TC-UR-001_Homepage_with_login_modal.png)*
- **Step 4**:
  - Clicking the "X" closed the modal.
- **Step 5**:
  - Clicking the "Sign up" button opened the same registration modal.
- **Step 6**:
  - The registration modal appeared again, identical to the one opened via "Log in".
  - All elements were present and matched the previous findings.
  - *[Screenshot of the Registration Modal](../../images/TC-UR-001/TC-UR-001_Homepage_with_signup_modal.png)*


**Status**:
- [X] Pass

**Comments**:

- N/A