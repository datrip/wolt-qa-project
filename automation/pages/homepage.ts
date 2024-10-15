import { expect, Page } from '@playwright/test';
import { search } from 'audiobookbay';

export class HomePage {
  readonly page: Page;

  userMenu;
  userMenu_Logout;
  userMenu_Profile;
  constructor(page: Page) {
    this.page = page;

    this.userMenu = this.page.getByTestId("UserStatusDropdown");
    this.userMenu_Logout = this.page.getByTestId("UserMenu.Logout");
    this.userMenu_Profile = this.page.getByTestId("UserMenuItem.Profile");
  }

  // Navigate to the homepage and verify the title
  async navigate() {
    await this.page.goto('https://wolt.com/');
    await expect(this.page).toHaveTitle(/.*Wolt.*/);
  }

  // Open the registration modal by clicking the sign-up button
  async openRegistrationModal() {
    // Locate the sign-up button within this method
    const signUpButton = this.page.getByTestId("UserStatus.Login");
    await signUpButton.click();
  }

  // Close the popup if it's visible
  async closePopup() {
    // Wait for potential popup to appear
    await this.page.waitForTimeout(2000);

    // Locate the accept button within this method
    const acceptButton = this.page.getByTestId("allow-button");

    // If the accept button is visible, click it to close the popup
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
    }
  }

  async verifyLoggedIn(){
    await expect(this.userMenu).toBeVisible();
    await this.userMenu.click();
    await expect(this.userMenu_Logout).toBeVisible();
  }

  async goToProfile(){
    await expect(this.userMenu_Profile).toBeVisible();
    this.userMenu_Profile.click();

  }

  async searchKeyword(keyword: string){

    const searchInput = this.page.getByTestId("SearchInput");
    await expect(searchInput).toBeVisible();
    await searchInput.fill(keyword);

  }

  async verifyProducts(keyword: string) {
    const searchResults = this.page.getByTestId("ItemResultCardItemName");

    await expect(searchResults.first()).toBeVisible();
  
    expect(await searchResults.count()).toBeGreaterThan(3);
  
    const filteredResults = searchResults.filter({
      hasText: keyword,
    });
  
    const filteredCount = await filteredResults.count();
  
    expect(filteredCount).toBeGreaterThan(0);
  }
  
  async verifyVenues(keyword: string) {
    const searchResults = this.page.getByTestId("CondensedVenueResultRoot");

    await expect(searchResults.first()).toBeVisible();
  
    expect(await searchResults.count()).toBeGreaterThan(3);
  
    const filteredResults = searchResults.filter({
      hasText: keyword,
    });
    
    const filteredCount = await filteredResults.count();
  
    expect(filteredCount).toBeGreaterThan(0);
  }

  async verifyNoResults(){
    // Verify No results message and graphic
    await expect(this.page.getByText("No results found")).toBeVisible()
    await expect(this.page.getByTestId("SearchNoResults")).toBeVisible();
  }

  async verifyCategories(){
    // Verify category names and listings for each should be 4 items

    const venueResults = this.page.getByTestId("CondensedVenueResultRoot");
    const productResults = this.page.getByTestId("ItemResultCardItemName");

    const venueHeading = this.page.getByRole('heading', { name: 'Restaurants and stores', level: 5 });
    const productHeading = this.page.getByRole('heading', { name: 'Food and products', level: 5 });

    await expect(venueResults.first()).toBeVisible();
    await expect(productResults.first()).toBeVisible();

    expect(await venueResults.count()).toBe(4);
    expect(await productResults.count()).toBe(4);

    await expect(venueHeading).toBeVisible();
    await expect(productHeading).toBeVisible();

  }

  async clickSeeAllVenue(){
    await this.page.getByTestId("SearchShowAllVenueResults").click();
  }

  async clickSeeAllProducts(){
    await this.page.getByTestId("SearchShowAllMenuItemResults").click();
  }
}