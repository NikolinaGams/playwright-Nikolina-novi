import { expect, Locator, Page} from '@playwright/test';
import { LoginEnvironments } from '../environments/loginEnvironments';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';


export class OfferModal {
readonly page: Page;
readonly clientField: Locator;
readonly projectField: Locator;
readonly languageField: Locator;
readonly noProjectsError: Locator;
readonly newOfferModal: Locator;
readonly oneProject: Locator;
readonly continueButton: Locator;
readonly cancelButton: Locator;
readonly logo: Locator;



constructor(page: Page){
    this.page = page;
    this.clientField = page.locator('.css-9uxpgx');
    this.projectField = page.locator('#react-select-2-placeholder');
    this.languageField = page.locator('#react-select-3-placeholder');
    this.noProjectsError = page.locator('div').filter({ hasText: /^Selected client is without a project, please create a project first\.$/ }).first()
    this.newOfferModal = page.getByText('Create New Offer');
    this.continueButton = page.getByRole('button', { name: 'Continue' })
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.logo = page.locator('path').first()
    
}

async openModal(){
    await this.newOfferModal.click();
}

async chooseClient(client: string){
    await this.page.waitForTimeout(300);
    await this.clientField.click();
    await this.page.getByText(client, {exact: true}).click();
}

async clientHasNoOffers(){
    await expect(this.noProjectsError).toBeVisible();
}
async disabledProjectField(){
    await expect(this.projectField).toBeHidden();    
}
async disabledContinueButton(){
    await expect(this.continueButton).toBeDisabled();    
}
async chooseProject(project: string){
    await this.page.waitForTimeout(300);
    await this.projectField.click();
    await this.page.getByText(project, {exact: true}).click();
     
}
async chooseLanguage(language: string){
    await this.page.waitForTimeout(300);
    await this.languageField.click();
    await this.page.getByText(language, {exact: true}).click();
}
async createNewOffer(){
    await this.continueButton.click();
    await this.newOfferModal.getByText('Create New Offer');

}
async cancelCreatingOffer(){
    await this.cancelButton.click();
    await expect (this.logo).toBeVisible();
}
}
