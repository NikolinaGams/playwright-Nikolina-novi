import { test, expect } from '@playwright/test';
import { LoginPage } from '../../POMs/loginPage';
import { LoginEnvironments } from '../../environments/loginEnvironments';
test('registration', async ({ page }) => {
   
  const loginPage = new LoginPage(page);
  const loginEnvironments = new LoginEnvironments(page);

  await page.goto(loginEnvironments.baseUrl);
  await loginPage.registerButton.isHidden();
  
   
  

  });

  