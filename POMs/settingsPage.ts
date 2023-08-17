import { expect, Locator, Page } from '@playwright/test';

export class SettingsPage {
readonly page: Page;
readonly homeUrl: Locator;
readonly clientsUrl: Locator;
readonly offersUrl: Locator;
readonly invoicesUrl: Locator;
readonly settingsUrl: Locator;
readonly logoutButton: Locator;
readonly confirmButton: Locator;

constructor(page: Page) {
    this.page = page; 
    this.homeUrl = page.getByRole('link', { name: 'Home' });
        this.clientsUrl = page.getByRole('link', { name: 'Clients' });
        this.offersUrl = page.getByRole('link', { name: 'Offers' });
        this.invoicesUrl = page.getByRole('link', { name: 'Invoices' });
        this.logoutButton = page.getByText('Log out');
        this.confirmButton = page.getByRole('button', { name: 'Confirm' })
}

async logout() {
    await this.logoutButton.click();
    await this.confirmButton.click();
}

}