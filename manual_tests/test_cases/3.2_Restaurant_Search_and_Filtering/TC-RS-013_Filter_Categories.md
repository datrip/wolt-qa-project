**Test Case ID**: TC-RS-013

**Title**: Verify that selecting category filters updates search results accordingly

**Test Objective**: Verify that when a user selects one or more categories from the filters, the search results update to display only venues matching the selected categories.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to filter search results by categories so that I can narrow down the options based on my tastes.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are multiple venues and categories associated with the keyword **"ramen"** in the user's delivery area.

**Test Data**:

- **Keyword**: "ramen"

**Test Steps**:

1. **Ensure Logged-In State and Delivery Location**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Keyword and Initiate Search**:
   - Click on the search bar located at the top of the homepage.
   - Type the keyword **"ramen"** into the search field.

3. **Click 'See all' for 'Restaurants and stores'**:
   - In the search results, locate the **"See all"** link next to **"Restaurants and stores"**.
   - Click on **"See all"** to view all related venues.

4. **Access Filter Options**:
   - On the resulting page, find the sorting/filter button located at the top right.
   - Click on the button to open the filter modal.

5. **Locate the 'Category' Section**:
   - In the filter modal, scroll down to find the **"Category"** section.
   - Observe the categories listed.

6. **Expand the Category List**:
   - Click on **"See all filters"** to expand and display all available categories.

7. **Select One or More Categories**:
   - Select the **"Asian"** category by clicking on it.
   - Confirm that the category button highlights or changes color to indicate selection.

8. **Apply the Filter**:
   - Click on the **"Apply"** button at the bottom of the filter modal.

9. **Verify that Search Results Update Accordingly**:
   - Confirm that the search results now display only venues categorized under **"Asian"**.
   - Verify that all listed venues are relevant to the **"Asian"** category.

10. **Select Multiple Categories**:
    - Access the filter modal again.
    - Select an additional category, e.g., **"Japanese"**.
    - Ensure that both **"Asian"** and **"Japanese"** categories are selected.

11. **Apply the Filter**:
    - Click on the **"Apply"** button.

12. **Verify that Search Results Reflect All Selected Categories**:
    - Confirm that the search results now include venues categorized as **"Asian"**, **"Japanese"**, or both.
    - Verify that all listed venues are relevant to at least one of the selected categories.

13. **Clear Category Filters**:
    - Access the filter modal once more.
    - Deselect all selected categories by clicking on them again.
    - Ensure that no categories are highlighted.

14. **Apply the Filter**:
    - Click on the **"Apply"** button.

15. **Verify that All Categories are Displayed**:
    - Confirm that the search results return to displaying venues from all categories matching the keyword **"ramen"**.

**Expected Results**:

- **Step 7**:
  - The **"Asian"** category is highlighted, indicating it is selected.

- **Step 9**:
  - Only venues categorized under **"Asian"** are displayed.
  - All venues are relevant to the **"Asian"** category.

- **Step 11**:
  - Both **"Asian"** and **"Japanese"** categories are selected.

- **Step 12**:
  - The search results include venues categorized as **"Asian"**, **"Japanese"**, or both.
  - All venues are relevant to at least one of the selected categories.

- **Step 15**:
  - All categories are displayed again.
  - Search results include all venues related to **"ramen"**.

**Actual Results**:

- **Step 7**:
  - Clicked on **"Asian"** category; it became highlighted.

- **Step 9**:
  - Search results updated to show venues like **"MyWok"**, categorized under **"Asian"**.
  - Only venues relevant to the **"Asian"** category were displayed.

- **Step 11**:
  - Selected **"Japanese"** category in addition to **"Asian"**; both were highlighted.

- **Step 12**:
  - Search results included venues categorized as **"Asian"**, **"Japanese"**, or both.
  - Venues relevant to either category were displayed.

- **Step 15**:
  - Deselected all categories; no categories were highlighted.
  - Search results returned to showing all relevant venues for **"ramen"**.

**Status**:

- [X] Pass

**Comments**:

- N/A