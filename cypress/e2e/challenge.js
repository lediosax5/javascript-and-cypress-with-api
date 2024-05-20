// -Imports
[]

// -Constants
const randomNumber = Math.floor(Math.random() * 10200); // We can also use Date.now()

// -Tests
// Login with validations BBD, creation of a task, marking of a task
describe("Challenge 01", function(){
    it("Create, validate and mark a task", function(){
        cy.visit(" ");
        cy.get('[data-cy="user"]').should('have.attr', 'name', 'user').click();
        cy.get('[data-cy="user"]').type("unname" + randomNumber);
        cy.get('[data-cy="pass"]').should('have.attr', 'name', 'pass').click();
        cy.get('[data-cy="pass"]').type("unpass" + randomNumber + "!");
        cy.get("[value='Male']").check({force:true});
        cy.get('[data-cy="day"]').select(20);
        cy.get('[data-cy="month"]').select("May");
        cy.get('[data-cy="year"]').select("1990");
        cy.get('button[data-cy="submitForm"]').should('have.attr', 'type', 'submit').click({force:true});
        // to do list page
        cy.get("#todolistlink").click();
        cy.get(".css-ha1fhc").find('[data-cy="task"]').type("give it to me");
        cy.get(".css-ha1fhc").find('[data-cy="sendTask"]').click();
        cy.get(".css-ha1fhc").contains("give it to me").click();
        //cy.get(".css-ha1fhc").contains("give it to me").siblings("button").click();
    });
})
// Use of before, beforeEach, validations BDD and kinship taking information from a database
describe('Challenge 02', function(){
    let data;
    beforeEach('Login, enter to list, cleanup tasks', function(){
        cy.fixture('dataFixture').as('data').then(function(data){
        data.credentials.task1 = "Task 1",
        data.credentials.task2 = "Task 2",
        data.credentials.task3 = "Task 3",
        data.credentials.task4 = "Task 4",
        data.credentials.task5 = "Task 5"
        cy.visit(" ").wait(600);
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(this.data.credentials.user);
        cy.get('#pass').type(this.data.credentials.pass);
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click();
        cy.get('#removeAll').click();
        cy.get("li").should("not.exist");
        });
    });

    it('Insert 5 tasks', function(){
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task1);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task2);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task3);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task4);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task5);
        cy.xpath('//button[@id="sendTask"]').click();
    });
    it('Verify “All”, “Completed”, “Active” and “Remove all” buttons', function(){
        cy.get('[data-cy="all"]').should('be.visible').and('have.text', 'All');
        cy.get('[data-cy="completed"]').should('be.visible').and('have.text', 'Completed');
        cy.get('[data-cy="active"]').should('be.visible').and('have.text', 'Active');
        cy.get('[data-cy="removeAll"]').should('be.visible').and('have.text', 'Remove all');
        cy.wait(600);
    });
    it('Add 2 tasks, complete them and remove the second one', function(){
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task1);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task2);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.contains("Task 1").click().wait(1000);
        cy.contains("Task 2").click().wait(1000);
        cy.get(".css-ha1fhc").contains("Task 2").siblings("button").click().wait(3000);
    });
    it('Add 2 tasks, complete them and remove the first one', function(){
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task1);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.xpath('//input[@id="task"]').type(this.data.credentials.task2);
        cy.xpath('//button[@id="sendTask"]').click().wait(600);
        cy.contains("Task 1").click().wait(1000);
        cy.contains("Task 2").click().wait(1000);
        cy.get(".css-ha1fhc").contains("Task 1").siblings("button").click().wait(3000);
    });
});
