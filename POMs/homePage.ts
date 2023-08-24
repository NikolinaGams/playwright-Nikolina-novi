import { expect, Locator, Page} from '@playwright/test';

export class HomePage {
readonly page: Page;
readonly homeUrl: Locator;
readonly clients: Locator;
readonly offers: Locator;
readonly invoices: Locator;
readonly settings: Locator;
readonly newOfferButton: Locator;

constructor(page: Page){
    this.page = page;
    this.homeUrl = page.getByRole('link', { name: 'Home'})
    this.clients = page.getByRole('link', { name: 'Clients' })
    this.offers = page.getByRole('link', { name: 'Offers' })
    this.invoices = page.getByRole('link', { name: 'Invoices' })
    this.settings = page.getByRole('link', { name: 'Settings' })
    this.newOfferButton = page.getByRole('button', { name: 'Create new offer' })
}

async goToSettings(){
    await this.settings.click()

}
async newOffer(){
    await this.newOfferButton.click();
}

}