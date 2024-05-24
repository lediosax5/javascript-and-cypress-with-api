// -Constants

// -Tests
class headerPage{
    verifyUser (user){
        cy.get(`[id^="user_${user}_"]`);
    }
}

// -Export
export default new headerPage()
