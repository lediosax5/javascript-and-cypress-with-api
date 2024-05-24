// -Imports
//import { ProductsPage } from "./productsPage"
//import { ShoppingCartPage } from "./shoppingCardPage"

// -Constants

// -Tests
class onlineShopPage{
    shoppingCardBtn (){
        cy.get('[data-cy="goShoppingCart"]').click({force:true});
    }
}

// -Export
export default new onlineShopPage()
