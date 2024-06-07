
describe('register, login and delete user', () => {
    const url = 'https://pushing-it.onrender.com';
    //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTcyMzI4MDd9.xZrphbVVqaUuca8Hh24J_KZU4tmJfA2Y_gEVVn9A0MY"

    it('test', () => {
        cy.request({
            method: 'POST',
            url: `${url}/api/register`,
            //headers: { 'autorization': `Bearer ${token}`, },
            body: {
                username : "guido01",
                password: "pass123!",
                gender: "male",
                day: "5",
                month: "May",
                year: "1980",
            }
        }).then(response => {
            cy.log(response)
            expect(response.status).to.be.equal(201);
            expect(response.body.newUser.username).to.be.equal("guido01");
        });
        cy.request({
            method: 'POST',
            url: `${url}/api/login`,
            //headers: { 'autorization': `Bearer ${token}`, },
            body: {
                username : "guido01",
                password: "pass123!",
            }
        }).then(response => {
            cy.log(response)
            expect(response.status).to.be.equal(201);
            expect(response.body.user.username).to.be.equal("guido01");
        });
        cy.request({
            method: 'DELETE',
            url: `${url}/api/deleteuser/guido01/`,
            //headers: { 'autorization': `Bearer ${token}`, },
        }).then(response => {
            cy.log(response)
            expect(response.status).to.be.equal(202);
            expect(response.body.user.username).to.be.equal("guido01");
        });
    });
});
