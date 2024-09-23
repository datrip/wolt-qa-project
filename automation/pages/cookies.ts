import { Page } from '@playwright/test';

export class Cookies {
readonly page: Page;

// Locators
readonly acceptButton;

constructor(page: Page) {
    this.page = page;
    
    this.acceptButton = page.getByTestId("allow-button");
    }

    
// Close popup
async closePopup(){
    await this.page.waitForTimeout(2000);

    if (await this.acceptButton.isVisible()) {
        await this.acceptButton.click();
        }


}


}