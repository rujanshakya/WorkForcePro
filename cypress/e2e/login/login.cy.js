describe('Login', () => {
	const username = Cypress.env('EMAIL') || 'user@example.com';
	const password = Cypress.env('PASSWORD') || 'password';

	const loginPage = {
		visit() {
			cy.visit('/login');
		},
		enterEmail(email) {
			cy.get('input[type="email"]').type(email);
		},
		enterPassword(password) {
			cy.get('input[type="password"]').type(password);
		},
		submit() {
			cy.get('button[type="submit"]').click();
		},
		assertErrorVisible() {
			cy.get('[role="alert"], .error, .alert').should('be.visible');
		}
	};

	beforeEach(() => {
		loginPage.visit();
	});

	it('logs in with valid credentials', () => {
		loginPage.enterEmail(username);
		loginPage.enterPassword(password);
		loginPage.submit();

		cy.url().should('not.include', '/login');
	});

	it('rejects invalid credentials', () => {
		loginPage.enterEmail('invalid@example.com');
		loginPage.enterPassword('invalid-password');
		loginPage.submit();

		loginPage.assertErrorVisible();
	});
});
