// -Constants

// -Tests
class reciptPage{
    fullName (name, lastName){
        cy.contains(name + " " + lastName + " has succesfully purchased the following items:");
    }
    productName (quantity, product){
        cy.contains(quantity + " x " + product);
    }
    creditCard (card){
        cy.contains("The credit card used was:" + " " + card);
    }
    totalPrice (product1, product2){
        cy.contains("Monney spent $" + `${product1 + product2}`);
    }
}

// -Export
export default new reciptPage()
