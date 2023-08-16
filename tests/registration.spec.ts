import { test, expect } from '@playwright/test';

test('registration', async ({ page }) => {
    await page.goto('https://cobe-accounting.herokuapp.com/');
    await expect(page.locator('Registration')).not.toBeVisible();
   
  

  });

  