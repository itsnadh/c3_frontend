/// <reference types="cypress" />

context('Try', ()=>{

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/admin')
    })

    it('check home admin',()=>{
        
        cy.viewport(1280,720)
        cy.contains('Home').should('exist')
        cy.contains('Category').should('exist')
        cy.contains('Product').should('exist')
        cy.contains('Review').should('exist')
        cy.contains('Logout').should('exist')
        cy.contains('CATEGORY TABLE').should('exist')
        cy.contains('ID').should('exist')
        cy.wait(5000)
        // cy.contains('NAME').should('exist')
        // cy.contains('ACTIONS').should('exist')
        cy.contains('1').should('exist')
        cy.contains('Lipstick').should('exist')
    })
})