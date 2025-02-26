/// <reference types="cypress" />

//Ge@login - 1234

describe('template spec', () => {
  beforeEach('Homepage', () => {
    cy.visit('https://barrigareact.wcaquino.me/')

    cy.get('[data-test="email"]').type('Ge@login')
    cy.get('[data-test="passwd"]').type('1234')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'Bem vindo')
  })

  it('Inserir uma nova conta', () => {
    cy.get('[data-test="menu-settings"] > .fas').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]').type('Conta nova cy')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'inserida com sucesso')
  })

})