// -Imports

// -Constants
//const register = " ";
const randomNumber = Math.floor(Math.random() * 10200);

// -Tests
describe("Positive register", function(){
    it.only("random user AC", function(){
        cy.visit(" ");
        cy.get('[data-cy="user"]').should('have.attr', 'name', 'user').click();
        cy.get('[data-cy="user"]').type("name" + randomNumber)
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("pass" + randomNumber + "#")
        cy.get("[value='Male']").check({force:true});
        cy.get('[data-cy="day"]').select(20);
        cy.get('[data-cy="month"]').select("May");
        cy.get('[data-cy="year"]').select("1990");
        cy.get('[data-cy="submitForm"]').should('have.attr', 'type', 'submit').click({force:true});
    });
})

describe("Negative register", function(){
    it("empty fields", function(){
        cy.visit(" ");

    });
})
describe("Positive login AC", function(){
    it.only("normal login", function(){
        cy.visit(" ");
        cy.get('[data-cy="registertoggle"]').dblclick();
        cy.get('[data-cy="user"]').should('have.attr', 'name', 'user').click();
        cy.get('[data-cy="user"]').type("pushingit")
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("123456!")
        cy.get('[data-cy="submitForm"]').should('have.attr', 'type', 'submit').click({force:true});
    });
})

//Modifica todos los selectores para obtener los mismos elementos web pero con rutas diferentes

describe("Actividad complementaria 2", () =>{
    it('Actividad complementeria 2', () =>{
    cy.visit('');
    cy.get('[data-cy="user"]').type('pushingit' + randomNumber);
    cy.get('[data-cy="pass"]').type('123456!');
    cy.get('[value="Female"]').check({force: true});
    cy.get('[data-cy="day"]').select('3');
    cy.get('[data-cy="month"]').select('August');
    cy.get('[data-cy="year"]').select('1988');
    cy.get('[data-cy="submitForm"]').click();
    });
});
