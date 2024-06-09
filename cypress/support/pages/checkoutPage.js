// -Constants

// -Tests
class checkoutPage{
    typeName (name){
        cy.get("#FirstName").type(name);
    }
    typeLastName (lastName){
        cy.get("#lastName").type(lastName);
    }
    typeCard (card){
        cy.get("#cardNumber").type(card);
    }
    clickPurchase (){
        cy.get('[data-cy="purchase"]').click();
    }
}

// -Export
export default new checkoutPage()
