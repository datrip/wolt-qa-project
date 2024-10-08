**Test Case ID**: TC-RS-005

**Title**: Verify that switching between filters maintains other applied settings (e.g., sorting)

**Test Objective**: Verify that when changing venue type filters or sorting options, any other applied settings remain consistent and are not reset.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to filter search results by venue type (All, Restaurant, Grocery, Alcohol) so that I can narrow down my options.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are multiple venues and categories associated with the keyword **"ramen"** in the user's delivery area.

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

4. **Change Sorting Option to 'Distance'**:
   - Locate the filter button.
   - Click on the button to open the sorting options.
   - Under **"Sort by"**, select **"Distance"**.
   - Apply the sorting option if necessary.
   - Confirm that venues are now sorted by distance.

5. **Access Filter Options and Apply a Venue Type Filter**:
   - Click on the sorting/filter button again to open the filter modal.
   - Under **"Filter"**, verify that **"All results"** is selected by default.
   - Change the venue type filter by selecting **"Restaurant"**.
   - Apply the filter.
   
6. **Verify Sorting Option Remains Unchanged**:
   - Confirm that the sorting option is still set to **"Distance"**.
   - Verify that the displayed venues are only **"Restaurant"** type and are sorted by **distance**.

7. **Change Venue Type Filter to 'Grocery'**:
   - Open the filter modal again.
   - Change the venue type filter to **"Grocery"**.
   - Apply the filter.
   
8. **Verify Sorting Option Remains Unchanged**:
   - Confirm that the sorting option is still **"Distance"**.
   - Verify that the displayed venues are only **"Grocery"** type and are sorted by **distance**.

9. **Change Sorting Option to 'Recommended'**:
   - Click on the sorting/filter button to access sorting options.
   - Change the sorting option to **"Recommended"**.
   - Apply the sorting option.
   
10. **Verify Venue Type Filter Remains Unchanged**:
    - Confirm that the venue type filter is still set to **"Grocery"**.
    - Verify that the displayed venues are only **"Grocery"** type and are now sorted by **"Recommended"**.

11. **Apply a Category Filter**:
    - Open the filter modal again.
    - Scroll down to the **"Category"** section.
    - Select a category filter, e.g., **"Asian"**.
    - Apply the filter.

12. **Verify Other Filters Remain Unchanged**:
    - Confirm that the venue type filter is still set to **"Grocery"**.
    - Confirm that the sorting option is still **"Recommended"**.
    - Verify that the displayed venues match all applied filters: **"Grocery"** venues in the **"Asian"** category, sorted by **"Recommended"**.

13. **Reset Venue Type Filter to 'All results'**:
    - Open the filter modal.
    - Under **"Filter"**, select **"All results"**.
    - Apply the filter.

14. **Verify Category Filter and Sorting Remain Unchanged**:
    - Confirm that the category filter is still set to **"Asian"**.
    - Confirm that the sorting option remains **"Recommended"**.
    - Verify that the displayed venues are from all venue types, in the **"Asian"** category, sorted by **"Recommended"**.

15. **Repeat Steps for 'Food and products'**:
    - Return to the initial search results.
    - Click on **"See all"** next to **"Food and products"**.
    - Perform steps 4 to 14 to verify consistency in the **"Food and products"** section.

**Expected Results**:

- **Steps 4 & 5**:
  - Changing the venue type filter does not reset the previously selected sorting option (**"Distance"**).
  - The search results reflect both the venue type filter (**"Restaurant"** or **"Grocery"**) and the sorting option.

- **Steps 6 & 8**:
  - The sorting option remains unchanged (**"Distance"**) after changing venue type filters.
  - The displayed venues are filtered and sorted accordingly.

- **Steps 9 & 10**:
  - Changing the sorting option does not reset the previously selected venue type filter (**"Grocery"**).
  - The search results reflect the venue type filter and the new sorting option (**"Recommended"**).

- **Step 12**:
  - Applying a category filter (**"Asian"**) does not reset the venue type filter (**"Grocery"**) or sorting option (**"Recommended"**).
  - The displayed venues match all applied filters.

- **Step 14**:
  - Resetting the venue type filter to **"All results"** retains the category filter (**"Asian"**) and sorting option (**"Recommended"**).
  - The search results update to include all venue types within the **"Asian"** category.

- **Step 15**:
  - The same consistency is observed when testing in the **"Food and products"** section.

**Actual Results**:

- **Steps 4 & 5**:
  - The sorting option remained set to **"Distance"** after changing the venue type filter to **"Restaurant"**.
  - Search results displayed only restaurants offering **"ramen"**, sorted by distance.

- **Steps 6 & 8**:
  - The sorting option stayed at **"Distance"** after switching the venue type filter to **"Grocery"**.
  - Only grocery stores offering **"ramen"** were displayed, sorted by distance.

- **Steps 9 & 10**:
  - After changing the sorting option to **"Recommended"**, the venue type filter remained at **"Grocery"**.
  - Search results showed grocery stores, now sorted by recommended.

- **Step 12**:
  - Applying the **"Asian"** category filter did not affect the venue type (**"Grocery"**) or sorting (**"Recommended"**) settings.
  - Displayed venues were grocery stores in the **"Asian"** category, sorted by recommended.

- **Step 14**:
  - Resetting the venue type filter to **"All results"** kept the category filter (**"Asian"**) and sorting option (**"Recommended"**).
  - Search results included all venue types in the **"Asian"** category, sorted by recommended.

- **Step 15**:
  - In the **"Food and products"** section, changing filters and sorting options maintained other settings consistently.

**Status**:

- [X] Pass

**Comments**:

- N/A