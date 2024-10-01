**Test Case ID**: TC-UR-013

**Title**: Verify that the user can resend the verification SMS during the registration process when they did not receive the code

**Test Objective**: Verify that when a user does not receive the SMS verification code during the registration process, they can successfully request to resend the SMS verification code and receive an additional SMS containing a new code.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a user, I want to access support options during registration if I encounter issues so that I can get help and complete the process.

**Preconditions**:

- The user is not registered or logged in.
- The email address **testuser@wolt.com** is valid and not previously registered with Wolt.
- The phone number **+37061234567** is valid and not previously registered with Wolt.

**Test Data**:

- **Email Address**: testuser@wolt.com
- **First Name**: Vardas
- **Last Name**: Pavardė
- **Phone Number**: +37061234567
- **Verification Codes**: Will be received via SMS to the provided phone number.

**Test Steps**:

1. **Register a New User Up to Verification Code Entry**:
   - **Reference**: Complete **Steps 1-10** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** using the following test data:
     - **Email Address**: testuser@wolt.com
     - **First Name**: Vardas
     - **Last Name**: Pavardė
     - **Phone Number**: +37061234567

2. **Wait for Verification Code Without Entering It**:
   - When the **"Enter your code"** modal appears, wait for the SMS verification code to arrive.
   - Do not enter the code.

3. **Resend Verification Code**:
   - Click on the **"I didn't get a code"** link/button.
   - Verify that the **"Didn't get a code?"** modal appears with three options:
     - **"Send code again"**
     - **"Change phone number"**
     - **"Contact support"**
   - Click on the **"Send code again"** button.

4. **Verify Additional SMS is Received**:
   - Confirm that an additional SMS containing a new 5-digit verification code is received on **+37061234567**.

5. **Enter the New Verification Code**:
   - Enter the new verification code received via SMS into the input fields.
   - Proceed with the verification.

6. **Complete Registration**:
   - Verify that a success message **"Your phone number has been verified!"** appears.
   - Ensure the modal closes automatically after verification.
   - Verify that the user is redirected to the Wolt homepage and is logged in.

**Expected Results**:

- **Step 1**:
  - The user successfully reaches the **"Enter your code"** modal during the registration process.

- **Step 2**:
  - The **"Enter your code"** modal displays the message indicating that a verification code has been sent to **+37061234567**.

- **Step 3**:
  - Clicking **"I didn't get a code"** displays the **"Didn't get a code?"** modal with options:
    - **"Send code again"** (primary action button)
    - **"Change phone number"**
    - **"Contact support"**
  - Clicking **"Send code again"** closes the modal and returns to the **"Enter your code"** screen.
  - A notification indicates that a new code has been sent.

- **Step 4**:
  - An additional SMS containing a new 5-digit verification code is received on **+37061234567**.

- **Step 5**:
  - Entering the new verification code allows the user to complete the verification process successfully.

- **Step 6**:
  - A success message **"Your phone number has been verified!"** displays briefly.
  - The modal closes automatically.
  - The user is redirected to the Wolt homepage and is logged in.
  - The user icon indicates that the user is logged in.

**Actual Results**:

**Step 1: Register a New User Up to Verification Code Entry**

- Followed **Steps 1-10** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** using **testuser@wolt.com** and **+37061234567**.
- The registration process proceeded without any issues up to the **"Enter your code"** modal.

**Step 2: Wait for Verification Code Without Entering It**

- The **"Enter your code"** modal appeared with the message indicating that a verification code was sent to **+37061234567**.
- Waited without entering the code.

**Step 3: Resend Verification Code**

- Clicked on the **"I didn't get a code"** link/button.
- The **"Didn't get a code?"** modal appeared with options:
  - **"Send code again"**
  - **"Change phone number"**
  - **"Contact support"**
- Clicked on **"Send code again"**.
- The modal closed, returning to the **"Enter your code"** screen.
- Received a notification indicating a new code has been sent.

**Screenshot**: [I didn't get a code - Help Menu](../../images/TC-UR-013/TC-UR-013_Help_Menu.png)

**Step 4: Verify Additional SMS is Received**

- An additional SMS containing a new 5-digit verification code was received on **+37061234567**.

**Step 5: Enter the New Verification Code**

- Entered the new verification code into the input fields.
- The system accepted the code and proceeded.

**Step 6: Complete Registration**

- Saw the success message **"Your phone number has been verified!"**.
- The modal closed automatically.
- Redirected to the Wolt homepage.
- The user icon displayed the user's initials, indicating that the user is logged in.

**Status**:

- [X] Pass

**Comments**:

- N/A