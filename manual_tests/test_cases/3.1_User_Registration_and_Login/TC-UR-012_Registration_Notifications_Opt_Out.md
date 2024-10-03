**Test Case ID**: TC-UR-012

**Title**: Verify that a new user can opt-out of receiving promotional notifications during the registration process

**Test Objective**: Verify that during the registration process, a new user can opt-out of receiving special offers and promotions via emails and push-messages, and confirm that this preference is correctly reflected in their account settings after registration.

**Related User Story**:

- **ID**: [3.1](../../../requirements/3_User_Stories.md#31-user-registration-and-login)
- **Description**: As a user, I want to set my preferences for receiving notifications, so that I only get communications I'm interested in.

**Preconditions**:

- The user is not registered or logged in.
- The email address **testuser@wolt.com** is valid and not previously registered with Wolt.
- The phone number **+37061234567** is valid and not previously registered with Wolt.

**Test Data**:

- **Email Address**: testuser@wolt.com
- **First Name**: Vardas
- **Last Name**: Pavardė
- **Phone Number**: +37061234567
- **Verification Code**: Will be received via SMS to the provided phone number.

**Test Steps**:

1. **Register a New User Up to Notification Preferences**:
   - **Reference**: Complete **Steps 1-10** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** using the following test data:
     - **Email Address**: testuser@wolt.com
     - **Phone Number**: +37061234567

2. **Opt-Out of Promotional Notifications**:
   - When the **"Never miss a great deal"** modal appears:
     - Verify that the **"Email & notifications"** toggle is enabled by default.
     - Toggle the **"Email & notifications"** switch to the **OFF** position.
     - Click **"Save"** to proceed.

3. **Complete Registration**:
   - **Reference**: Proceed with **Steps 12-14** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** to enter the verification code and complete the registration.

4. **Verify Notification Settings**:
   - After logging in, access the user's **Profile** and navigate to the **"Settings"** tab.
   - Scroll down to the **"Notifications"** section.
   - Verify that the option **"I want to receive special offers and promotions from Wolt via emails and push-messages"** is turned **OFF**.

**Expected Results**:

- **Step 1**:
  - The user successfully reaches the notification preferences step during registration.

- **Step 2**:
  - The **"Never miss a great deal"** modal appears with the **"Email & notifications"** toggle enabled by default.
  - Toggling the switch to **OFF** visually changes its state to indicate it's disabled.
  - Clicking **"Save"** saves the preference and proceeds to the next step.

- **Step 3**:
  - The user successfully enters the verification code received via SMS.
  - A success message **"Your phone number has been verified!"** displays briefly.
  - The user is redirected to the Wolt homepage and is logged in.

- **Step 4**:
  - Accessing the **"Profile"** and navigating to **"Settings"** is successful.
  - Under **"Notifications"**, the option **"I want to receive special offers and promotions from Wolt via emails and push-messages"** is turned **OFF**, reflecting the user's preference during registration.

**Actual Results**:

**Step 1: Register a New User Up to Notification Preferences**

- Followed **Steps 1-10** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)** using **testuser@wolt.com** and **+37061234567**.
- The registration process up to the notification preferences step proceeded without any issues.

**Step 2: Opt-Out of Promotional Notifications**

- The **"Never miss a great deal"** modal appeared.
- Verified that the **"Email & notifications"** toggle was enabled by default.
- Toggled the **"Email & notifications"** switch to **OFF**.
  - The toggle visually changed to indicate it's disabled.
- Clicked **"Save"** to proceed.

**Screenshot**: [Opt-Out of Notifications](../../images/TC-UR/TC-UR-012/TC-UR-012_Notifications_Toggle_Off.png)

**Step 3: Complete Registration**

- Proceeded with **Steps 12-14** of **[TC-UR-001](TC-UR-001_Successful_Email_Registration.md)**.
- Received the verification code via SMS on **+37061234568**.
- Entered the verification code successfully.
- Saw the success message **"Your phone number has been verified!"**.
- The modal closed automatically, and the user was redirected to the Wolt homepage logged in.

**Step 4: Verify Notification Settings**

- Clicked on the user icon at the top right corner of the homepage.
- Selected **"Profile"** from the dropdown menu.
- Navigated to the **"Settings"** tab.
- Scrolled down to the **"Notifications"** section.
- Confirmed that **"I want to receive special offers and promotions from Wolt via emails and push-messages"** was turned **OFF**, matching the selection made during registration.

**Screenshot**: [Notifications Disabled in Settings](../../images/TC-UR/TC-UR-012/TC-UR-012_Notifications_Disabled.png)

**Status**:

- [X] Pass

**Comments**:

- N/A