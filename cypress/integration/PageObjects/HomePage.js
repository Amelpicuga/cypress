class HomePage
{
     getLogin(){
        return  cy.get('.login')

    }

    getRegistrationinput(){
        return cy.get('#email_create')
    }

    getSubmit(){
        return cy.get('#SubmitCreate ')
    }
    


}

export default HomePage;