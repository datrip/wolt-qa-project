**Test Case ID**: TC-RS-008

**Title**: Verify that the "Only show Wolt+ venues" filter displays only Wolt+ venues

**Test Objective**: Verify that toggling the "Only show Wolt+ venues" filter updates the search results to show only Wolt+ venues, and that toggling it off shows all venues, including those not part of Wolt+.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a Wolt+ member, I want to filter results to show only Wolt+ venues so that I can take advantage of my membership benefits.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are venues associated with the keyword **"ramen"**, including both Wolt+ venues and non-Wolt+ venues, in the user's delivery area.

**Test Data**:

- **Keyword**: "ramen"

**Test Steps**:

1. **Ensure Logged-In State**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Keyword and Initiate Search**:
   - Click on the search bar located at the top of the homepage.
   - Type the keyword **"ramen"** into the search field.

3. **Click 'See all' for 'Restaurants and stores'**:
   - In the search results, locate the **"See all"** link next to **"Restaurants and stores"**.
   - Click on **"See all"** to view all related venues.

4. **Verify that Both Wolt+ and Non-Wolt+ Venues are Displayed**:
   - Scroll through the list of venues.
   - Confirm that both Wolt+ venues and non-Wolt+ venues are displayed.
   - Identify Wolt+ venues by the presence of the Wolt+ logo (small "W+") on the venue listing.

5. **Access Filter Options**:
   - Click on the sorting/filter button located at the top right.

6. **Toggle 'Only show Wolt+ venues' Filter On**:
   - In the filter modal, locate the **"Only show Wolt+ venues"** switch.
   - Toggle the switch to **On** (the switch moves to the right and changes color to green indicating it is active).
   - Apply the filter (click **"Apply"** button).

7. **Verify that Only Wolt+ Venues are Displayed**:
   - Observe the updated list of venues.
   - Confirm that only venues with the Wolt+ logo are displayed.
   - Verify that the previously noted non-Wolt+ venues are no longer displayed.

8. **Toggle 'Only show Wolt+ venues' Filter Off**:
   - Access the filter modal again by clicking on the sorting/filter button.
   - Toggle the **"Only show Wolt+ venues"** switch back to **Off** (the switch moves to the left).
   - Apply the filter.

9. **Verify that All Venues are Displayed Again**:
   - Observe the list of venues.
   - Confirm that both Wolt+ venues and non-Wolt+ venues are displayed.
   - Verify that the previously noted non-Wolt+ venues reappear in the list.

10. **Repeat Steps 3-9 for 'Food and products'**:
    - Return to the initial search results.
    - Click on **"See all"** next to **"Food and products"**.
    - Perform steps 4 to 9 to verify the filter functionality in the context of specific food items and products.

**Expected Results**:

- **Step 4**:
  - The list displays a mix of Wolt+ and non-Wolt+ venues.
  - Wolt+ venues have the Wolt+ logo ("W+") displayed on their listings.
  - Non-Wolt+ venues do not display the Wolt+ logo.

- **Step 6**:
  - Toggling the **"Only show Wolt+ venues"** filter to **On** activates the filter.
  - The filter modal reflects the active status of the filter.

- **Step 7**:
  - The venue list updates to show only venues that are part of Wolt+.
  - All displayed venues have the Wolt+ logo.
  - The previously noted non-Wolt+ venue is no longer displayed.

- **Step 9**:
  - Toggling the **"Only show Wolt+ venues"** filter to **Off** deactivates the filter.
  - The venue list updates to include both Wolt+ and non-Wolt+ venues again.
  - The previously noted non-Wolt+ venue reappears in the list.

- **Step 10**:
  - In the **"Food and products"** section, the **"Only show Wolt+ venues"** filter functions the same way.
  - Only products from Wolt+ venues are shown when the filter is **On**.
  - All products, including those from non-Wolt+ venues, are shown when the filter is **Off**.

**Actual Results**:

- **Step 4**:
  - Venues such as **"MyWok"** and **"Rimi Hyper (Vilnius Outlet)"** displayed the Wolt+ logo.
  - Venues such as **"Candy POP (Akropolis)"** did not display the Wolt+ logo and were identified as non-Wolt+ venues.

    **Screenshot**: [Venues Before Applying Wolt+ Filter](../../images/TC-RS/TC-RS-008/TC-RS-008_Venues_Before_Wolt_Plus_Filter.png)

- **Step 6**:
  - The **"Only show Wolt+ venues"** switch was toggled to **On**.
  - The filter modal showed the switch in the active position.

    **Screenshot**: [Filter Modal - Only Show Wolt+ Venues On](../../images/TC-RS/TC-RS-008/TC-RS-008_Filter_Modal_On.png)

- **Step 7**:
  - After applying the filter, the list updated.
  - Only venues with the Wolt+ logo were displayed.
  - The non-Wolt+ venue **"Candy POP (Akropolis)"** was no longer visible.

    **Screenshot**: [Venues After Applying Wolt+ Filter](../../images/TC-RS/TC-RS-008/TC-RS-008_Venues_After_Wolt_Plus_Filter.png)

- **Step 9**:
  - Toggling the filter back to **Off** restored the original list.
  - Both Wolt+ and non-Wolt+ venues were displayed again.
  - The non-Wolt+ venue **"Candy POP (Akropolis)"** reappeared in the list.

    **Screenshot**: [Filter Modal - Only Show Wolt+ Venues Off](../../images/TC-RS/TC-RS-008/TC-RS-008_Filter_Modal_Off.png)

- **Step 10**:
  - In the **"Food and products"** section, similar results were observed.
  - With the filter **On**, only products from Wolt+ venues were displayed.
  - With the filter **Off**, products from all venues were displayed.

**Status**:

- [X] Pass

**Comments**:

- N/A