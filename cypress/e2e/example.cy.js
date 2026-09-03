describe('Example Cypress test', () => {
	it('loads the application and checks the page title', () => {
		cy.visit('/')
		cy.title().should('not.be.empty')
	})

	it('finds and interacts with an element', () => {
		cy.visit('/')
		cy.get('[data-cy="submit-button"]')
			.should('be.visible')
			.click()
	})
})
