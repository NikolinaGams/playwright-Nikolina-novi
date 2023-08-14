import { test, expect } from '@playwright/test';

test('login - incorrect credentials', async ({ page }) => {
    await page.goto('https://cobe-accounting.herokuapp.com/');
    await page.getByLabel("Email").fill('hello@cobeisfresh.com');
    await page.getByLabel("Password").fill('cobeisfresh');
    await page.getByRole('button', { name: 'Log In' }).click();
    await (page.locator('div').getByText("Incorrect email or password").first());    
  });