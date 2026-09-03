describe('[TS-EMP-01] Verify that a user with the Admin role can create an employee record using valid data in all mandatory fields.', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.visit('/');
        cy.login(email, password);
    });

    it('[TC-EM-001] Verify that user is able to create an employee record with valid data in all mandatory fields', () => {
        //Steps for creating an employee record
        employeePage.visit();
        employeePage.clickAddEmployee();
    });
});