**Test Case ID**: TC-RS-002

**Title**: Verify that entering an invalid keyword displays an appropriate "No results found" message

**Test Objective**: Verify that when a user enters an invalid or non-existent keyword in the search bar, an appropriate message is displayed indicating no results were found.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to search for restaurants using keywords so that I can find specific cuisines or dishes.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.

**Test Data**:

- **Keyword**: **"test123"** 

**Test Steps**:

1. **Ensure Logged-In State and Delivery Location**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Invalid Keyword and Initiate Search**:
   - Click on the search bar located at the top of the homepage.
   - Type the keyword **"test123"** into the search field.

3. **Verify that a 'No Results Found' Message is Displayed**:
   - Observe the area below the search bar after entering the keyword.
   - Confirm that a message indicating no results is displayed, along with an appropriate image.

**Expected Results**:

- **Step 1**:
  - User is successfully logged in, and their name or initials are displayed at the top right corner.

- **Step 2**:
  - As the user types **"test123"**, the search system processes the input.

- **Step 3**:
  - No search results are displayed.
  - A bold message "No results found" appears beneath the search bar.
  - An image of a person holding a map and looking lost is displayed.

**Actual Results**:

- **Step 1**:
  - The user was logged in, with initials displayed at the top right corner.

- **Step 2**:
  - As the user typed **"test123"** in the search bar, the system accepted the input.

- **Step 3**:
  - No search results were displayed.
  - The message **"No results found"** was displayed prominently under the search bar.
  - An image of a person holding a map and looking lost was shown.

  **Screenshot**: [No Results Found Message](../../images/TC-RS/TC-RS-002/TC-RS-002_No_Results_Found.png)

**Status**:

- [X] Pass

**Comments**:

- N/A