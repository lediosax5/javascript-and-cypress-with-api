// -Constants

// -Tests
class productsPage{
    closeModal (){
        cy.get('[data-cy="closeModal"]').click({force:true});
    }

    addProduct (product){
        cy.get(product).click({force:true});
    }
}

// -Export
export default new productsPage()
