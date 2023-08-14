import { test, expect } from '@playwright/test'

test('logout', async ({ page }) => {

    await page.goto('https://cobe-accounting.herokuapp.com/');
    await page.getByLabel("Email").fill('hello@cobeisfresh.com');
    await page.locator('form').getByRole('img').click();
    await page.getByLabel("Password").fill('cobeisfresh123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForURL('https://cobe-accounting.herokuapp.com/home/Offers?page=1');
    await page.getByRole('link', { name: 'Settings' }).click();
    await page.waitForURL('https://cobe-accounting.herokuapp.com/settings-page');
    await page.getByText('Log out').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://cobe-accounting.herokuapp.com/');

    
  });
