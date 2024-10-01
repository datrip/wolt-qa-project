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

1. **Navigate to Wolt Homepage and Open Registration Modal**:
   - **Reference**: Complete **Steps 1-2** of **[TC-UR-001_Successful_Email_Registration](TC-UR-001_Successful_Email_Registration.md)**.

2. **Attempt Registration with Invalid Email Formats**:

   - For each invalid email address in the **Test Data**:
     - Enter the invalid email address into the "Email" input field.
     - Click the **"Next"** button.

3. **Verify Error Displayed for Invalid Emails**:
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

**Step 1: Navigate to Wolt Homepage and Open Registration Modal**

- Followed **Steps 1-2** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- The Wolt homepage loaded successfully without any errors.
- Clicked on the **"Sign Up"** button, and the registration modal appeared.

**Step 2: Attempt Registration with Invalid Email Formats**

- For each invalid email format in the **Test Data**:
  - Entered the email into the "Email" input field and clicked the **"Next"** button.
  
  - For **plainaddress**, **@test-test.wolt**, **user@**, **user@.wolt**, **.user@wolt.com**, **user..2000@wolt.com**, **user@wolt@wolt.com**, **user@wolt**, **user@wolt..com**, **user@%*.wolt**:
    - The system displayed an error.

**Screenshot**: [Invalid Email Error](../../images/TC-UR-002/TC-UR-002_Invalid_Email_Error.png)

**Step 3: Verify Error for Invalid Emails**

- An error message **"Please enter a valid email."** was displayed below the email field for all invalid email formats.
- The registration process did not proceed to the next step.
- The **"Next"** button remained inactive and ineffective until a valid email was entered.

**Status**:

- [X] Pass

**Comments**:

- Attempted several common invalid email formats and the system correctly displayed the error message for all of them.
