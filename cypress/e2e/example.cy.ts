// https://on.cypress.io/api

describe('CelestialUI React Demo', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'CelestialUI React Demo')
    cy.get('button').should('contain', 'Primary')
  })
})
