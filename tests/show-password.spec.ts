import { test, expect } from '@playwright/test';

test('show-password', async ({ page }) => {
    await page.goto('https://cobe-accounting.herokuapp.com/');
    await page.getByLabel("Email").fill('hello@cobeisfresh.com');
    await page.getByLabel("Password").fill('cobeisfresh123');
    await page.locator('form').getByRole('img').click();
    await (page.locator('form').getByText("cobeisfresh123").first());    

   
  
    
  });