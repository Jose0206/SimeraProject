// Import the class
import { faker } from '@faker-js/faker';
import { Login } from './PageObject/loginPage';
import { Home } from './PageObject/homePage';
import { Cart } from './PageObject/cartPage';
import { Checkout } from './PageObject/checkoutPage';
import { Overview } from './PageObject/overviewPage';
import { Inventory } from './PageObject/inventoryPage';
import { it } from 'mocha';


// Instantiate the class
const home = new Home();
const login = new Login();
const cart = new Cart();
const checkout = new Checkout();
const overview = new Overview();
const inventory = new Inventory();

// Define the test data
const name = faker.person.firstName();
const lastName = faker.person.lastName();
const productNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

describe('Simera Tests', () => {

  beforeEach(function() {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it('Login with invalid credentials', () => {
    login.login('invalid', 'invalid');
    login.errorMessage.should('be.visible');
  });

  it('Login with valid credentials', () => {
    login.login('standard_user', 'secret_sauce');
    cy.url().should('include', 'inventory.html');
  });

  it('Add products to the cart', () => {
    login.login('standard_user', 'secret_sauce');
    inventory.addToCartByNames(productNames);
    home.cartButton.should('be.visible');
    home.cartButton.click();
    cart.validateProductsInCart(productNames);
  });

  it('Remove products from the cart', () => {
    login.login('standard_user', 'secret_sauce');
    inventory.addToCartByNames(productNames);
    home.cartButton.should('be.visible');
    home.cartButton.click();
    cart.removeFromCartByNames(productNames);
    cart.validateProductsInCart([]);
  });

  it('Complete checkout with valid data', () => {
    login.login('standard_user', 'secret_sauce');
    inventory.addToCartByNames(productNames);
    home.cartButton.should('be.visible');
    home.cartButton.click();
    cart.checkoutButton.click();
    checkout.completeCheckout(name, lastName, '12345');
    overview.validateProductsInOverview(productNames);
    checkout.FinishButton.click();
    checkout.FinishTitle.should('be.visible');
  });

  it('Checkout without complete the form', () => {
    login.login('standard_user', 'secret_sauce');
    inventory.addToCartByNames(productNames);
    home.cartButton.should('be.visible');
    home.cartButton.click();
    cart.checkoutButton.click();
    checkout.ContinueButton.click();
    checkout.ErrorText.should('be.visible');
  });  

  it('Logout User', () => {
    login.login('standard_user', 'secret_sauce');
    home.navigateTo('Logout');
    login.userName.should('be.visible');
  });
});