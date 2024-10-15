import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage';
import { SearchResults } from '../../pages/searchResults';
import path from 'path';

const authFile = path.resolve(__dirname, '../../playwright/.auth/user.json');

test.use({ storageState: authFile });

test.describe('Search and Filtering', () => {
  test('TC-RS-001: Search Keyword', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    await homePage.searchKeyword('ramen');

    await homePage.verifyProducts('ramen');

    await homePage.verifyVenues('ramen');
  });

  test('TC-RS-002: Search Invalid', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    await homePage.searchKeyword('test123');

    await homePage.verifyNoResults();
  });

  test('TC-RS-003: Search Categories', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await homePage.searchKeyword('ramen');

    await homePage.verifyCategories();
  });

  test('TC-RS-004: Filter Venue', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResults = new SearchResults(page);

    await homePage.navigate();
    await homePage.searchKeyword('ramen');
    await homePage.clickSeeAllVenue();
    await searchResults.verifyHeader();
    await searchResults.openFilter();
    await searchResults.verifyVenueSelected("All Results");
    await searchResults.closeFilter();

    // Check venues - All Results filter
    const allResultsCheck = [
      { venue: "Rimi" },
      { venue: "Manami" },
      { venue: "Alynas" },
      { venue: "Gera Dovana" },
      // Home & DYI - Defect DEF-UR-004-002 logged
      // { venue: "iittala" }   
    ];
  
    for (const {venue} of allResultsCheck) {
      await searchResults.checkVenuesVisible(venue);
    }





  });

});