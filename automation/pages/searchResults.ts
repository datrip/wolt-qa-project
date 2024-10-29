import { expect, Page } from "@playwright/test";
import { config } from "dotenv";

config();

export class SearchResults {
  readonly page: Page;
  filterButton;
  applyFilterButton;
  responsePromises: Map<string, Promise<Response>> = new Map();
  nonDeliveringVenues: string[] = [];
  nonWoltPlusVenues: string[] = [];

  constructor(page: Page) {
    this.page = page;
    this.filterButton = this.page.getByTestId("sorting.button");
    this.applyFilterButton = this.page.getByTestId("filterModal.button");
  }

  async verifyHeader() {
    await expect(this.page.getByTestId("DiscoveryPageTitle")).toBeVisible();
  }
  async openFilter() {
    await this.filterButton.click();
  }

  async verifyFilterSelected(FilterName: string) {
    // Verify filter we are interested in is selected (visual difference)

    const filter = this.page
      .getByTestId("filterAndSortModal.content")
      .getByText(new RegExp(`^${FilterName}$`, `i`));

    await expect(filter).toHaveCSS("border-bottom-color", "rgb(0, 157, 224)");
  }

  async verifyCategorySelected(FilterName: string) {
    // Verify category we are interested in is selected (visual difference)

    const filter = this.page
      .getByTestId("filterAndSortModal.content")
      .getByText(new RegExp(`^${FilterName}$`, `i`));

    await expect(filter).toHaveCSS("background-color", "rgb(31, 169, 228)");
  }

  async applyFilter(): Promise<void> {
    await this.applyFilterButton.click();
    // Wait for the results to update
    // await this.page.waitForLoadState('networkidle');
  }

  async checkVenuesVisible(venueName: string) {
    // Verify venue name is visible in the search results

    const venue = this.page.getByText(venueName);

    await expect(venue.first()).toBeVisible();
  }

  async checkVenuesNotVisible(venueName: string) {
    // Verify venue name is NOT visible in the search results

    const venue = this.page.getByText(venueName);

    await expect(venue.first()).toBeHidden();
  }

  async switchFilter(filterName: string) {
    // Can select: venue, sorting and category filters

    const filterLabel = this.page
      .getByTestId("filterAndSortModal.content")
      .getByText(new RegExp(`^${filterName}$`, `i`));

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
      "All Results": {
        visibleVenues: ["Rimi", "Manami", "Alynas", "Gera Dovana"],
        hiddenVenues: [],
      },
      Grocery: {
        visibleVenues: ["Rimi"],
        hiddenVenues: ["Manami", "Alynas", "Gera Dovana"],
      },
      Restaurant: {
        visibleVenues: ["Manami"],
        hiddenVenues: ["Rimi", "Alynas", "Gera Dovana"],
      },
      Alcohol: {
        visibleVenues: ["Alynas"],
        hiddenVenues: ["Rimi", "Manami", "Gera Dovana"],
      },
      "General Merchandise": {
        visibleVenues: ["Gera Dovana"],
        hiddenVenues: ["Rimi", "Manami", "Alynas"],
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

  async openFirstResult() {
    const venue = this.page
      .getByTestId("VenueVerticalListGrid")
      .getByTestId(/^venueCard/);

    await venue.first().click();
  }

  async getVenueCoordinates(actionPromise: Promise<void>): Promise<{
    first: { name: string; latitude: number; longitude: number } | null;
    last: { name: string; latitude: number; longitude: number } | null;
  }> {
    try {
      const responsePromise = this.page.waitForResponse(
        (response) =>
          response.url().includes("restaurant-api.wolt.com/v1/pages/search"),
        { timeout: 30000 }
      );

      await actionPromise;
      const response = await responsePromise;
      const body = await response.json();

      const venues = body.sections
        ?.flatMap((section) => section.items)
        .filter(
          (item) =>
            item.venue &&
            item.venue.delivers !== false &&
            item.venue.online === true
        );

      const firstVenue = venues[0]?.venue;
      const lastVenue = venues[venues.length - 1]?.venue;

      return {
        first:
          firstVenue && firstVenue.location
            ? {
                name: firstVenue.name,
                latitude: firstVenue.location[1],
                longitude: firstVenue.location[0],
              }
            : null,
        last:
          lastVenue && lastVenue.location
            ? {
                name: lastVenue.name,
                latitude: lastVenue.location[1],
                longitude: lastVenue.location[0],
              }
            : null,
      };
    } catch (error) {
      console.error("Error in getVenueCoordinates:", error);
      return { first: null, last: null };
    }
  }

  async getUserCoordinates(
    actionPromise: Promise<void>
  ): Promise<{ latitude: number; longitude: number } | null> {
    try {
      const responsePromise = this.page.waitForResponse(
        (response) =>
          response.url().includes("restaurant-api.wolt.com/v1/pages/search"),
        { timeout: 60000 }
      );

      await actionPromise;
      const response = await responsePromise;
      const request = response.request();

      const postData = request.postData();
      if (postData) {
        const data = JSON.parse(postData);
        const lat = data["lat"];
        const lon = data["lon"];
        if (typeof lat === "number" && typeof lon === "number") {
          return { latitude: lat, longitude: lon };
        }
      }

      console.log("User coordinates not found in request");
      return null;
    } catch (error) {
      console.error("Error in getUserCoordinates:", error);
      return null;
    }
  }

  async verifyRatingSorting(): Promise<boolean> {
    const venueCards = await this.page.$$('[data-test-id^="venueCard."]');
    const ratings: number[] = [];

    for (const card of venueCards) {
      const ariaLabel = await card.getAttribute("aria-label");
      if (ariaLabel) {
        const ratingMatch = ariaLabel.match(/Rating:\s*([^,]+)/);
        if (ratingMatch) {
          const ratingText = ratingMatch[1].trim();
          const ratingValue = this.getRatingValue(ratingText);
          ratings.push(ratingValue);
        }
      }
    }

    // Check if ratings are in descending order
    for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
        console.log(`Sorting error: ${ratings[i]} > ${ratings[i - 1]}`);
        return false;
      }
    }

    return true;
  }

