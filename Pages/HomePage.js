class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
      await this.page.goto('https://www.demoblaze.com/');
    }
  
    async signUp(username, password) {
      await this.page.getByRole('link', { name: 'Sign up' }).click();
      await this.page.getByLabel('Username:').fill(username);
      await this.page.getByLabel('Password:').fill(password);
      await this.page.getByRole('button', { name: 'Sign up' }).click();
      await this.page.once('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.dismiss().catch(() => {});
      });
    }
  
    async logIn(username, password) {
      await this.page.getByRole('link', { name: 'Log in' }).click();
      await this.page.locator('#loginusername').fill(username);
      await this.page.locator('#loginpassword').fill(password);
      await this.page.getByRole('button', { name: 'Log in' }).click();
    }
  
    async logOut() {
      await this.page.getByRole('link', { name: 'Log out' }).click();
    }
    async selectMonitor() {
      await this.page.getByRole('link', { name: 'Monitors' }).click();
      await this.page.getByRole('link', { name: 'Apple monitor' }).click();
    }
  
    async addToCart() {
      this.page.once('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.dismiss().catch(() => {});
      });
      await this.page.getByRole('link', { name: 'Add to cart' }).click();
    }
  
    async placeOrder(details) {
      await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
      await this.page.getByRole('button', { name: 'Place Order' }).click();
  
      
      await this.page.waitForSelector('#name');
      await this.page.locator('#name').fill(details.name);
      
      await this.page.waitForSelector('#country');
      await this.page.locator('#country').fill(details.country);
      
      await this.page.waitForSelector('#city');
      await this.page.locator('#city').fill(details.city);
      
      await this.page.waitForSelector('#card');
      await this.page.locator('#card').fill(details.creditCard);
      
      await this.page.waitForSelector('#month');
      await this.page.locator('#month').fill(details.month);
      
      await this.page.waitForSelector('#year');
      await this.page.locator('#year').fill(details.year);                  
  
      
      await this.page.getByRole('button', { name: 'Purchase' }).click();
      await this.page.getByRole('button', { name: 'OK' }).click();
    }
  }
  
  export default { HomePage };
  module.exports = {HomePage};