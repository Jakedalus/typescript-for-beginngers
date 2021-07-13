class Department {
	// private name: string;
	protected employees: string[] = [];

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
		console.log(`# of employees`, this.employees.length);
		console.log(`Employees:`, this.employees);
	}
}

class ITDepartment extends Department {
	private secret: string;

	constructor(id: string, public admins: string[]) {
		super(id, 'IT');
		this.secret = 'secreeeet';
	}

	get getSecret() {
		return this.secret;
	}

	set setSecret(newSecret: string) {
		this.secret = newSecret;
	}

	addEmployee(employee: string) {
		if (employee === 'Max') {
			console.log('Cannot add Max');
			return;
		}
		this.employees.push(employee);
	}
}

console.log('== IT ==');

const IT = new ITDepartment('it1', [ 'Jake' ]);
IT.addEmployee('Max');
IT.addEmployee('Jake');
IT.describe();
console.log(`IT`, IT);
IT.printEmployeeInformation();
console.log(IT.getSecret);
IT.setSecret = 'new seeeeecret';
console.log(IT.getSecret);

console.log('== Accounting ==');

const accounting = new Department('d1', 'Accounting');

console.log(`accounting`, accounting);

accounting.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Francis');
// accounting.employees[2] = 'Anna';  // no longer works when employees is made private
accounting.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };

// accountingCopy.describe();  Doesn't work because of this: Department in describe

// const accountingCopy2 = {
// 	name: 'Accounting 2',
// 	describe: accounting.describe
// };

// accountingCopy2.describe(); // works because it matches the class
