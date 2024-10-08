**Test Case ID**: TC-RS-012

**Title**: Verify that clicking on a product in the search results opens a modal with detailed information and that starting an order directs to the venue page with the item added to the cart

**Test Objective**: Verify that users can access detailed information about a product by clicking on it from the search results in **"Food and products"**, and that clicking **"Start ordering"** directs them to the venue page with the item added to the cart.

**Related User Story**:

- **ID**: [3.2](../../../requirements/3_User_Stories.md#32-restaurant-search-and-filtering)
- **Description**: As a user, I want to easily access detailed information about a product from the search results so that I can learn more before making a selection.

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

3. **Access Product Detail from Initial Search Results**:
   - In the search results, under **"Food and products"**, locate the first product listed.
   - Click on the product's listing.

4. **Verify Product Detail Modal Appears**:
   - Confirm that a modal window appears displaying detailed information about the product.
   - Verify that the following elements are present in the modal:
     - **Large Product Image**: An image of the product at the top.
     - **Product Name**: Displayed prominently (e.g., "Tori Ramen").
     - **Product Price**: Displayed (e.g., "€10.00").
     - **Product Description**: Brief description of the product (e.g., "Medium spicy, With grilled Teriyaki chicken.").
     - **ORDER FROM** Section:
       - **Venue Name**: Name of the restaurant offering the product (e.g., "Manami (Vilnius Outlet)").
       - **Venue Logo**: Displayed alongside the venue name.
       - **Wolt+ Indicator**: Wolt+ logo if applicable.
       - **Base Delivery Fee**: Displayed (e.g., "€0.00").
       - **Estimated Delivery Time**: Displayed (e.g., "40-50 min").
       - **Venue Rating**: Displayed (e.g., "8.4").
     - **Start Ordering Button**: A button labeled **"Start ordering"** at the bottom of the modal.

5. **Start Ordering the Product**:
   - In the modal, click on the **"Start ordering"** button.

6. **Verify Redirection to Venue Page with Item Added to Cart**:
   - Confirm that the user is redirected to the venue's page.
   - Verify that the product is added to the cart automatically.
   - Check that the cart displays the correct item, quantity, and price.

7. **Navigate Back to Search Results**:
   - Use the browser's back button.
   - Confirm that you return to the initial search results page.

8. **Access Product Detail from 'See all' Page**:
   - On the search results page, click on **"See all"** next to **"Food and products"**.
   - On the **"Food and products"** page, locate any product listing.
   - Click on the product's listing.

9. **Repeat Verification of Product Detail Modal**:
   - Repeat steps 4 to 6 for the product selected from the **"See all"** page.

**Expected Results**:

- **Step 3 & 4**:
  - Clicking on a product from the initial **"Food and products"** search results opens a modal window.
  - The modal displays detailed information about the product, including all specified elements.

- **Step 5**:
  - Clicking **"Start ordering"** initiates the ordering process.

- **Step 6**:
  - The user is redirected to the venue's page.
  - The product is automatically added to the cart.
  - The cart displays the correct item with accurate details.

- **Step 7**:
  - Navigating back returns the user to the initial search results page.

- **Steps 8 & 9**:
  - Clicking on a product from the **"See all"** **"Food and products"** page opens the product detail modal.
  - The modal displays all required information.
  - Starting the order redirects to the venue page with the item added to the cart.

**Actual Results**:

- **Steps 3 & 4**:
  - Clicked on the first product under **"Food and products"** (e.g., **"Tori Ramen"**).
  - A modal window appeared displaying detailed information about the product.
  - Verified that all specified elements were present in the modal.

  **Screenshot**: [Product Detail Modal](../../images/TC-RS/TC-RS-012/TC-RS-012_Product_Detail_Modal.png)

- **Step 5**:
  - Clicked on **"Start ordering"** in the modal.

- **Step 6**:
  - Redirected to the venue page of **"Manami (Vilnius Outlet)"**.
  - The product **"Tori Ramen"** was automatically added to the cart.
  - The cart displayed the correct item, quantity, and price.

  **Screenshot**: [Venue Page with Item in Cart](../../images/TC-RS/TC-RS-012/TC-RS-012_Item_Added_To_Cart.png)

- **Step 7**:
  - Used the browser's back button.
  - Returned to the initial search results page.

- **Steps 8 & 9**:
  - Navigated to the **"Food and products"** **"See all"** page.
  - Selected a different product (e.g., **"Ramen makaronai SANTA MARIA, 200g"**).
  - The product detail modal appeared with all required information.
  - Clicked **"Start ordering"**.
  - Redirected to the venue page with the product added to the cart.

**Status**:

- [X] Pass

**Comments**:

- N/A