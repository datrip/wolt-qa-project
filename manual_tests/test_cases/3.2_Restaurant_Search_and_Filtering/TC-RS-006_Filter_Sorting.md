**Test Case ID**: TC-RS-006

**Title**: Verify that selecting each sorting option updates search results accordingly

**Test Objective**: Verify that when a user selects each sorting option, the search results update and are ordered based on the selected criterion.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to sort search results by different criteria so that I can find the best option for my needs.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.

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

4. **Access Sorting Options**:
   - On the resulting page, find the sorting/filter button labeled "Sorted by **Recommended**".
   - Click on the button to open the sorting options modal.

5. **Verify 'Recommended' Sorting Option is Selected by Default**:
   - In the sorting modal, confirm that **"Recommended"** is selected by default.
   - Observe that venues are listed according to the recommended order.

6. **Select 'Distance' Sorting Option and Verify Results**:
   - In the sorting modal, select **"Distance"**.
   - Apply the filter by clicking **"Apply"** button.
   - Confirm that the venues are now ordered from the closest to the furthest based on distance from the user's location.

7. **Select 'Rating' Sorting Option and Verify Results**:
   - Open the sorting modal again.
   - Select **"Rating"**.
   - Apply the sorting option.
   - Confirm that the venues are now ordered from the highest to the lowest customer rating.

8. **Select 'Delivery price' Sorting Option and Verify Results**:
   - Open the sorting modal.
   - Select **"Delivery price"**.
   - Apply the sorting option.
   - Confirm that the venues are now ordered from the lowest to the highest delivery fee.

9. **Select 'Delivery time' Sorting Option and Verify Results**:
   - Open the sorting modal.
   - Select **"Delivery time"**.
   - Apply the sorting option.
   - Confirm that the venues are now ordered from the shortest to the longest estimated delivery time.

10. **Repeat Sorting Steps for 'Food and products'**:
    - Return to the initial search results.
    - Click on **"See all"** next to **"Food and products"**.
    - Repeat steps 4 to 9 to verify the sorting options in the context of specific food items and products.

**Expected Results**:

- **Step 1**:
  - User is successfully logged in, with their initials displayed at the top right corner.

- **Step 2**:
  - As the user types **"ramen"**, relevant search results begin to appear automatically below the search bar.

- **Step 3**:
  - The **"Restaurants and stores"** page displays all venues related to **"ramen"**.

- **Step 4**:
  - The sorting options modal opens upon clicking the sorting/filter button.

- **Step 5**:
  - **"Recommended"** is selected by default.
  - Venues are displayed in the recommended order based on Wolt's algorithm.

- **Step 6**:
  - After selecting **"Distance"**, the venues are reordered.
  - Venues closest to the user's location are listed first.

- **Step 7**:
  - Selecting **"Rating"** reorders the venues.
  - Venues with the highest customer ratings appear at the top.
  - Ratings are displayed for each venue.

- **Step 8**:
  - Selecting **"Delivery price"** reorders the venues.
  - Venues with the lowest delivery fees are listed first.
  - Delivery fees are displayed alongside each venue.

- **Step 9**:
  - Selecting **"Delivery time"** reorders the venues.
  - Venues with the shortest estimated delivery times are listed first.
  - Estimated delivery times are displayed for each venue.

- **Step 10**:
  - In the **"Food and products"** section, selecting each sorting option functions similarly.
  - Products are reordered based on the selected sorting criterion.

**Actual Results**:

- **Step 1**:
  - The user was logged in successfully, with initials displayed at the top right corner.

- **Step 2**:
  - As the user typed **"ramen"**, relevant search results appeared below the search bar.

- **Step 3**:
  - Clicking **"See all"** displayed all venues under **"Restaurants and stores"** related to **"ramen"**.

- **Step 4**:
  - The sorting options modal opened upon clicking the sorting/filter button.

  **Screenshot**: - [Sorting Options Modal](../../images/TC-RS/TC-RS-006/TC-RS-006_Sorting_Modal.png)

- **Step 5**:
  - **"Recommended"** was selected by default.
  - Venues were displayed according to Wolt's recommended ordering.

- **Step 6**:
  - After selecting **"Distance"**, venues were reordered.
  - The nearest venues appeared at the top of the list.

  **Screenshot**: - [Sorted by Distance](../../images/TC-RS/TC-RS-006/TC-RS-006_Sorted_By_Distance.png)

- **Step 7**:
  - Selecting **"Rating"** reordered the venues.
  - Venues with higher ratings were listed before those with lower ratings.
  **Screenshot**: - [Sorted by Rating](../../images/TC-RS/TC-RS-006/TC-RS-006_Sorted_By_Rating.png)

- **Step 8**:
  - Selecting **"Delivery price"** reordered the venues.
  - Venues offering free or lower delivery fees were listed first.
  - Delivery fees were displayed next to each venue.

  **Screenshot**: - [Sorted by Delivery Price](../../images/TC-RS/TC-RS-006/TC-RS-006_Sorted_By_Delivery_Price.png)

- **Step 9**:
  - Selecting **"Delivery time"** reordered the venues.
  - Venues with shorter estimated delivery times appeared at the top.
  **Screenshot**: - [Sorted by Delivery Time](../../images/TC-RS/TC-RS-006/TC-RS-006_Sorted_By_Delivery_Time.png)

- **Step 10**:
  - Repeating the steps in **"Food and products"**:
    - Sorting options functioned as expected.
    - Products were reordered based on the selected criteria.

**Status**:

- [X] Pass

**Comments**:

- N/A