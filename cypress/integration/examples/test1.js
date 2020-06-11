/// <reference types="Cypress" />

describe('my first test suite',function(){

    it('my first test case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca') 
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('.product:visible').should('have.length',4)
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('aa')
        })
        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

          const textVeg=$el.find('h4.product-name').text()
          if(textVeg.includes('Cashews')){
              $el.find('button').click()

          }
        })

        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then(function(logoelement){
           cy.log(logoelement.text())
        }
        )
        
    })

})