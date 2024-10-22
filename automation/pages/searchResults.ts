import { expect, Page } from '@playwright/test';
import { config } from 'dotenv';

config();

export class SearchResults {
  readonly page: Page;
    filterButton;
    applyFilterButton;
    responsePromises: Map<string, Promise<Response>> = new Map();

  constructor(page: Page) {
        this.page = page;
        this.filterButton = this.page.getByTestId("sorting.button");
        this.applyFilterButton = this.page.getByTestId("filterModal.button");
  }

  async verifyHeader(){
    await expect(this.page.getByTestId("DiscoveryPageTitle")).toBeVisible();

  }
  async openFilter(){
    await this.filterButton.click();
  }

  async verifyFilterSelected(FilterName: string){
    // Verify filter we are interested in is selected (visual difference)

    const filter = this.page.getByTestId("filterAndSortModal.content").getByText(new RegExp(`^${FilterName}$`, `i`));

    await expect(filter).toHaveCSS('border-bottom-color', 'rgb(0, 157, 224)');
  }

  async verifyCategorySelected(FilterName: string){
    // Verify category we are interested in is selected (visual difference)

    const filter = this.page.getByTestId("filterAndSortModal.content").getByText(new RegExp(`^${FilterName}$`, `i`));

    await expect(filter).toHaveCSS('background-color', 'rgb(31, 169, 228)');
  }

async applyFilter(): Promise<void> {
  await this.applyFilterButton.click();
  // Wait for the results to update
  await this.page.waitForLoadState('networkidle');
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


  async switchFilter(filterName: string){
    // Can select: venue, sorting and category filters

    const filterLabel = this.page.getByTestId("filterAndSortModal.content").getByText(new RegExp(`^${filterName}$`, `i`));
  
    await filterLabel.click();
  }

  async verifyVenueSetup(venue: string) {
    type VenueSetup = {
      visibleVenues: string[];
      hiddenVenues: string[];
    };

    type VenueSetups = {
      [key: string]: VenueSetup;
    };

    const venueSetup: VenueSetups = {
      'All Results': {
        visibleVenues: ['Rimi', 'Manami', 'Alynas', 'Gera Dovana'],
        hiddenVenues: [],
      },
      'Grocery': {
        visibleVenues: ['Rimi'],
        hiddenVenues: ['Manami', 'Alynas', 'Gera Dovana'],
      },
      'Restaurant': {
        visibleVenues: ['Manami'],
        hiddenVenues: ['Rimi', 'Alynas', 'Gera Dovana'],
      },
      'Alcohol': {
        visibleVenues: ['Alynas'],
        hiddenVenues: ['Rimi', 'Manami', 'Gera Dovana'],
      },
      'General Merchandise': {
        visibleVenues: ['Gera Dovana'],
        hiddenVenues: ['Rimi', 'Manami', 'Alynas'],
      },
      // Commented out due to known defect DEF-RS-004-002
      // 'Home & DIY': {
      //   visibleVenues: ['iittala'],
      //   hiddenVenues: ['Rimi', 'Manami', 'Alynas', 'Gera Dovana'],
      // },
    };

    const setup = venueSetup[venue];
    if (!setup) {
      throw new Error(`Venue setup for "${venue}" is not defined.`);
    }

    // Verify expected venues are visible
    for (const venueName of setup.visibleVenues) {
      await this.checkVenuesVisible(venueName);
    }

    // Verify other venues are not visible
    for (const venueName of setup.hiddenVenues) {
      await this.checkVenuesNotVisible(venueName);
    }
  }

  async openFirstResult(){
    const venue = this.page.getByTestId("VenueVerticalListGrid").getByTestId(/^venueCard/);

    await venue.first().click();

  }

  async getVenueCoordinates(actionPromise: Promise<void>): Promise<{
    first: { name: string; latitude: number; longitude: number } | null,
    last: { name: string; latitude: number; longitude: number } | null
  }> {
    try {
      const responsePromise = this.page.waitForResponse(
        response => response.url().includes('restaurant-api.wolt.com/v1/pages/search'),
        { timeout: 30000 }
      );

      await actionPromise;
      const response = await responsePromise;
      const body = await response.json();

      const venues = body.sections
        ?.flatMap(section => section.items)
        .filter(item => item.venue && item.venue.delivers !== false && item.venue.online === true);

      const firstVenue = venues[0]?.venue;
      const lastVenue = venues[venues.length - 1]?.venue;

      return {
        first: firstVenue && firstVenue.location ? {
          name: firstVenue.name,
          latitude: firstVenue.location[1],
          longitude: firstVenue.location[0]
        } : null,
        last: lastVenue && lastVenue.location ? {
          name: lastVenue.name,
          latitude: lastVenue.location[1],
          longitude: lastVenue.location[0]
        } : null
      };
    } catch (error) {
      console.error('Error in getVenueCoordinates:', error);
      return { first: null, last: null };
    }
  }

  async getUserCoordinates(actionPromise: Promise<void>): Promise<{ latitude: number; longitude: number } | null> {
    try {
      const responsePromise = this.page.waitForResponse(
        response => response.url().includes('restaurant-api.wolt.com/v1/pages/search'),
        { timeout: 60000 }
      );
  
      await actionPromise;
      const response = await responsePromise;
      const request = response.request();
  
      const postData = request.postData();
      if (postData) {
        const data = JSON.parse(postData);
        const lat = data['lat'];
        const lon = data['lon'];
        if (typeof lat === 'number' && typeof lon === 'number') {
          return { latitude: lat, longitude: lon };
        }
      }
  
      console.log('User coordinates not found in request');
      return null;
    } catch (error) {
      console.error('Error in getUserCoordinates:', error);
      return null;
    }
  }
}