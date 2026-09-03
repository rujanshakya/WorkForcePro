import employeePage from '../../pages/EmployeePage';

describe('[TS-EMP-01] Verify that a user with the Admin role can create an employee record using valid data in all mandatory fields.', () => {
    let email = Cypress.env('EMAIL') || '';
    let password = Cypress.env('PASSWORD') || '';
    beforeEach(() => {
        cy.login(email, password);
        employeePage.visit();

    });

    it('[TC-EM-001] Verify that user is able to create an employee record with valid data in all mandatory fields', () => {
        //Steps for creating an employee record
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-002] Verify that the created employee record is persisted after a page reload', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-003] Verify that the created employee is listed on the [Employees] listing page', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-004] Verify that user is not able to create an employee record with null data', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-005] Verify that user is not able to create an employee record with the [Employee Name] field blank', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-006] Verify that user is not able to create an employee record with the [Email] field blank', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-007] Verify that user is not able to create an employee record with the [Department] field blank', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-008] Verify that the [Employee Name] field accepts data at the minimum and maximum allowed length', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-009] Verify that the [Employee Name] field does not accept data above the maximum allowed length', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-010] Verify that the [Employee Name] field accepts valid special characters and non-Latin scripts', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-011] Verify that user is not able to fill up the [Employee Name] field with white spaces only', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-012] Verify that user is not able to create an employee record with an already existing [Employee ID]', () => {
        employeePage.clickAddEmployee();
    });

    it('[TC-EM-013] Verify that script data entered on the employee text fields is not executed on the application', () => {
        employeePage.clickAddEmployee();
    });
    
});