  private getRatingValue(ratingText: string): number {
    switch (ratingText.toLowerCase()) {
      case "amazing":
        return 5;
      case "excellent":
        return 4;
      case "very good":
        return 3;
      case "good":
        return 2;
      case "okay":
        return 1;
      default:
        return 0;
    }
  }

  async verifyDeliveryPriceSorting(): Promise<boolean> {
    const venueCards = await this.page.$$('[data-test-id^="venueCard."]');
    const deliveryPrices: number[] = [];

    for (const card of venueCards) {
      const ariaLabel = await card.getAttribute("aria-label");
      if (ariaLabel) {
        const deliveryPriceMatch = ariaLabel.match(
          /Delivery fee:\s*€(\d+\.?\d*)/
        );
        if (deliveryPriceMatch) {
          const deliveryPrice = parseFloat(deliveryPriceMatch[1]);
          deliveryPrices.push(deliveryPrice);
        }
      }
    }

    // Check if delivery prices are in ascending order
    for (let i = 1; i < deliveryPrices.length; i++) {
      if (deliveryPrices[i] < deliveryPrices[i - 1]) {
        console.log(
          `Sorting error: ${deliveryPrices[i]} < ${deliveryPrices[i - 1]}`
        );
        return false;
      }
    }

    return true;
  }

  async verifyDeliveryTimeSorting(): Promise<boolean> {
    const venueCards = await this.page.$$('[data-test-id^="venueCard."]');
    const deliveryTimes: number[] = [];

    for (const card of venueCards) {
      const timeElement = await card.$(".b126jdn6");
      if (timeElement) {
        const timeText = await timeElement.textContent();
        if (timeText) {
          const [minTime, maxTime] = timeText
            .split("-")
            .map((t) => parseInt(t, 10));
          // Use the average of min and max time for sorting
          const averageTime = (minTime + maxTime) / 2;
          deliveryTimes.push(averageTime);
        }
      }
    }

    // Check if delivery times are in ascending order
    for (let i = 1; i < deliveryTimes.length; i++) {
      if (deliveryTimes[i] < deliveryTimes[i - 1]) {
        console.log(
          `Sorting error: ${deliveryTimes[i]} < ${deliveryTimes[i - 1]}`
        );
        return false;
      }
    }

    return true;
  }

  async identifyNonDeliveringVenues() {
    await this.loadAllVenues();

    const venueContainers = await this.page.$$('[data-variant="dense"]');

    for (const container of venueContainers) {
      const venueNameHandle = await container.$("h3");
      let venueName = "";
      if (venueNameHandle) {
        venueName = (
          await (await venueNameHandle.getProperty("textContent")).jsonValue()
        ).trim();
      }

      const statusText = await container.evaluate((element) => {
        const statusPhrases = [
          "Closed",
          "Temporarily offline",
          "Not delivering to your location",
        ];
        const iterator = document.createNodeIterator(
          element,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: function (node) {
              const text = node?.textContent?.trim() || "";
              if (statusPhrases.includes(text)) {
                return NodeFilter.FILTER_ACCEPT;
              }
              return NodeFilter.FILTER_REJECT;
            },
          }
        );
        const node = iterator.nextNode();
        // @ts-ignore
        return node ? node.textContent.trim() : null;
      });

      if (statusText) {
        this.nonDeliveringVenues.push(venueName);
      }
    }

