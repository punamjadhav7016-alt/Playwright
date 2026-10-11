import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/upload');
  
  await page.getByTestId('file-input').setInputFiles('JavaScript Interview Questions and Answers (1).pdf');
  await page.getByTestId('file-submit').click();
});