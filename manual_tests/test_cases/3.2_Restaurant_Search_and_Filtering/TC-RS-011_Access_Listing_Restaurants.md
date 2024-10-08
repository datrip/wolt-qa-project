**Test Case ID**: TC-RS-011

**Title**: Verify that clicking on a venue in the search results opens its detailed page and that navigating back returns to the search results

**Test Objective**: Verify that users can access detailed information about a venue by clicking on it from the search results, and that they can return to the search results by navigating back.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to easily access detailed information about a venue from the search results so that I can learn more before making a selection.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are multiple venues and products associated with the keyword **"ramen"** in the user's delivery area.

**Test Data**:

- **Keyword**: "ramen"

**Test Steps**:

**For "Restaurants and stores" Listings**:

1. **Ensure Logged-In State and Delivery Location**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Keyword and Initiate Search**:
   - Click on the search bar located at the top of the homepage.
   - Type the keyword **"ramen"** into the search field.

3. **Access Venue Detail from Initial Search Results**:
   - In the search results, under **"Restaurants and stores"**, locate the first venue listed.
   - Click on the venue's listing.

4. **Verify Venue Detail Page Opens**:
   - Confirm that the detailed page for the selected venue opens.
   - The page should display in-depth information about the venue and venue items.

5. **Navigate Back to Search Results**:
   - Use the browser's back button.
   - Confirm that you return to the initial search results page.

6. **Access Venue Detail from 'See all' Page**:
   - On the search results page, click on **"See all"** next to **"Restaurants and stores"**.
   - On the **"Restaurants and stores"** page, locate any venue listing.
   - Click on the venue's listing.

7. **Verify Venue Detail Page Opens**:
   - Confirm that the detailed page for the selected venue opens.
   - The page should display in-depth information about the venue and venue items.

8. **Navigate Back to 'See all' Page**:
   - Use the browser's back button.
   - Confirm that you return to the **"Restaurants and stores"** page with the list of all venues.
   
**Expected Results**:

- **Steps 3 & 4**:
  - Clicking on a venue from the initial **"Restaurants and stores"** search results opens the venue's detailed page.
  - The detailed page loads correctly, displaying in-depth information about the venue.
  
- **Step 5**:
  - Navigating back returns the user to the initial search results page.
  - The search results are displayed as before.

- **Steps 6 & 7**:
  - Clicking on a venue from the **"See all"** **"Restaurants and stores"** page opens the venue's detailed page.
  - The detailed page loads correctly.

- **Step 8**:
  - Navigating back returns the user to the **"Restaurants and stores"** **"See all"** page.

**Actual Results**:

- **Steps 3 & 4**:
  - Clicked on the first venue under **"Restaurants and stores:"** (**My Wok**).
  - The venue's detailed page opened successfully, displaying menu items and venue information.

    **Screenshot**: [Venue Detail Page](../../images/TC-RS/TC-RS-011/TC-RS-011_Venue_Detail_Page.png)

- **Step 5**:
  - Used the browser's back button.
  - Returned to the initial search results page with the previous search results intact.

- **Steps 6 & 7**:
  - Navigated to the **"Restaurants and stores"** **"See all"** page.
  - Clicked on a venue listing (e.g., **"Rimi Hyper (Malūno g.)"**).
  - The venue's detailed page opened successfully.

- **Step 8**:
  - Used the browser's back button.
  - Returned to the **"Restaurants and stores"** **"See all"** page.

**Status**:

- [X] Pass

**Comments**:

- N/A