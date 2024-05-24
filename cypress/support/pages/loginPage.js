// -Constants
const cUser = '#user';
const cPass = '#pass';
const cLoginBtn = '#submitForm';

// -Tests
class loginPage{
    typeUser (user){
        cy.get(cUser)/*.should('have.attr', 'name', 'user')*/.type(user);
    }

    typePass (pass){
        cy.get(cPass)/*.should('have.attr', 'name', 'pass')*/.type(pass);
    }

    clickLoginBtn (){
        cy.get(cLoginBtn)/*.should('have.attr', 'type', 'submit')*/.click({force:true});
    }

    login (user, pass){
        cy.get(cUser)/*.should('have.attr', 'name', 'user')*/.type(user);
        cy.get(cPass)/*.should('have.attr', 'name', 'pass')*/.type(pass);
        cy.get(cLoginBtn)/*.should('have.attr', 'type', 'submit')*/.click({force:true});
    }
}

// -Export
export default new loginPage()
