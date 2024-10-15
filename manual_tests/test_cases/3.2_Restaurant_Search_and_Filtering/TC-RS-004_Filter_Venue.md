**Test Case ID**: TC-RS-004

**Title**: Verify that selecting each venue type filter updates search results accordingly

**Test Objective**: Verify that when a user selects each venue type filter, the search results update to display only venues matching the selected type.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to filter search results by venue type so that I can narrow down my options.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are venues of various types available in the user's delivery area associated with the keyword **"ramen"**.

**Test Data**:

- **Keyword**: "ramen"

**Test Steps**:

1. **Ensure Logged-In State**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Keyword and Initiate Search**:
   - Click on the search bar at the top of the homepage.
   - Type the keyword **"ramen"** into the search field.

3. **Click 'See all' for 'Restaurants and stores'**:
   - In the search results, locate the **"See all"** link next to **"Restaurants and stores"**.
   - Click on **"See all"** to view all related venues.

4. **Access the Filter Options**:
   - On the resulting page, find the sorting/filter button labeled "Sorted by **Recommended**".
   - Click on the button to open the filtering options.

5. **Verify 'All results' Filter is Selected by Default**:
   - In the filter modal, confirm that **"All results"** is selected by default.
   - Observe that venues of all types related to **"ramen"** are displayed.

6. **Select 'Restaurant' Filter and Verify Results**:
   - In the filter modal, select **"Restaurant"**.
   - Apply the filter by clicking **"Apply"** button.
   - Confirm that the displayed venues are only restaurants.
   - Ensure no other venue types are shown.

7. **Select 'Grocery' Filter and Verify Results**:
   - In the filter modal, select **"Grocery"**.
   - Apply the filter by clicking **"Apply"** button.
   - Confirm that only grocery stores related to **"ramen"** are displayed.
   - Ensure no other venue types are shown.

8. **Select 'Alcohol' Filter and Verify Results**:
   - Select **"Alcohol"** in the filter modal.
   - Apply the filter by clicking **"Apply"** button.
   - Observe the venues displayed.
   - If venues are available, confirm they are all alcohol-related.
   - If no venues are available, verify that a **"No results found"** message is displayed.

9. **Select 'Home & DIY' Filter and Verify Results**:
   - Select **"Home & DIY"** in the filter modal.
   - Apply the filter by clicking **"Apply"** button.
   - Observe the venues displayed.
   - If venues are available, confirm they are all Home & DIY related.
   - If no venues are available, verify that a **"No results found"** message is displayed.

10. **Select 'General merchandise' Filter and Verify Results**:
    - Select **"General merchandise"** in the filter modal.
    - Apply the filter by clicking **"Apply"** button.
   - Observe the venues displayed.
   - If venues are available, confirm they are all General merchandise related.
   - If no venues are available, verify that a **"No results found"** message is displayed.

11. **Repeat Steps 3-10 for 'Food and products'**:
    - Return to the initial search results.
    - Click on **"See all"** next to **"Food and products"**.
    - Repeat the filtering steps to verify the filters in the context of food and products.

**Expected Results**:

- **Step 1**:
  - User is successfully logged in, with their initials displayed on the top right corner.

- **Step 2**:
  - Relevant search results for **"ramen"** appear below the search bar.

- **Step 3**:
  - The **"Restaurants and stores"** page displays all venues related to **"ramen"**.

- **Step 4**:
  - The filter modal opens upon clicking the filter/sort button.

- **Step 5**:
  - **"All results"** is selected by default.
  - Venues of all types related to **"ramen"** are displayed.

- **Step 6**:
  - Upon selecting **"Restaurant"**, only restaurant venues are displayed.
  - No venues of other types are shown.

- **Step 7**:
  - Selecting **"Grocery"** displays only grocery stores related to **"ramen"**.
  - No other venue types are displayed.

- **Step 8**:
  - For **"Alcohol"**, if there are relevant venues, they are displayed.
  - If no venues are available, a **"No results found"** message is shown.

- **Steps 9-10**:
  - For venue types with no related venues (e.g., **"Home & DIY"**, **"General merchandise"**), a **"No results found"** message is displayed.

- **Step 11**:
  - In the **"Food and products"** section, filters function similarly.
  - Selecting each filter updates the product listings accordingly.
  - Appropriate messages are displayed when no results are found.

**Actual Results**:

- **Step 1**:
  - User was successfully logged in, with initials displayed at the top right corner.

- **Step 2**:
  - Search results for **"ramen"** appeared below the search bar.

- **Step 3**:
  - Clicking **"See all"** displayed all relevant venues under **"Restaurants and stores"**.

- **Step 4**:
  - The filter modal opened upon clicking the filter/sort button.

- **Step 5**:
  - **"All results"** was selected by default.
  - Venues of various types related to **"ramen"** were displayed.

  **Screenshot**: [Venue - All Results](../../images/TC-RS/TC-RS-003/TC-RS-003_Venue_All_Results.png)

- **Step 6**:
  - Selecting **"Restaurant"** displayed only restaurant venues.
  - Venues such as "Manami" were shown.
  - No other venue types were displayed.

  **Screenshot**: [Venue - Restaurant Filter](../../images/TC-RS/TC-RS-004/TC-RS-004_Venue_Restaurant_Filter.png)

- **Step 7**:
  - Selecting **"Grocery"** displayed grocery stores like "Youmame".
  - Only grocery venues were shown.

  **Screenshot**: [Venue - Grocery Filter](../../images/TC-RS/TC-RS-004/TC-RS-004_Venue_Grocery_Filter.png)

- **Step 8**:
  - Selecting **"Alcohol"**:
    - Venue called **"Alynas"** was found
    - **"Alynas"** has a listing for cup ramen therefore it fits.

  **Screenshot**: [Venue - Alcohol Filter](../../images/TC-RS/TC-RS-004/TC-RS-004_Venue_Alcohol_Filter.png)

- **Step 8**:
  - Selecting **"Home & DIY"**:
    - Venue called **"iittala"** was found
    - **"iittala"** has a listing for ramen bowls therefore it fits.

  **Screenshot**: [Venue - Home & DIY Filter](../../images/TC-RS/TC-RS-004/TC-RS-004_Venue_Home_DIY_Filter.png)

- **Step 10**:
  - Selecting **"General Merchandise"**:
    - Venue called **"Gera Dovana""** was found
    - **"Gera Dovana"** has a listing for "ramen meal coupon" therefore it fits.

  **Screenshot**: [Venue - General Merchandise Filter](../../images/TC-RS/TC-RS-004/TC-RS-004_Venue_General_Merchandise_Filter.png)

- **Step 11**:
  - Repeating the steps under **"Food and products"**:
    - Filters updated the list of products accordingly.

**Status**:

- [X] Pass

**Comments**:

- **Defect Identified**: After applying a venue type filter and refreshing the page, the filter menu only displays "All results" and the previously selected filter option. All other filter options are missing.
   [DEF-RS-004-001](../../images/defects/DEF-RS-004-001.docx): Filter options not persistent after page refresh

- **Defect Identified**: After applying the "All results" filter, venues in the "Home & DIY" category are not displayed in the search results.
   [DEF-RS-004-002](../../images/defects/DEF-RS-004-002.docx): "Home & DIY" venues missing from "All results" filter