import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://cobe-accounting.herokuapp.com/');
  await expect(page).toHaveTitle("cobe-accounting");
});

test('login', async ({ page }) => {
    await page.goto('https://cobe-accounting.herokuapp.com/');
    await page.getByLabel("Email").fill('hello@cobeisfresh.com');
    await page.locator('form').getByRole('img').click();
    await page.getByLabel("Password").fill('cobeisfresh123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForURL('https://cobe-accounting.herokuapp.com/home/Offers?page=1');
    
  });



