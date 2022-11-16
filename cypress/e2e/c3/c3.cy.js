/// <reference types="cypress" />

context('Try', ()=>{

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/')
    })

    it('try register, login, home',()=>{
        cy.viewport(1280,720)
        cy.contains('Register').should('exist')
        cy.get('.button-register > a').click()
        cy.get('#name_field').type('itsnas')
        cy.get('#email_field').type('itsna22@gmail.com')
        cy.get('#password_field').type('password')
        cy.get('.register-button').click()
        cy.contains('Login').should('exist')
        cy.get('#email').type('itsna22@gmail.com')
        cy.get('#password').type('password')
        cy.get('.button-login').click()
        cy.contains('Home').should('exist')
        cy.contains('Category').should('exist')
    })

    // it('try verify objects',()=>{
    //     cy.viewport(1280,720) // set viewpot
    //     cy.contains('Login').should('exist')
    //     cy.contains('Email').should('exist')
    //     cy.contains('Password').should('exist')
    //     cy.contains('Sign in').should('exist')
    //     cy.contains('Register').should('exist')
    // })
})
