# Wolt QA Project: Requirements and Scope

## 1. Introduction
A comprehensive project that aims to test the website functionality of Wolt food delivery service. Includes project plan documentation, manual test cases and automation scripts written in Selenium. Intended as a personal project for QA Engineer Tomas Paliūnas.

## 2. Features to be Tested

### 2.1 User Registration and Login

Unified modal interface for account creation and login:
- Email-based authentication process
- Third-party login options (Google, Apple, Facebook)
- Smart email field that determines if user is new or returning

Key testing focus:
- Modal functionality
- Input validation and error handling
- Email delivery and link functionality
- Third-party authentication integration
- User session management (post login)

### 2.2 Restaurant Search and Filtering

Smart search with instant suggestions:
- Search bar that expands to show results as you type
- Results split into "Restaurants and stores" and "Food and products"
- Matches what you type to nearby places and menu items

Search results page with lots of options:
- Shows restaurants and stores that match your search
- Several filters including food type, sorting options, and special features (Wolt+)

Key testing focus:
- Search bar suggestion accuracy
- Correct display of search results (images, text, rating and delivery information)
- Filter functionality and result relevance
- Sort order accuracy across different criteria

### 2.3 Menu Browsing and Item Selection

Restaurant landing page:
- Restaurant name and essential information
- Delivery details, ratings, and operating hours
- Menu sections (main dishes, soups, snacks etc.)
- Search bar for finding specific menu items

Menu items:
- Each item shows name, image, description, and price
- Items organized by menu sections for easy browsing

Key testing focus:
- Accuracy of restaurant information
- Correct menu item categorization (between top bar and results below)
- Navigation between menu sections
- Functionality of the menu item search bar
- Individual menu item details

### 2.4 Shopping Cart Management

Item selection process:
- Modal opens when clicking a menu item
- Customization options (e.g., drinks, sauces, toppings for combo meals)
- Quantity selection
- "Add to order" functionality

Cart overview:
- "View order" button visible on top right of page
- Side modal displays added items
- Option to add comments for the venue (allergies, special requests)
- "Go to checkout" button

Key testing focus:
- Accuracy of item customization options
- Correct updating of cart when adding/modifying items
- Functionality of "View order" button and side modal
- Proper display of all added items in the cart
- Comment field for special instructions
- "Go to checkout" button functionality

### 2.5 Checkout Process (up to payment, without actual transactions)

Delivery options:
- Choice between delivery and pickup
- Delivery location selection
- Special instructions (e.g., "leave at door", notes for courier)

Delivery timing:
- Standard (immediate) delivery with estimated time
- Scheduled delivery option with date and time selection

Order review:
- List of selected items with quantities
- Option to modify quantities
- "Add more items" functionality

Payment section:
- Display of saved payment methods
- Option to add a new payment card
- Courier tipping feature with preset amounts
- Promo code / gift card redemption field

Order summary:
- Subtotal, fees, and total cost breakdown
- Applicable discounts display

Key testing focus:
- Switching between delivery and pickup options
- Accuracy of delivery time estimates
- Functionality of scheduling feature
- Correct display and modification of order items
- Payment method selection and new card addition process
- Tipping feature functionality
- Promo code / gift card redemption
- Dynamic updating of total cost based on order changes
- Validation of required fields (address, payment method)
- "Place order" button state based on required information (example: forgot to add payment card or address, would not allow to checkout)

### 2.6 User Profile Management

Personal Info:
- Profile picture management (upload/delete)
- Display of user details (name, email, phone)
- Wolt tokens/credits balance
- Favorites and recent order quick access

Payment Methods:
- View saved payment methods
- Add new payment cards

Addresses:
- List of saved addresses
- Edit or delete existing addresses
- Add new address with detailed input options

Order History:
- Chronological list of past orders
- Detailed view of individual orders

Promotional Features:
- Earn Wolt credits through referral program
- Display and copy referral code
- Redeem codes from other users

Settings:
- Review and edit general account information
- Manage notification preferences
- Account deletion option
- Change country setting

Key testing focus:
- Profile picture upload and deletion
- Accuracy of displayed user information
- Functionality of adding/editing payment methods
- Address management (add, edit, delete)
- Correct display of order history and details
- Referral code generation and copying
- Code redemption process
- Settings modifications and their effect on the account
- Responsiveness and layout across different devices
- Data persistence after making changes


## 3. User Stories

### 3.1 User Registration and Login

- As a new user, I want to sign up using my email or a third-party service (Google, Apple, Facebook) so I can create an account and use Wolt's services.
- As a returning user, I want the system to recognize my email when I log in so I don't have to re-enter my details.
- As a user, I want a simple interface for logging in and signing up so I can easily switch between creating an account and logging in.
- As a user, I want my login information to be checked securely so my account and personal data are safe.
- As a user, I want to stay logged in after I sign in so I don't have to log in again while using the website.

### 3.2 Restaurant Search and Filtering

- As a user, I want search suggestions to appear as I type so I can quickly find restaurants or items.
- As a user, I want to apply filters to my search (like food type or Wolt+) so I can narrow down my choices.
- As a user, I want to sort the restaurant results by rating or delivery time so I can find the best option for me.

### 3.3 Menu Browsing and Item Selection

