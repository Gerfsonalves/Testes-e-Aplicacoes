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
        .then(token => {
            cy.request({
                url: 'https://barrigarest.wcaquino.me/contas',
                method: 'POST',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: 'Conta via rest'
                }
            }).as('response')
        })

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('nome', 'Conta via rest')
    })

})