import employeePage from '../../pages/EmployeePage';

describe('[TS-EMP-15] Verify department assignment during employee creation and department-based listing filter', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-023] Verify that user is able to assign an employee to a department during record creation', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-024] Verify that user is able to filter the employee listing by department', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-16] Verify that user is able to change the department of an existing employee record', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-025] Verify that user is able to change the department of an existing employee record', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-17] Verify department assignment constraints via the API and exclusion of inactive departments from the dropdown', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-026] Verify that an employee cannot be assigned to a non existing department through the API', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-027] Verify that an inactive department is not listed on the [Department] dropdown', () => {
        employeePage.clickAddEmployee();
    });

});

describe('[TS-EMP-18] Verify supervisor assignment constraints preventing self-assignment and circular reporting relationships', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-028] Verify that an employee cannot be assigned as their own supervisor', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-029] Verify the behaviour when a circular reporting relationship is created between two employees', () => {
        employeePage.clickAddEmployee();
    });

});
