// -Imports
import headerPage from "../support/pages/headerPage";
import loginPage from "../support/pages/loginPage";
import onlineShopPage from "../support/pages/onlineShopPage";
import productsPage from "../support/pages/productsPage";
import shoppingCardPage from "../support/pages/shoppingCardPage";

// -Constants

// -Tests
describe('Add, check and calculate products in the cart', () => {
    let data;
    before('Taking fixture data', () => {
        cy.fixture('dataFixture').then(datos => {
            data = datos;
        });
    });
    // Dynamic validations taking the test from pages and the values from cypress.config
    beforeEach('Login with dynamic user validation', () => {
        cy.visit('');
        cy.xpath('//span[@id="registertoggle"]').dblclick();
        loginPage.login(Cypress.env().user, Cypress.env().pass);
        headerPage.verifyUser(Cypress.env().user);
    });
    // Validations according to the name of the product
    it('Adding products, validate all their values and the sum of them', () => {
        cy.xpath("//a[@id='onlineshoplink']").click();
        productsPage.addProduct(data.products.firstProduct.name);
        productsPage.closeModal();
        productsPage.addProduct(data.products.firstProduct.name);
        productsPage.closeModal();
        productsPage.addProduct(data.products.secondProduct.name);
        productsPage.closeModal();
        onlineShopPage.shoppingCardBtn();
        shoppingCardPage.productName(data.products.firstProduct.name);
        shoppingCardPage.productQuantity(data.products.firstProduct.name, data.products.firstProduct.quantity);
        shoppingCardPage.productUnitPrice(data.products.firstProduct.name, data.products.firstProduct.unitPrice);
        shoppingCardPage.productTotalPrice(data.products.firstProduct.name, data.products.firstProduct.totalPrice);
        shoppingCardPage.productName(data.products.secondProduct.name);
        shoppingCardPage.productQuantity(data.products.secondProduct.name, data.products.secondProduct.quantity);
        shoppingCardPage.productUnitPrice(data.products.secondProduct.name, data.products.secondProduct.unitPrice);
        shoppingCardPage.productTotalPrice(data.products.secondProduct.name, data.products.secondProduct.totalPrice);
        shoppingCardPage.clickTotalPriceBtn();
        shoppingCardPage.totalPrice(data.products.firstProduct.totalPrice, data.products.secondProduct.totalPrice);
    });
});
