**Test Case ID**: TC-RS-007

**Title**: Verify that the "Delivers to you now" filter displays only venues currently delivering

**Test Objective**: Verify that toggling the "Delivers to you now" filter updates the search results to show only venues that are currently delivering, and that toggling it off shows all venues, including those not currently delivering.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to filter results to show only venues that are currently delivering so that I can see immediate options.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are venues associated with the keyword **"ramen"**, including both currently delivering and not currently delivering venues, in the user's delivery area.

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

4. **Verify that Venues Not Currently Delivering are Displayed**:
   - Scroll through the list of venues.
   - Confirm that some venues are marked as **"Not delivering to your location"**, **"Closed"**, or **"Temporarily offline"**.

5. **Access Filter Options**:
   - Click on the sorting/filter button located at the top right.

6. **Toggle 'Delivers to you now' Filter On**:
   - In the filter modal, locate the **"Delivers to you now"** switch.
   - Toggle the switch to **On** (the switch moves to the right and changes color to green indicating it is active).
   - Apply the filter by clicking **"Apply"** button.

7. **Verify that Only Currently Delivering Venues are Displayed**:
   - Observe the updated list of venues.
   - Confirm that the previously noted venues marked as **"Not delivering to your location"**, **"Closed"**, or **"Temporarily offline"** are no longer displayed.
   - Ensure that all displayed venues are currently delivering to the user's location.

8. **Toggle 'Delivers to you now' Filter Off**:
   - Access the filter modal again by clicking on the sorting/filter button.
   - Toggle the **"Delivers to you now"** switch back to **Off** (the switch moves to the left).
   - Apply the filter.

9. **Verify that All Venues are Displayed Again**:
   - Observe the list of venues.
   - Confirm that the previously noted venues marked as **"Not delivering to your location"**, **"Closed"**, or **"Temporarily offline"** are displayed again.

10. **Repeat Steps 3-9 for 'Food and products'**:
    - Return to the initial search results.
    - Click on **"See all"** next to **"Food and products"**.
    - Perform steps 4 to 9 to verify the filter functionality in the context of specific food items and products.

**Expected Results**:

- **Step 4**:
  - Venues marked as **"Not delivering to your location"**, **"Closed"**, or **"Temporarily offline"** are present in the list.
  - These venues are identifiable by labels or messages indicating their unavailable status.

- **Step 6**:
  - Toggling the **"Delivers to you now"** filter to **On** applies the filter.
  - The filter modal reflects the active status of the filter.

- **Step 7**:
  - The venue list updates to show only venues that are currently delivering.
  - Previously noted venues that are not delivering are no longer displayed.
  - All displayed venues are available for immediate delivery.

- **Step 9**:
  - Toggling the **"Delivers to you now"** filter to **Off** reverts the filter.
  - The venue list updates to include all venues again.
  - Previously noted venues not currently delivering are displayed once more.

- **Step 10**:
  - In the **"Food and products"** section, the **"Delivers to you now"** filter functions similarly.
  - Only products from venues currently delivering are shown when the filter is **On**.
  - All products, including those from venues not currently delivering, are shown when the filter is **Off**.

**Actual Results**:

- **Step 4**:
  - Venues such as **"Manami (CUP)"** and **"Eat More Chinese & Shimai Sushi (Palangos g.)"** were marked as **"Closed"** or **"Temporarily offline"**.
  - These venues were displayed in the list alongside currently delivering venues.

  **Screenshot**: - [Venues Not Delivering Displayed](../../images/TC-RS/TC-RS-007/TC-RS-007_Not_Delivering_Venues.png)

- **Step 6**:
  - The **"Delivers to you now"** switch was toggled to **On**.
  - The filter modal reflected the change.

  **Screenshot**: - [Filter Modal - Delivers to You Now On](../../images/TC-RS/TC-RS-007/TC-RS-007_Filter_Modal_On.png)

- **Step 7**:
  - After applying the filter, the list updated.
  - The venues previously noted as not delivering were no longer visible.
  - Only venues currently delivering were displayed.

- **Step 9**:
  - Toggling the filter back to **Off** restored the original list.
  - All venues, including those not currently delivering, were displayed again.

  **Screenshot**: - [Filter Modal - Delivers to You Now Off](../../images/TC-RS/TC-RS-007/TC-RS-007_Filter_Modal_Off.png)

- **Step 10**:
  - Repeating the steps in the **"Food and products"** section yielded similar results.
  - When **"Delivers to you now"** was **On**, only products from currently delivering venues were shown.
  - When the filter was **Off**, products from all venues were displayed.

**Status**:

- [X] Pass

**Comments**:

- N/A