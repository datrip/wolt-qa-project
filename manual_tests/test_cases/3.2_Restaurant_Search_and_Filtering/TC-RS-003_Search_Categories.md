**Test Case ID**: TC-RS-003

**Title**: Verify that search results are categorized into "Restaurants and stores" and "Food and products"

**Test Objective**: Verify that when a user enters a valid keyword in the search bar, the search results are appropriately categorized into "Restaurants and stores" and "Food and products".

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to search for restaurants using keywords so that I can find specific cuisines or dishes.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are restaurants and products associated with the keyword **"ramen"** in the user's delivery area.

**Test Data**:

- **Keyword**: "ramen"

**Test Steps**:

1. **Ensure Logged-In State and Delivery Location**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Keyword and Initiate Search**:
   - Click on the search bar located at the top of the homepage.
   - Type the keyword **"ramen"** into the search field.

3. **Verify that Search Results are Categorized Correctly and Display 4 Listings Each**:
   - Observe the search results displayed below the search bar.
   - Confirm that the results are divided into two sections:
     - **"Restaurants and stores"**
     - **"Food and products"**
   - Count the number of listings in each category.


**Expected Results**:

- **Step 1**:
  - The user is successfully logged in, with their name or initials displayed at the top right corner.

- **Step 2**:
  - As the user types **"ramen"**, relevant search results begin to appear automatically below the search bar.

- **Step 3**:
  - The search results are categorized into two clearly labeled sections:
    - **"Restaurants and stores"**:
      - Displays exactly 4 listings of venues that offer ramen.
    - **"Food and products"**:
      - Displays exactly 4 listings of specific ramen dishes or related products.
  - Each category contains relevant items associated with the keyword **"ramen"**.

**Actual Results**:

- **Step 1**:
  - The user was logged in successfully, with initials displayed at the top right corner.

- **Step 2**:
  - As the user typed **"ramen"** in the search bar, relevant search results started to appear immediately below.

- **Step 3**:
  - The search results were correctly categorized into:
    - **"Restaurants and stores"**
    - **"Food and products"**
  - Each section contained exactly 4 relevant listings associated with **"ramen"**.
  
  **Screenshot**: [Categorized Search Results](../../images/TC-RS/TC-RS-003/TC-RS-003_Categorized_Search_Results.png)

**Status**:

- [X] Pass

**Comments**:

- N/A