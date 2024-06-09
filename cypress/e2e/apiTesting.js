// -Imports
import onlineShopPage from "../support/pages/onlineShopPage";
import productsPage from "../support/pages/productsPage";
import shoppingCardPage from "../support/pages/shoppingCardPage";
import checkoutPage from "../support/pages/checkoutPage";
import reciptPage from "../support/pages/reciptPage";

// -Tests
describe('Register, login and delete user', () => {
    const url = 'https://pushing-it.onrender.com';
    //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTcyMzI4MDd9.xZrphbVVqaUuca8Hh24J_KZU4tmJfA2Y_gEVVn9A0MY"

    it('test', () => {
        cy.request({
            method: 'POST',
            url: `${url}/api/register`,
            //headers: { 'autorization': `Bearer ${token}`, },
            body: {
                username : "guido01",
                password: "pass123!",
                gender: "male",
                day: "5",
                month: "May",
                year: "1980",
            }
        }).then(response => {
            cy.log(response)
            expect(response.status).to.be.equal(201);
            expect(response.body.newUser.username).to.be.equal("guido01");
        });
        cy.request({
            method: 'POST',
            url: `${url}/api/login`,
            //headers: { 'autorization': `Bearer ${token}`, },
            body: {
                username : "guido01",
                password: "pass123!",
            }
        }).then(response => {
            cy.log(response)
            expect(response.status).to.be.equal(201);
            expect(response.body.user.username).to.be.equal("guido01");
        });
        cy.request({
            method: 'DELETE',
            url: `${url}/api/deleteuser/guido01/`,
            //headers: { 'autorization': `Bearer ${token}`, },
        }).then(response => {
            cy.log(response)
            expect(response.status).to.be.equal(202);
            expect(response.body.user.username).to.be.equal("guido01");
        });
    });
});

describe('Register, login, purchases and validations', () => {
    const url = 'https://pushing-it.onrender.com';
    let token;
    let stock;
    let card;

    before('Taking products and card fixture data', () => {
        cy.fixture('dataFixture').then(datos => {
            stock = datos;
        });
        cy.fixture('dataCard').then(datos => {
            card = datos;
        });
    });

    it('only one test', () => {
        cy.request({
            method: 'POST',
            url: `${url}/api/register`,
            body: {
                username : "guido01",
                password: "pass123!",
                gender: "male",
                day: "5",
                month: "May",
                year: "1980",
            }
        });
        cy.request({
            method: 'POST',
            url: `${url}/api/login`,
            body: {
                username : "guido01",
                password: "pass123!",
            }
        }).then(response => {
            cy.log(response);
            token = response.body.token;
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("user", response.body.user.username);
            window.localStorage.setItem("userId", response.body.user._id);
        });
        cy.visit("");
        cy.get('[data-cy="onlineshoplink"]').click();
        productsPage.addProduct(stock.products.firstProduct.name);
        productsPage.closeModal();
        productsPage.addProduct(stock.products.firstProduct.name);
        productsPage.closeModal();
        productsPage.addProduct(stock.products.secondProduct.name);
        productsPage.closeModal();
        onlineShopPage.shoppingCardBtn();
        shoppingCardPage.productName(stock.products.firstProduct.name);
        shoppingCardPage.productQuantity(stock.products.firstProduct.name, stock.products.firstProduct.quantity);
        shoppingCardPage.productUnitPrice(stock.products.firstProduct.name, stock.products.firstProduct.unitPrice);
        shoppingCardPage.productTotalPrice(stock.products.firstProduct.name, stock.products.firstProduct.totalPrice);
        shoppingCardPage.productName(stock.products.secondProduct.name);
        shoppingCardPage.productQuantity(stock.products.secondProduct.name, stock.products.secondProduct.quantity);
        shoppingCardPage.productUnitPrice(stock.products.secondProduct.name, stock.products.secondProduct.unitPrice);
        shoppingCardPage.productTotalPrice(stock.products.secondProduct.name, stock.products.secondProduct.totalPrice);
        shoppingCardPage.clickTotalPriceBtn();
        shoppingCardPage.totalPrice(stock.products.firstProduct.totalPrice, stock.products.secondProduct.totalPrice);
        shoppingCardPage.clickSummaryBtn();
        shoppingCardPage.clickCheckoutBtn();
        checkoutPage.typeName(card.credentials.name);
        checkoutPage.typeLastName(card.credentials.lastName);
        checkoutPage.typeCard(card.credentials.cardNumber);
        checkoutPage.clickPurchase();
        reciptPage.fullName(card.credentials.name, card.credentials.lastName);
        reciptPage.productName(stock.products.firstProduct.quantity, stock.products.firstProduct.name);
        reciptPage.productName(stock.products.secondProduct.quantity, stock.products.secondProduct.name);
        reciptPage.creditCard(card.credentials.cardNumber);
        reciptPage.totalPrice(stock.products.firstProduct.totalPrice, stock.products.secondProduct.totalPrice);
        cy.wait(1000);
    });
    after("delete user", () => {
        cy.request({
            method: 'DELETE',
            url: `${url}/api/deleteuser/guido01/`,
            headers: { 'autorization': `Bearer ${token}`, },
        }).then(response => {
            cy.log(response)
            expect(response.status).to.be.equal(202);
            expect(response.body.user.username).to.be.equal("guido01");
        });
    });
});
