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