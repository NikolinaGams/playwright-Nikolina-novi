import { test, expect } from '@playwright/test';
import { LoginPage } from '../POMs/loginPage';
import { LoginEnvironments } from '../environments/loginEnvironments';
import { SettingsPage } from '../POMs/settingsPage';


test('login - correct credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const loginEnvironments = new LoginEnvironments(page);


    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await page.waitForURL(loginEnvironments.homeUrl);
    
  });

  test('login - incorrect credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);
  
  
      await page.goto(loginEnvironments.baseUrl);
      await loginPage.login(loginEnvironments.invalidEmail, loginEnvironments.invalidPassword);
      (page.locator('div').getByText("Incorrect email or password").first()); 
      
    });
  
    
    test('show/hide password', async ({ page }) => {

      const loginPage = new LoginPage(page);
      const loginEnvironments = new LoginEnvironments(page);
    
    
        await page.goto(loginEnvironments.baseUrl);
        await loginPage.show(loginEnvironments.validEmail, loginEnvironments.validPassword);
        await (page.locator('form').getByText("cobeisfresh123").first()); 
         
       
        
      });
    