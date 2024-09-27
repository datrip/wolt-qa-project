import { expect, Page, Locator } from '@playwright/test';  
import { config } from 'dotenv';

config();

export class RegisterForm {
    readonly page: Page;

    firstNameInput;
    lastNameInput;
    phoneNumberInput;

    constructor(page: Page){
        this.page = page;

        this.firstNameInput = page.getByTestId("CreateAccount.FirstName");
        this.lastNameInput = page.getByTestId("CreateAccount.LastName");
        this.phoneNumberInput = page.getByTestId("CreateAccount.PhoneNumber");
        
    }
 
    async inputInfo(){

        const firstName = process.env.FIRST_NAME || '';
        const lastName = process.env.LAST_NAME || '';
        const phoneNumber = process.env.PHONE_NUMBER || '';

        if (!firstName || lastName || ! phoneNumber) {
            throw new Error('Email is not defined in environment variables.');
        }

        this.firstNameInput.fill(firstName);
        this.lastNameInput.fill(lastName);
        this.phoneNumberInput.fill(phoneNumber);

    }
}