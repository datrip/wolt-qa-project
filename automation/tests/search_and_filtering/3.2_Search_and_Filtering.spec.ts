import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage';
import { SearchResults } from '../../pages/searchResults';
import path from 'path';
import { getCoordinatesAndCalculateDistances} from '../../pages/utils'; 

const authFile = path.resolve(__dirname, '../../playwright/.auth/user.json');

test.use({ storageState: authFile });

test.describe('Search and Filtering', () => {

  test('TC-RS-001: Search Keyword', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to the homepage
    await homePage.navigate();

    // Search for the keyword 'ramen'
    await homePage.searchKeyword('ramen');

    // Verify products related to 'ramen' are displayed
    await homePage.verifyProducts('ramen');

    // Verify venues related to 'ramen' are displayed
    await homePage.verifyVenues('ramen');
  });

  test('TC-RS-002: Search Invalid', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to the homepage
    await homePage.navigate();

    // Search for an invalid keyword 'test123'
    await homePage.searchKeyword('test123');

    // Verify that no results are displayed
    await homePage.verifyNoResults();
  });

  test('TC-RS-003: Search Categories', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to the homepage
    await homePage.navigate();

    // Search for the keyword 'ramen'
    await homePage.searchKeyword('ramen');

    // Verify that categories are displayed
    await homePage.verifyCategories();
  });

  test('TC-RS-004: Filter Venue', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResults = new SearchResults(page);
  
    await homePage.navigate();
    await homePage.searchKeyword('ramen');
    await homePage.clickSeeAllVenue();
    await searchResults.verifyHeader();
  
    const filtersToTest = [
      'All Results', 
      'Grocery', 
      'Restaurant', 
      'Alcohol', 
      'General Merchandise',
      // 'Home & DIY', // Commented out due to known defect DEF-RS-004-002
    ];
  
    for (const filter of filtersToTest) {
      await searchResults.openFilter();
      await searchResults.switchFilter(filter);
      await searchResults.applyFilter();
      await searchResults.verifyVenueSetup(filter);
    }
  });

  test('TC-RS-005: Filter Consistancy', async ({ page }) => {
    /*
    Placeholder for Filter Consistancy Automation
    */    

    });

  test('TC-RS-006: Filter Sorting', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResults = new SearchResults(page);
  
    // Search for keyword 'Ramen' and click 'See all" to view the search results
    await homePage.navigate();
    await homePage.searchKeyword('ramen');
    await homePage.clickSeeAllVenue();
    await searchResults.verifyHeader();

    //Placeholder to verify search results are sorted by "Recommended" - need to understand the logic on how that works


    // Verify sorting option "Distance"
    await searchResults.openFilter();
    await searchResults.switchFilter("Distance");
    await searchResults.verifyFilterSelected("Distance");
    await getCoordinatesAndCalculateDistances(searchResults);

    // Verify sorting option "Rating"
    await searchResults.openFilter();
    await searchResults.switchFilter("Rating");
    await searchResults.verifyFilterSelected("Rating");
    await searchResults.applyFilter();
    await expect(searchResults.verifyRatingSorting()).resolves.toBe(true);
    
    // Verify sorting option "Delivery price"
    await searchResults.openFilter();
    await searchResults.switchFilter("Delivery price");
    await searchResults.verifyFilterSelected("Delivery price");
    await searchResults.applyFilter();
    await expect(searchResults.verifyDeliveryPriceSorting()).resolves.toBe(true);

    // Verify sorting option "Delivery time"
    await searchResults.openFilter();
    await searchResults.switchFilter("Delivery time");
    await searchResults.verifyFilterSelected("Delivery time");
    await searchResults.applyFilter();
    await expect(searchResults.verifyDeliveryTimeSorting()).resolves.toBe(true);

    //Placeholder for "Food and products" implementation


    });
  
});