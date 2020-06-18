/// <reference types="Cypress" />

describe('my second test suite',function(){  

    it('my first test case',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
    cy.get('select').select('option2').should('have.value','option2')
        
    //autocomplete and check by textgit push -u origin master

    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el,index,$list) =>{


        if($el.text()==="India"){
            $el.click()
        }
    })
    //autocomplete
    cy.get('#autocomplete').should('have.value','India')
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    //radiobutton
    cy.get('[value="radio2"]').check()

    cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
    //windows:alert

    cy.on(('window:alert'),(string)=>{
        //mocha
        expect(string).to.eqls('Hello , share this practice page and share your knowledge')
    })

    cy.on(('window:confirm'),(string)=>{
        //mocha
        expect(string).to.eqls('Hello , Are you sure you want to confirm?')

    })


    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','rahulshettyacademy')
    cy.go('back')

//handling values in tables
    cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{

       const text=$el.text()
       if(text.includes("Python")){

            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const pricetext=price.text()
                expect(pricetext).to.equal('25')
            })
       }
    })


//hover

cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')


//forcing hiden btn
cy.contains('Top').click({force: true})
cy.url().should('include','top')

//child window 2
cy.get('#opentab').then(function(qa){
   const url= qa.prop('href')
   cy.visit(url)
})



    })
    


})
