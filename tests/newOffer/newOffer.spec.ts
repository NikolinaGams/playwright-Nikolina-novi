import { test, expect } from '@playwright/test';
import { LoginPage} from '../../POMs/loginPage'; 
import { LoginEnvironments } from '../../environments/loginEnvironments';
import { HomePage } from '../../POMs/homePage';
import { OfferModal } from '../../POMs/offerModal';
import { NewOfferEnvironments } from '../../environments/newOfferEnvironments';


test('Client with no project',async ({page}) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();

    const offerModal = new OfferModal (page);
    const newOfferEnvironments = new NewOfferEnvironments(page); 
    await offerModal.chooseClient(newOfferEnvironments.clientId0);
    await offerModal.clientHasNoOffers();

    

});

test('one project disabled project field', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    const newOfferEnvironments = new NewOfferEnvironments(page); 
    await offerModal.chooseClient(newOfferEnvironments.clientId1);
    await offerModal.disabledProjectField(); 

});

test('one project disabled continue button until language is choosen', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    const newOfferEnvironments = new NewOfferEnvironments(page); 
    await offerModal.chooseClient(newOfferEnvironments.clientId1);
    await offerModal.disabledContinueButton(); 

});

test('one project - create new offer', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    const newOfferEnvironments = new NewOfferEnvironments(page); 
    await offerModal.chooseClient(newOfferEnvironments.clientId1);
    await offerModal.chooseLanguage(newOfferEnvironments.germanLanguage);
    await offerModal.createNewOffer();
    

});
test('two-project-disabled-continue-button', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    const newOfferEnvironments = new NewOfferEnvironments(page); 
    await offerModal.chooseClient(newOfferEnvironments.clientId2);
    await offerModal.chooseProject(newOfferEnvironments.projectId1);
    await offerModal.disabledContinueButton();
});

test('two-project-create-offer', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    const newOfferEnvironments = new NewOfferEnvironments(page); 
    await offerModal.chooseClient(newOfferEnvironments.clientId2);
    await offerModal.chooseProject(newOfferEnvironments.projectId1);
    await offerModal.chooseLanguage(newOfferEnvironments.croatianLanguage);
    await offerModal.createNewOffer();

});

test('two-project-create-offer-cancel-button', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    const newOfferEnvironments = new NewOfferEnvironments(page); 
    await offerModal.chooseClient(newOfferEnvironments.clientId2);
    await offerModal.chooseProject(newOfferEnvironments.projectId1);
    await offerModal.chooseLanguage(newOfferEnvironments.croatianLanguage);
    await offerModal.cancelCreatingOffer();

});



