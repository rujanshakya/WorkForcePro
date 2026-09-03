class EmployeePage {
	visit() {
		cy.visit('/employees');
		return this;
	}

	

}

export default new EmployeePage();
