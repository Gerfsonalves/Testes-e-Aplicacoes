/// <reference types="cypress" />

//Ge@login - 1234

describe('template spec', () => {
  beforeEach('Homepage', () => {
    cy.login('Ge@login', '1234')
  })

  it('Inserir uma nova conta', () => {
    cy.get('[data-test="menu-settings"] > .fas').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]').type('Conta nova cy')
    cy.get('.btn').click()

  })

})