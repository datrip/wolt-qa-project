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
- user..2002@wolt.com
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

     *[Wolt Homepage - Sign Up or Log In Buttons](../../images/TC-UR-002/TC-UR-002_Homepage.png)*

3. **Verify the Registration Modal Appears**:
   - Confirm that a modal window appears centered on the page.

     *[Wolt Homepage Displaying Registration Modal](../../images/TC-UR-002/TC-UR-002_Signup_Modal.png)*

4. **Attempt Registration with Invalid Email Formats**:
   - For each invalid email address in the **Test Data**:
     - Enter the invalid email address into the "Email" input field.
     - Click the **"Next"** button.
     - Verify "Please enter a valid email." error message is displayed.

     *[Error Message Displayed for Invalid Email](../../images/TC-UR-002/TC-UR-002_Invalid_Email_Error.png)*

**Expected Results**:

- For each invalid email address entered:
  - The system should not proceed to the next step.
  - An error message "Please enter a valid email." is displayed.
  - The **"Next"** button should remain ineffective until a valid email is entered.

**Actual Results**:

  1. **Email**: "plainaddress"
     - **Behavior**: The system displays an error message below the email field.
     - **Error Message**: "Please enter a valid email."

  2. **Email**: "@test-test.wolt"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  3. **Email**: "user@"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  4. **Email**: "user@.wolt"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  5. **Email**: ".user@wolt.com"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  6. **Email**: "user..2000@wolt.com"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  7. **Email**: "user@wolt@wolt.com"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  8. **Email**: "user@wolt"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  9. **Email**: "user@wolt..com"
     - **Behavior**: Error message displayed.
     - **Error Message**: "Please enter a valid email."

  10. **Email**: "user@%*.wolt"
      - **Behavior**: Error message displayed.
      - **Error Message**: "Please enter a valid email."

**Status**:

- [X] Pass

**Comments**:

- Attempted several common invalid email formats and the sytem correctly displayed the error message for all of them.
