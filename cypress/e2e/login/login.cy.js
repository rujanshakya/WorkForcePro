describe('Login', () => {
	beforeEach(() => {
		cy.visit('/login');
	});

	it('logs in with valid credentials', () => {
		cy.get('input[type="email"]').type(Cypress.env('username') || 'user@example.com');
		cy.get('input[type="password"]').type(Cypress.env('password') || 'password');
		cy.get('button[type="submit"]').click();

		cy.url().should('not.include', '/login');
	});

	it('rejects invalid credentials', () => {
		cy.get('input[type="email"]').type('invalid@example.com');
		cy.get('input[type="password"]').type('invalid-password');
		cy.get('button[type="submit"]').click();

		cy.get('[role="alert"], .error, .alert').should('be.visible');
	});
});
