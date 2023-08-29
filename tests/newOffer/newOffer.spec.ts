import { test, expect } from '@playwright/test';
import { LoginPage} from '../../POMs/loginPage'; 
import { LoginEnvironments } from '../../environments/loginEnvironments';
import { HomePage } from '../../POMs/homePage';
import { OfferModal } from '../../POMs/offerModal';
import { NewOfferEnvironments } from '../../environments/newOfferEnvironments';


test('Client has no projects',async ({page}) => {
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
    await offerModal.clientHasNoProjectsError();

    

});

test('Client has one project - disabled project field and continue button', async ({page}) =>{
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
    await offerModal.projectIsPreset(); 
    await offerModal.disabledContinueButton(); 

});

test('Client has one project - create offer', async ({page}) =>{
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
    await expect (offerModal.logo).toBeVisible();
    

});
test('Client has two projects - disabled continue button', async ({page}) =>{
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

test('Client has two projects - create offer', async ({page}) =>{
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
    await expect (offerModal.logo).toBeVisible();

});

test('Client has two projects - create offer - cancel creating offer', async ({page}) =>{
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



