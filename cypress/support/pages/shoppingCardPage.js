// -Constants
const cTotalPriceBtn = '.css-n1d5pa > .chakra-button';
const cTotalPrice = '#price > b';

// -Tests
class shoppingCardPage{
    productQuantity (product, quantity){
        cy.contains(product).siblings().eq(0).should('have.text', quantity);
    }

    productName (product){
        cy.contains(product);
    }

    productUnitPrice (product, unitPrice){
        cy.contains(product).siblings().eq(1).should('have.text', '$' + unitPrice);
    }

    productTotalPrice (product, totalPrice){
        cy.contains(product).siblings().eq(2).should('have.text', '$' + totalPrice);
    }

    clickTotalPriceBtn (){
        cy.get(cTotalPriceBtn).click();
    }

    totalPrice(product1, product2) {
        cy.get(cTotalPrice).should('contain', product1 + product2);
    }
}

// -Export
export default new shoppingCardPage()
