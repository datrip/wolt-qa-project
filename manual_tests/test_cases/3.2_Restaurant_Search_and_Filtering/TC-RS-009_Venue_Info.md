**Test Case ID**: TC-RS-009

**Title**: Verify that each venue listing displays key information in the search results

**Test Objective**: Verify that each venue listing in the search results displays relevant information to help users make quick decisions.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to see key information about each venue in the search results so that I can make quick decisions.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are multiple venues associated with the keyword **"ramen"** in the user's delivery area.

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

4. **Verify Key Information is Displayed for Each Venue**:
   - For each venue listed, verify that the following information is displayed:
     - **Venue Name**: The name of the restaurant or store.
     - **Venue Description**: A brief description of the venue or the type of cuisine offered.
     - **Delivery Fee**: The delivery fee amount (e.g., "€0.00").
     - **Estimated Delivery Time**: The estimated delivery time (e.g., "15-25 min").
     - **Price Range Indicator**: An indication of the venue's price range, represented by € symbols (from one € to four €€€€).
     - **Venue Rating**: The customer rating of the venue (e.g., "8.4").
     - **Wolt+ Indicator**: A Wolt+ logo ("W+") if the venue is part of Wolt+.
     - **Venue Image**: A background image or thumbnail representing the venue.

5. **Verify Accuracy and Clarity of the Information**:
   - Ensure that the information is accurate and corresponds to the venue's details.
   - Verify that the text is legible and images are clear and properly loaded.

**Expected Results**:

- **Step 4**:
  - Each venue listing displays the following key information:
    - **Venue Name**: Clearly shown, e.g., "Kefyro Ūsai".
    - **Venue Description**: Briefly describes the venue, e.g., "Fast food restaurant || All information about the sold products is provided by the restaurant".
    - **Delivery Fee**: Displayed, e.g., "€0.00".
    - **Estimated Delivery Time**: Displayed, e.g., "15-25 min".
    - **Price Range Indicator**: Displayed using € symbols, e.g., "€€".
    - **Venue Rating**: Displayed, e.g., "8.4".
    - **Wolt+ Indicator**: Present if applicable, with the Wolt+ logo next to the venue name.
    - **Venue Image**: A relevant image representing the venue is shown as the background of the listing.

- **Step 5**:
  - The displayed information is accurate and up-to-date.
  - Text is legible, with no truncation or overlap.
  - Images are clear, properly sized, and loaded without errors.

**Actual Results**:

- **Step 4**:
  - Verified that each venue listing displayed the required information:
    - **Venue Name**: Names like "MyWok", "I Hate Sushi", were shown.
    - **Venue Description**: Descriptions were present, providing insight into the venue.
    - **Delivery Fee**: Displayed for each venue, e.g., "€0.00".
    - **Estimated Delivery Time**: Displayed, e.g., "40-50 min".
    - **Price Range Indicator**: € symbols were present, indicating price range.
    - **Venue Rating**: Ratings like "8.4", "9.0", "9.6" were displayed.
    - **Wolt+ Indicator**: Wolt+ venues had the Wolt+ logo next to their name.
    - **Venue Image**: Images were displayed as the background of each listing.

    **Screenshot**: [Venue Listing with Key Information](../../images/TC-RS/TC-RS-009/TC-RS-009_Venue_Listing.png)

- **Step 5**:
  - Information was accurate and matched the venue's details.
  - Text was legible, and no issues with truncation or overlap were observed.
  - Images were clear and loaded correctly without distortion.

**Status**:

- [X] Pass

**Comments**:

- N/A