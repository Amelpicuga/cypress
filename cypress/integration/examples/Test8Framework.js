/// <reference types="Cypress" />
import HomePage from '../PageObjects/HomePage' 
import ProductPage from '../PageObjects/ProductPage'

describe('my first test suite',function(){

    before(() => {
        
        cy.fixture('example').then(function(data){
            this.data=data //local to global data
        })
      })


    it('my first test case',function(){
       
        const  homePage= new HomePage()
        const productPage=new ProductPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwomyDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength',2)
        homePage.getEntrepreneaur().should('be.disabled')
        
        homePage.getShopTab().click()
       
       
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        
        productPage.CheckoutBtn().click()
        
    })

})