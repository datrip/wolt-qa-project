**Test Case ID**: TC-RS-010

**Title**: Verify that each product listing displays key information in the search results

**Test Objective**: Verify that each product listing in the search results displays relevant information to help users make quick decisions.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to see key information about each venue in the search results so that I can make quick decisions.

**Preconditions**:

- The user is logged into their Wolt account.
- The user is on the Wolt homepage.
- There are multiple products associated with the keyword **"ramen"** in the user's delivery area.

**Test Data**:

- **Keyword**: "ramen"

**Test Steps**:

1. **Ensure Logged-In State and Delivery Location**:
   - Open a web browser (e.g., Chrome or Firefox).
   - Navigate to `https://wolt.com` and confirm that the user is logged in.

2. **Enter the Keyword and Initiate Search**:
   - Click on the search bar located at the top of the homepage.
   - Type the keyword **"ramen"** into the search field.

3. **Click 'See all' for 'Food and products'**:
   - In the search results, locate the **"See all"** link next to **"Food and products"**.
   - Click on **"See all"** to view all related products.

4. **Verify Key Information is Displayed for Each Product**:
   - For each product listed, verify that the following information is displayed:
     - **Product Name**: The name of the item.
     - **Product Price**: The cost of the item (e.g., "€11.90").
     - **Delivery Fee**: The delivery fee amount (e.g., "€0.00").
     - **Estimated Delivery Time**: The estimated delivery time (e.g., "15-25 min").
     - **Venue Name**: The name of the restaurant or store offering the product.
     - **Venue Rating**: The customer rating of the venue (e.g., "8.4").
     - **Wolt+ Indicator**: A Wolt+ logo ("W+") if the venue is part of Wolt+.
     - **Product Image**: An image representing the product is displayed as the background of the listing.

5. **Verify Accuracy and Clarity of the Information**:
   - Ensure that the information is accurate and corresponds to the product's details.
   - Verify that the text is legible and images are clear and properly loaded.

**Expected Results**:

- **Step 4**:
  - Each product listing displays the following key information:
    - **Product Name**: Clearly shown, e.g., "Azijietiški ramen makaronai su vištiena".
    - **Product Price**: Displayed, e.g., "€11.90".
    - **Delivery Fee**: Displayed, e.g., "€0.00".
    - **Estimated Delivery Time**: Displayed, e.g., "15-25 min".
    - **Venue Name**: Displayed, e.g., "Kefyro Ūsai".
    - **Venue Rating**: Displayed, e.g., "8.4".
    - **Wolt+ Indicator**: Present if applicable, with the Wolt+ logo next to the venue name.
    - **Product Image**: A relevant image representing the product is shown as the background of the listing.

- **Step 5**:
  - The displayed information is accurate and up-to-date.
  - Text is legible, with no truncation or overlap.
  - Images are clear, properly sized, and loaded without errors.

**Actual Results**:

- **Step 4**:
  - Verified that each product listing displayed the required information:
    - **Product Name**: Names like "Tori Ramen", "Ramen makaronai SANTA MARIA, 200g", etc., were clearly shown.
    - **Product Price**: Displayed for each product, e.g., "€11.90", "€3.49".
    - **Delivery Fee**: Displayed, e.g., "€0.00".
    - **Estimated Delivery Time**: Displayed, e.g., "15-25 min".
    - **Venue Name**: Displayed, e.g., "Manami (Vilnius Outlet)", "Rimi Hyper (Malūno g.)".
    - **Venue Rating**: Ratings like "8.4", "8.8" were displayed.
    - **Wolt+ Indicator**: Wolt+ venues had the Wolt+ logo next to the venue name.
    - **Product Image**: Images of the products were displayed as the background of each listing.

    **Screenshot**: [Product Listing with Key Information](../../images/TC-RS/TC-RS-010/TC-RS-010_Product_Listing.png)

- **Step 5**:
  - Information was accurate and matched the product's details.
  - Text was legible, and no issues with overlap were observed.
  - Images were clear and loaded correctly without distortion.

**Status**:

- [X] Pass

**Comments**:

- N/A