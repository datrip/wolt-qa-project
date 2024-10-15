import { expect, Page } from '@playwright/test';
import { config } from 'dotenv';

config();

export class SearchResults {
  readonly page: Page;
    filterButton;
    closeFilterButton;

  constructor(page: Page) {
        this.page = page;
        this.filterButton = this.page.getByTestId("sorting.button");
        this.closeFilterButton = this.page.getByTestId("modal-close-button");
  }

  async verifyHeader(){
    await expect(this.page.getByTestId("DiscoveryPageTitle")).toBeVisible();

  }
  async openFilter(){
    await this.filterButton.click();
  }

  async verifyVenueSelected(venueName: string){
    // Verify venue we are interested in is selected (visual difference)

    const venue = this.page.getByText(venueName);

    await expect(venue).toHaveCSS('border-bottom-color', 'rgb(0, 157, 224)');
  }

  async closeFilter(){
    await this.closeFilterButton.click();
  }

  async checkVenuesVisible(venueName: string){
    // Verify venue name is visible in the search results

    const venue = this.page.getByText(venueName);

    await expect(venue.first()).toBeVisible();

  }

  async checkVenuesNotVisible(venueName: string){
    // Verify venue name is NOT visible in the search results

    const venue = this.page.getByText(venueName);

    await expect(venue.first()).toBeHidden();

  }
}