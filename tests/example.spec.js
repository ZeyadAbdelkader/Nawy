// @ts-check
// const { test, expect } = require('@playwright/test');

// test('SignUp', async ({ page }) => {
//   await page.goto('https://www.demoblaze.com/');
//   await page.getByRole('link', { name: 'Sign up' }).click();
//   await page.getByLabel('Username:').click();
//   await page.getByLabel('Username:').fill('ZEZOOO');
//   await page.getByLabel('Password:').click();
//   await page.getByLabel('Password:').fill('123456');
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Sign up' }).click();
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
