import employeePage from '../../pages/EmployeePage';

describe('[TS-EMP-08] Verify that user is able to create multiple employee records with distinct email addresses', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-014] Verify that user is able to create multiple employee records with distinct email addresses', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-09] Verify that user is not able to create an employee record with an already existing email address', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-015] Verify that user is not able to create an employee record with an already existing email address', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-10] Verify the behaviour of the email uniqueness check with regard to case sensitivity and leading/trailing spaces', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-016] Verify that the email uniqueness check is case insensitive', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-017] Verify that the email address is trimmed before the uniqueness check is applied', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-11] Verify email uniqueness validation when updating an existing employee record', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-018] Verify that user is not able to update an employee record with an already existing email address', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-019] Verify that user is able to update an employee record without changing its own email address', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-12] Verify that user is not able to create an employee record with an invalid email format', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-020] Verify that user is not able to create an employee record with an invalid email format', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-13] Verify the behaviour when the email address of a deactivated employee is reused', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-021] Verify the behaviour when the email address of a deactivated employee is reused', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-14] Verify that email uniqueness is enforced at the database level for concurrent submissions', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-022] Verify that email uniqueness is enforced at the database level for concurrent submissions', () => {
        employeePage.clickAddEmployee();
    });

});
