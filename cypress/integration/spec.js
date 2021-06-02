  /// <reference types="cypress" />

context('Cypress testing', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should not fire a click event on keypress from a non-interactive control', () => {
        cy.get('[data-cy="test-h4"]').type('{enter}')

        cy.on('window:alert', (txt) => {
            expect(txt).not.to.contain('click event')
        })
    })
    it('should fire a click event on keypress from an interactive control', () => {
        cy.get('[data-cy="test-button"]').type('{enter}')

        cy.on('window:alert', (txt) => {
            expect(txt).to.contain('click event')
        })
    })
})