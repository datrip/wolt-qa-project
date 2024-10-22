import { Page, expect } from '@playwright/test';
import { HomePage } from './homepage'; 
import { Login } from './login';
import { Inbox } from './inbox';
import { SearchResults } from './searchResults';

export async function loginToApplication(page: Page): Promise<void> {
  const homePage = new HomePage(page);
  const login = new Login(page, true);
  const inbox = new Inbox(page, true);

  await homePage.navigate();
  await homePage.closePopup();
  await homePage.openRegistrationModal();
  await login.validateTitles();
  await login.submitEmail();
  await inbox.navigateToInbox();
  await inbox.loginInbox();
  await inbox.verifyLoginEmail();

  await inbox.openLoginLink();
  
  const homePageAfterLogin = new HomePage(page);
  await homePageAfterLogin.verifyLoggedIn();

  await page.goto('https://wolt.com/en/discovery');
}

export function calculateDistance(coord1: { latitude: number; longitude: number }, coord2: { latitude: number; longitude: number }): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(coord2.latitude - coord1.latitude);
  const dLon = deg2rad(coord2.longitude - coord1.longitude);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(coord1.latitude)) * Math.cos(deg2rad(coord2.latitude)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180);
}

export async function getCoordinatesAndCalculateDistances(searchResults: SearchResults): Promise<void> {
  // Create a single action promise for both methods to use
  const applyFilterAction = searchResults.applyFilter();

  // Get venue coordinates and user coordinates concurrently
  const [venueInfo, userCoordinates] = await Promise.all([
    searchResults.getVenueCoordinates(applyFilterAction),
    searchResults.getUserCoordinates(applyFilterAction)
  ]);

  if (venueInfo.first && venueInfo.last && userCoordinates) {
    const distanceToFirst = calculateDistance(userCoordinates, venueInfo.first);
    const distanceToLast = calculateDistance(userCoordinates, venueInfo.last);

    console.log(`User Coordinates - Latitude: ${userCoordinates.latitude}, Longitude: ${userCoordinates.longitude}`);
    console.log(`Distance to first venue (${venueInfo.first.name}): ${distanceToFirst.toFixed(2)} km`);
    console.log(`Distance to last venue (${venueInfo.last.name}): ${distanceToLast.toFixed(2)} km`);

    expect(distanceToFirst).toBeLessThan(distanceToLast);
  } else {
    console.log('Unable to calculate distances due to missing coordinates');
  }
}