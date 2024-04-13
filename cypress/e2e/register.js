// -Imports
[]

// -Constants
//const register = " ";
const randomNumber = Math.floor(Math.random() * 10200);

// -Tests
describe("Positive register", function(){
    it("random user AC", function(){
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
    it("normal login", function(){
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
describe("Actividad complementaria 2", function(){
    it.only("random user AC con otros selectores", function(){
        cy.visit(" ");
        cy.get('input[id="user"]').type("elname" + randomNumber)
        cy.get('input[id=pass]').type("elpass" + randomNumber + "#")
        cy.get("input[value='Male']").check({force:true});
        cy.get('select[id=day]').select(18);
        cy.get("div").children('select[id=month]').select("May");
        cy.get("#year").select("1980");
        cy.get("form").find("button").click({force:true});
    });
});
