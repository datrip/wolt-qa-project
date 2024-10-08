**Test Case ID**: TC-RS-001

**Title**: Verify that entering a valid keyword displays relevant search results

**Test Objective**: Verify that when a user enters a valid keyword in the search bar relevant restaurants and products are displayed.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to search for restaurants using keywords so that I can find specific cuisines or dishes.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are restaurants or stores associated with the keyword **"ramen"** in the user's delivery area.

**Test Data**:

- **Keyword**: "ramen"

**Test Steps**:

1. **Ensure Logged-In State and Delivery Location**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Keyword and Initiate Search**:
   - Click on the search bar located at the top of the homepage.
   - Type the keyword **"ramen"** into the search field.

3. **Verify that Relevant Search Results are Displayed**:
   - Confirm that the auto-suggested results include restaurants or products related to **"ramen"**.

**Expected Results**:

- **Step 1**:
  - User is successfully logged in, and their name or initials are displayed at the top right corner.

- **Step 2**:
  - As the user types **"ramen"**, relevant search results begin to appear automatically in a dropdown below the search bar.

- **Step 3**:
  - The auto-suggested results are relevant to **"ramen"**, featuring restaurants or products that offer ramen dishes or related products.

**Actual Results**:

- **Step 1**:
  - The user was logged in, with initials displayed at the top right corner.

- **Step 2**:
  - As the user typed **"ramen"** in the search bar, relevant search results started to appear immediately in a dropdown.

- **Step 3**:
  - The auto-suggested results included relevant restaurants such as "Kefyro Ūsai" and products like "Ramen makaronai SANTA MARIA, 200g".
  - No irrelevant suggestions were displayed.

  **Screenshot**: [Auto-Suggested Results](../../images/TC-RS/TC-RS-001/TC-RS-001_Auto_Suggested_Results.png)

**Status**:

- [X] Pass

**Comments**:

- N/A