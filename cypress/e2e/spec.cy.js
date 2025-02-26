/// <reference types="cypress" />

//Ge@login - 1234

describe('template spec', () => {
  beforeEach('Homepage', () => {
    cy.visit('https://barrigareact.wcaquino.me/')
  })

  it('Login, email, senha e clique', () => {
    cy.get('[data-test="email"]').type('Ge@login')
    cy.get('[data-test="passwd"]').type('1234')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'Bem vindo')
  });

})