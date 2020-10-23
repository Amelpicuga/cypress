/// <reference types="Cypress" />
import HomePage from '../PageObjects/HomePage' 


describe('Smoke test suite',function(){
    
    
    before(() => {
        
        cy.fixture('example').then(function(data){
            this.data=data //local to global data
        })
       
        
      })
     
   
    it('Registration test case',function(){
       
        const  homePage= new HomePage()
       
        cy.visit("http://automationpractice.com/index.php")
        homePage.getLogin().click()
        homePage.getRegistrationinput().type(this.data.email)

        homePage.getSubmit().click()

    })

    it('Login test case',function(){
       
        const  homePage= new HomePage()
       
        cy.visit("http://automationpractice.com/index.php")
        homePage.getLogin().click()
        cy.get('#email').type('amel@getnada.com')
        cy.get('#passwd').type('12345amel')
        cy.get('#SubmitLogin').click()
    

    })
    it('Sign out test case',function(){
       
        const  homePage= new HomePage()
       
        cy.visit("http://automationpractice.com/index.php")
        homePage.getLogin().click()
        cy.get('#email').type('amel@getnada.com')
        cy.get('#passwd').type('12345amel')
        cy.get('#SubmitLogin').click()
        cy.get('.logout').click()
    

    })
    it('Add item',function(){
       
        const  homePage= new HomePage()
       
        cy.visit("http://automationpractice.com/index.php")
        homePage.getLogin().click()
        cy.get('#email').type('amel@getnada.com')
        cy.get('#passwd').type('12345amel')
        cy.get('#SubmitLogin').click()
        cy.get('li > .btn > span').click()
        cy.contains('Add to cart').click()
        
    

    })
    
})