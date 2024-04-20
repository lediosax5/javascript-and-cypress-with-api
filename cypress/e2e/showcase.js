// -Imports
[]

// -Constants
const homePage = " ";
const randomNumber = Math.floor(Math.random() * 10200); // We can also use the variable: Date.now()

// -Tests
// Css, cy selectors and validations
describe("Positive register", function(){
    it.only("random user AC", function(){
        cy.visit(" ");
        cy.get('[data-cy="user"]').should('have.attr', 'name', 'user').click();
        cy.get('[data-cy="user"]').type("name1" + randomNumber);
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("pass" + randomNumber + "#");
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
        cy.get('[data-cy="user"]').type("pushingit");
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("123456!");
        cy.get('[data-cy="submitForm"]').should('have.attr', 'type', 'submit').click({force:true});
    });
})
// Same web elements with differents cy selectors
describe("Positive register 02", function(){
    it.only("random user 02", function(){
        cy.visit(" ");
        cy.get('input[id="user"]').type("name2" + Date.now());
        cy.get('input[id=pass]').type("pass" + randomNumber + "#");
        cy.get("input[value='Male']").check({force:true});
        cy.get('select[id=day]').select(18);
        cy.get("div").children('select[id=month]').select("May");
        cy.get("#year").select("1980");
        cy.get("form").find("button").eq(0).click({force:true});
    });
});
// Different tests using xpath
describe("Create task", function(){
    it.only("create and cross out task AC 03 part 1", function(){
        cy.visit(" ");
        cy.xpath('//span[@id="registertoggle"]').dblclick();
        cy.xpath("//input[@id='user']").click();
        cy.xpath('//input[contains(@name,"user")]').type("pushingit");
        cy.xpath("//label[contains(@class,'chakra-form__label')]//following-sibling::input[@id='pass']").should('have.attr', 'name', 'pass').click();
        cy.xpath('//input[contains(@name,"pass")]').type("123456!");
        cy.xpath("//button[text()='Log in']").should('have.attr', 'type', 'submit').click({force:true});
        // to do list page
        cy.xpath("//a[@id='todolistlink']").click();
        cy.xpath('//input[@id="task"][contains(@name,"task")]').type("are you talking to me");
        cy.xpath('//button[@id="sendTask"]').click();
        cy.xpath("//p[text()='are you talking to me']").click();
        cy.wait(6000);
        cy.xpath("//p[text()='are you talking to me']//following-sibling::button").click({force:true});
        cy.wait(6000);
    });
    it.only('open and close modal AC 03 part 2', () => {
        cy.visit('');
        cy.xpath("//span[text()='Iniciá sesión']").dblclick();
        cy.xpath('//input[@id="user"]').type("pushingit");
        cy.xpath('//input[@id="pass"]').type("123456!");
        cy.xpath("//button[text()='Log in']").click({force:true});
        // online shop page
        cy.xpath('//a[@id="onlineshoplink"]').click();
        cy.xpath('//button[@id="edit-1000"]').click();
        cy.xpath('//button[@aria-label="Close"]').click();
    });
})
