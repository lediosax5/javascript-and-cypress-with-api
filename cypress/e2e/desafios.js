// -Imports
[]

// -Constants
//const register = " ";
const randomNumber = Math.floor(Math.random() * 10200);

// -Tests
describe("Desafios", function(){
    it.only("desafio 1", function(){
        cy.visit(" ");
        cy.get('[data-cy="user"]').should('have.attr', 'name', 'user').click();
        cy.get('[data-cy="user"]').type("unname" + randomNumber)
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("unpass" + randomNumber + "!")
        cy.get("[value='Male']").check({force:true});
        cy.get('[data-cy="day"]').select(20);
        cy.get('[data-cy="month"]').select("May");
        cy.get('[data-cy="year"]').select("1990");
        cy.get('button[data-cy="submitForm"]').should('have.attr', 'type', 'submit').click({force:true});
        // on
        cy.get("#todolistlink").click();
        cy.get(".css-ha1fhc").find('[data-cy="task"]').type("tarea imaginaria");
        cy.get(".css-ha1fhc").find('[data-cy="sendTask"]').click();
        cy.get(".css-ha1fhc").contains("tarea imaginaria").click();
        //cy.get(".css-ha1fhc").contains("tarea imaginaria").siblings("button").click();
    });
})
