class EmployeePage {
	visit() {
		cy.visit('/employees');
		return this;
	}

	clickAddEmployee() {
		cy.contains('button', 'Add Employee').click();
		return this;
	}

}

export default new EmployeePage();
