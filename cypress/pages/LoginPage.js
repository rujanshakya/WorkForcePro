class LoginPage {
    elements = {
        usernameInput: () => cy.get('[data-testid="username"], input[name="username"], input[type="email"]'),
        passwordInput: () => cy.get('[data-testid="password"], input[name="password"], input[type="password"]'),
        loginButton: () => cy.get('[data-testid="login-button"], button[type="submit"]'),
        errorMessage: () => cy.get('[data-testid="login-error"], .error-message, [role="alert"], .error, .alert'),
    };

    visit() {
        cy.visit('/login');
    }

    enterUsername(username) {
        this.elements.usernameInput().clear().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear().type(password, { log: false });
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    getErrorMessage() {
        return this.elements.errorMessage();
    }
}

export default new LoginPage();
