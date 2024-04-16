// -Imports
[]

// -Constants
const homePage = " ";
const randomNumber = Math.floor(Math.random() * 10200);

// -Tests
// With cy selectors and validations
describe("Positive register", function(){
    it.only("random user AC", function(){
        cy.visit(" ");
        cy.get('[data-cy="user"]').should('have.attr', 'name', 'user').click();
        cy.get('[data-cy="user"]').type("name1" + randomNumber)
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("pass" + randomNumber + "#")
        cy.get("[value='Male']").check({force:true});
        cy.get('[data-cy="day"]').select(20);
        cy.get('[data-cy="month"]').select("May");
        cy.get('[data-cy="year"]').select("1990");
        cy.get('[data-cy="submitForm"]').should('have.attr', 'type', 'submit').click({force:true});
    });
})
describe("Positive login", function(){
    it.only("normal login AC", function(){
        cy.visit(" ");
        cy.get('[data-cy="registertoggle"]').dblclick();
        cy.get('[data-cy="user"]').should('have.attr', 'name', 'user').click();
        cy.get('[data-cy="user"]').type("pushingit")
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("123456!")
        cy.get('[data-cy="submitForm"]').should('have.attr', 'type', 'submit').click({force:true});
    });
})
// Same web elements with other selectors
describe("Positive register 02", function(){
    it.only("random user 02", function(){
        cy.visit(" ");
        cy.get('input[id="user"]').type("name2" + randomNumber)
        cy.get('input[id=pass]').type("pass" + randomNumber + "#")
        cy.get("input[value='Male']").check({force:true});
        cy.get('select[id=day]').select(18);
        cy.get("div").children('select[id=month]').select("May");
        cy.get("#year").select("1980");
        cy.get("form").find("button").click({force:true});
    });
});
