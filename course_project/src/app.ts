class Department {
	// private name: string;
	private employees: string[] = [];

	constructor(
		private readonly id: string,
		private name: string
	) {
		// this.name = n;
	}

	describe(this: Department) {
		console.log(`Department ${this.id}: ${this.name}`);
	}

	addEmployee(employee: string) {
		// this.id = 'd2'; // doesn't work once readonly
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(
			`this.employees.length`,
			this.employees.length
		);
		console.log(`this.employees`, this.employees);
	}
}

const accounting = new Department('d1', 'Accounting');

console.log(`accounting`, accounting);

accounting.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Francis');
// accounting.employees[2] = 'Anna';  // no longer works when employees is made private
accounting.printEmployeeInformation();

const accountingCopy = { describe: accounting.describe };

// accountingCopy.describe();  Doesn't work because of this: Department in describe

// const accountingCopy2 = {
// 	name: 'Accounting 2',
// 	describe: accounting.describe
// };

// accountingCopy2.describe(); // works because it matches the class
