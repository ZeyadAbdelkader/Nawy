 import { test, expect } from '@playwright/test';
 import { HomePage } from '../pages/HomePage';


test('Sign Up Test', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.signUp('TESTTOO', '123456');
});


test('Login and Logout Test', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.logIn('ZEZOOOOO', '123456');
  await homePage.logOut();
});
test('Complete Purchase Test', async ({ page }) => {
  const homePage = new HomePage(page);

  const orderDetails = {
    name: 'Zeyad',
    country: 'Egypt',
    city: 'Cairo',
    creditCard: '123456789',
    month: 'March',
    year: '2024'
  };
  await homePage.navigate();
  await homePage.logIn('ZEZOOOOO', '123456');
  await homePage.selectMonitor();
  await homePage.addToCart();
  await homePage.placeOrder(orderDetails);
});

