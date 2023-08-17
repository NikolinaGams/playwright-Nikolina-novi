import { test, expect } from '@playwright/test';
import { LoginPage} from '../POMs/loginPage';
import { HomePage } from '../POMs/homePage';
import { LoginEnvironments } from '../environments/loginEnvironments';
import { SettingsPage } from '../POMs/settingsPage';

test('logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginEnvironments = new LoginEnvironments(page);

  await page.goto(loginEnvironments.baseUrl);
  await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
  await page.waitForURL(loginEnvironments.homeUrl);

  const homePage = new HomePage(page);
  await homePage.settings.click();

  const settingsPage = new SettingsPage (page);
  await settingsPage.logoutButton.click();
  await settingsPage.confirmButton.click();
  await page.waitForURL(loginEnvironments.baseUrl);


 });