- As a user, I want to see important restaurant info (like ratings and delivery details) so I can decide if I want to order from there.
- As a user, I want to browse the menu with items sorted into sections so I can find what I want easily.
- As a user, I want to search for specific menu items so I can quickly find the dish I'm looking for.
- As a user, I want to see details about a menu item (name, description, price, image) so I know what I'm ordering.

### 3.4 Shopping Cart Management

- As a user, I want to add items to my cart with options to customize them (like sauces or toppings) so I can personalize my order.
- As a user, I want to view the items in my cart anytime so I can check my order before checkout.
- As a user, I want to update item quantities and customize options in my cart so I can adjust my order.
- As a user, I want to see a summary of the items in my cart so I can confirm my order details.

### 3.5 Checkout Process

- As a user, I want to choose between delivery or pickup so I can decide how to get my order.
- As a user, I want to schedule my delivery for a future time so I can plan when my food arrives.
- As a user, I want to select a saved payment method or add a new one so I can complete my order.
- As a user, I want to apply a promo code or gift card so I can get a discount on my order.
- As a user, I want to review and confirm my order before I place it so I can make sure everything is correct.

### 3.6 User Profile Management

- As a user, I want to update my personal details (name, email, phone) so my account information is up to date.
- As a user, I want to add, edit, or delete my saved addresses so I can manage where my orders are delivered.
- As a user, I want to update or remove saved payment methods so I can manage my payment options.
- As a user, I want to view my past orders so I can reorder or check previous purchases.
- As a user, I want to use my referral code to earn credits by inviting others so I can get discounts on future orders.

## 4. Test Scenarios

### 4.1 User Registration and Login

- Verify new user registration using email
- Test registration using third-party login (Google, Apple, Facebook)
- Confirm system recognition of returning users during login
- Validate third-party authentication login
- Test login modal functionality and registration/login switching
- Verify user session persistence after login

### 4.2 Restaurant Search and Filtering

- Check accuracy of search bar suggestions
- Verify relevance of search results for restaurants and menu items
- Test application and effect of filters on search results
- Confirm sorting functionality by different criteria

### 4.3 Menu Browsing and Item Selection

- Verify accuracy of restaurant landing page information
- Test menu item categorization and section navigation
- Validate in-restaurant menu search functionality
- Confirm correct display of individual menu item details

### 4.4 Shopping Cart Management

- Test item addition to cart with customization options
- Verify accurate cart updates when modifying items
- Confirm "View order" button and side modal functionality
- Test addition of special instructions for the restaurant
- Verify "Go to checkout" button functionality

### 4.5 Checkout Process

- Test switching between delivery and pickup options
- Verify accuracy of estimated delivery times
- Confirm functionality of future delivery scheduling
- Test order review and modification before placement
- Verify display and addition of payment methods
- Test tipping functionality and total amount updates
- Confirm promo code and gift card application
- Verify "Place order" button enablement conditions

### 4.6 User Profile Management

- Test profile picture upload and deletion
- Verify personal information update and save functionality
- Confirm address management (add, edit, delete) in user profile
- Test payment method management in user profile
- Verify accuracy of order history display
- Test referral code generation, copying, and redemption
- Confirm saving and reflection of account setting changes

## 5. Types of Testing

### 5.1 Functional Testing
- Core functionalities mentioned above:
  * User Registration and Login
  * Restaurant Search and Filtering
  * Menu Browsing and Item Selection
  * Shopping Cart Management
  * Checkout Process
  * User Profile Management

### 5.2 UI Testing
- Different browser compatibility testing:
  * Chrome, Firefox, Safari
- Tablet/Mobile testing (iOS and Android):
  * Tablet devices
  * Mobile devices 

### 5.3 Security Testing
- Simple security checks:
  * SQL injection tests on input fields
  * XSS tests on on input fields

### 5.4 Error Handling
- Testing system behavior with invalid inputs
- Verification of error messages

## 6. Test Environment

- Browsers: Chrome, Firefox, Safari
- Devices: 
  * Desktop (Windows)
  * Mobile (iOS, Android)
  * Tablet (iOS, Android)
- Tools: 
  * Selenium WebDriver for automation

## 7. Risk Assessment

### 7.1 Limited Access
- Description: Unable to test backend or admin areas that require special permissions
- Likelihood: High
- Severity: Medium

### 7.2 Data Limitations
- Description: Cannot test with a wide range of real user test data
- Likelihood: High
- Severity: Medium

### 7.3 Transaction Restrictions
- Description: Unable to complete actual purchases
- Likelihood: High
- Severity: High

### 7.4 Time Sensitivity
- Description: Features or UI may change during the testing period without notice
- Likelihood: Medium
- Severity: Low

### 7.5 Device Coverage
- Description: Testing limited to available personal devices, may not cover all user scenarios
- Likelihood: High
- Severity: Medium


## 8. Out of Scope
- Real transactions
- Backend performance testing
- Mobile application
- Anything related to working as Wolt Courier (different part of the website)


## 9. Test Approach

### Manual Testing
- Exploratory testing to catch unexpected behaviors
- Cross-browser and device compatibility checks
- General user experience checks
- Other cases that are impossible to cover with automation

### Automation Testing
- Automation will cover most functional tests unless not possible to automate
- Tests will be converted in to regression test suite after execution for the future
- Selenium will be used due to prior knowledge and ease of use

