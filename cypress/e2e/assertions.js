// -Imports
[]

// -Constants
const consts = require('../support/consts');

// -Tests
describe('Assertions', () => {
    let data;
    before('Before', () => {
        cy.fixture('dataFixture').then(datos => {
            data = datos;
        });
    });
    beforeEach('BeforeEach', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(Cypress.env().user);
        cy.get('#pass').type(Cypress.env().pass);
        cy.get('#submitForm').click({force:true});
        cy.get('#waitslink').click();
    });
    it('Assertion using should', () => {
        cy.get('#title').should('have.text', consts.WAITS.TITLE);
    });
    it('Assertion using expect', () => {
        cy.get('#title').invoke('text').then(text => {
            expect(text).to.be.equal(consts.WAITS.TITLE);
        });
    });
    it('Assertion using assert', () => {
        cy.get('#title').invoke('text').then(text => {
            assert.equal(text, consts.WAITS.TITLE);
        });
    });
    it('Validate the use of length using the should method', () => {
        cy.get('#title').should('have.length', 1); // number of web parts
        cy.get('#title').invoke('text').should('have.length', 5); // number of characters
    });
    it('Validate css color using should', () => {
        cy.get('#title').should('have.css', 'color', consts.WAITS.COLOR);
        cy.get('#title').invoke('css', 'color').should('be.equal', consts.WAITS.COLOR);
    });
    it('Validate css color using expect', () => {
        cy.get('#title').invoke('css', 'color').then(color => {
            expect(color).to.be.equal(consts.WAITS.COLOR);
        });
    });
});
