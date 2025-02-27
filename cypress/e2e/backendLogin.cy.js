/// <reference types="cypress" />

it('Login', () => {
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/signin',
        body: {
            email: "Ge@login",
            redirecionar: false,
            senha: "1234"
        }
    }).its('body.token').should('not.be.empty')
})