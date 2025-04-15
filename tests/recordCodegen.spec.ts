import { test, expect } from '@playwright/test';

test('Record Codegen', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page.getByRole('button', { name: ' My account' })).toBeVisible();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('pravinagale500@gmail.com');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Lambdatest@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: ' Edit your account' })).toBeVisible();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('PRAVIN');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
  await expect(page.getByRole('link', { name: 'Logout', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  await page.getByRole('heading', { name: ' Account Logout' }).click();
});