    console.log(
      `\nTotal non-delivering venues found: ${this.nonDeliveringVenues.length}`
    );
    console.log("Non-delivering venues:", this.nonDeliveringVenues);

    if (this.nonDeliveringVenues.length === 0) {
      throw new Error(
        "No non-delivering venues found. At least one non-delivering venue should be present."
      );
    }
  }

  private async loadAllVenues(): Promise<void> {
    let previousHeight = 0;
    let currentHeight = (await this.page.evaluate(
      "document.documentElement.scrollHeight"
    )) as number;

    while (previousHeight !== currentHeight) {
      await this.page.evaluate(
        "window.scrollTo(0, document.documentElement.scrollHeight)"
      );
      await this.page.waitForTimeout(1000);

      previousHeight = currentHeight;
      currentHeight = (await this.page.evaluate(
        "document.documentElement.scrollHeight"
      )) as number;
    }

    await this.page.evaluate("window.scrollTo(0, 0)");
    await this.page.waitForTimeout(500);
  }
  async verifyNonDeliveringVenuesHidden(): Promise<boolean> {
    await this.loadAllVenues();

    for (const venueName of this.nonDeliveringVenues) {
      const venueElement = await this.page.$(`h3:text-is("${venueName}")`);
      if (venueElement) {
        const venueText = await venueElement.textContent();
        if (venueText === venueName) {
          console.log(`Non-delivering venue still visible: ${venueName}`);
          return false;
        }
      }
    }
    return true;
  }

  async verifyNonDeliveringVenuesDisplayed(): Promise<boolean> {
    await this.loadAllVenues();

    for (const venueName of this.nonDeliveringVenues) {
      const venueElement = await this.page.$(`h3:text-is("${venueName}")`);
      if (!venueElement) {
        console.log(`Non-delivering venue not found: ${venueName}`);
        return false;
      }
    }
    return true;
  }

  async toggleDeliversNow() {
    const deliverNowLabel = this.page.getByRole("heading", {
      name: "Delivers to you now",
    });

    await deliverNowLabel.click();
  }

  async toggleWoltPlus() {
    const deliverNowLabel = this.page.getByRole("heading", {
      name: "Only show Wolt+ venues",
    });

    await deliverNowLabel.click();
  }

  async identifyNonWoltPlusVenues() {
    await this.loadAllVenues();

    const venueCards = await this.page.$$('[data-test-id^="venueCard."]');
    this.nonWoltPlusVenues = []; 

    for (const card of venueCards) {
      const h3Element = await card.$("h3");
      let venueName = "";
      let isWoltPlus = false;

      if (h3Element) {
        const nameText = await h3Element.textContent();
        venueName = nameText ? nameText.trim() : "";

        // Get the 'aria-label' from the h3 element
        const h3AriaLabel = (await h3Element.getAttribute("aria-label")) || "";
        isWoltPlus = h3AriaLabel.includes("Wolt Plus venue");
      }

      // If the venue is not Wolt+, add it to the list
      if (!isWoltPlus && venueName) {
        this.nonWoltPlusVenues.push(venueName);
      }
    }

    if (this.nonWoltPlusVenues.length === 0) {
      throw new Error(
        "No non-Wolt+ venues found. At least one non-Wolt+ venue should be present."
      );
    }

    console.log(
      `\nTotal non-Wolt+ venues found: ${this.nonWoltPlusVenues.length}`
    );
    console.log("Non-Wolt+ venues:", this.nonWoltPlusVenues);
  }

  async verifyNonWoltPlusVenuesDisplayed(): Promise<boolean> {
    await this.loadAllVenues();

    for (const venueName of this.nonWoltPlusVenues) {
      const venueElement = await this.page.$(`h3:text-is("${venueName}")`);
      if (!venueElement) {
        console.log(`Non-Wolt+ venue not found: ${venueName}`);
        return false;
      }
    }
    return true;
  }

  async verifyNonWoltPlusVenuesHidden(): Promise<boolean> {
    await this.loadAllVenues();

    for (const venueName of this.nonWoltPlusVenues) {
      const venueElement = await this.page.$(`h3:text-is("${venueName}")`);
      if (venueElement) {
        console.log(`Non-Wolt+ venue still visible: ${venueName}`);
        return false;
      }
    }
    return true;
  }

  async verifyVenueCards() {
    const venueCards = await this.page.$$('[data-test-id^="venueCard."]');

    for (const card of venueCards) {
      
    }
  }
}
