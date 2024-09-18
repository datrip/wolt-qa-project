**Test Case ID**: TC-UR-002

**Title**: Verify that the system prevents registration with an invalid email format.

**Test Objective**: Ensure that the Wolt website rejects invalid email formats during the registration process and displays an error message.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a new user, I want to register using my email address so that I can create a Wolt account.

**Preconditions**:

- The user is on the Wolt homepage (`https://wolt.com`).
- The user is not logged in.

**Test Data**:

- **Invalid Email Addresses**:
- plainaddress
- @test-test.wolt
- user@
- user@.wolt
- .user@wolt.com
- user..2000@wolt.com
- user@wolt@wolt.com
- user@wolt
- user@wolt..com
- user@%*.wolt

**Test Steps**:

1. **Navigate to the Wolt Homepage**:
   - Open a web browser (Chrome or Firefox).
   - Enter `wolt.com` in the address bar and press Enter.

2. **Open Registration Modal**:
   - Click on the **"Sign Up"** or **"Log In"** button located at the top right corner of the homepage.

3. **Verify the Registration Modal Appears**:
   - Confirm that a modal window appears centered on the page.

4. **Attempt Registration with Invalid Email Formats**:
   - For each invalid email address in the **Test Data**:
     - Enter the invalid email address into the "Email" input field.
     - Click the **"Next"** button.
     - **Verify that:**
         - An error message "Please enter a valid email." is displayed below the email field.
         - The system does not proceed to the next registration step.
         - The **"Next"** button remains inactive or ineffective until a valid email is entered.


**Expected Results**:

- For each invalid email address entered:
  - The system should not proceed to the next step.
  - An error message "Please enter a valid email." is displayed.
  - The **"Next"** button should remain ineffective until a valid email is entered.

**Actual Results**:

**Step 1: Navigate to the Wolt Homepage**

- The Wolt homepage loaded successfully without any errors.
- The website's main page displayed as expected.

**Screenshot**: [Wolt Homepage](../../images/TC-UR-002/TC-UR-002_Homepage.png)

**Step 2: Open Registration Modal**

- Clicking the "Sign Up" or "Log In" button successfully opened the registration modal.

**Screenshot**: [Wolt Homepage Displaying Registration Modal](../../images/TC-UR-002/TC-UR-002_Signup_Modal.png)

**Step 3: Verify the Registration Modal Appears**

- The registration modal appeared centered on the page as expected.

**Step 4: Attempt Registration with Invalid Email Formats**

- For each invalid email address tested:
  - The system displayed an error message "Please enter a valid email." below the email field.
  - The registration process did not proceed to the next step.
  - The "Next" button remained ineffective until a valid email was entered.

**Screenshot**: [Error Message Displayed for Invalid Email](../../images/TC-UR-002/TC-UR-002_Invalid_Email_Error.png)

**Status**:

- [X] Pass

**Comments**:

- Attempted several common invalid email formats and the system correctly displayed the error message for all of them.
