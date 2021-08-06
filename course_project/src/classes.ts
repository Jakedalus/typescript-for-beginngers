abstract class Department {
	// private name: string;
	static fiscalYear = 2021;
	protected employees: string[] = [];

	constructor(
		protected readonly id: string,
		protected name: string
	) {
		// this.name = n;
	}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		// this.id = 'd2'; // doesn't work once readonly
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(`# of employees`, this.employees.length);
		console.log(`Employees:`, this.employees);
	}

	static createEmployee(name: string) {
		return name;
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

	describe() {
		console.log(`IT Department ${this.id}: ${this.name}`);
	}

	addEmployee(employee: string) {
		if (employee === 'Max') {
			console.log('Cannot add Max');
			return;
		}
		this.employees.push(employee);
	}
}

class AccountingDepartment extends Department {
	private secret: string;
	private static instance: AccountingDepartment;

	private constructor(id: string) {
		super(id, 'Accounting');
		this.secret = 'secreeeet';
	}

	static getInstance() {
		if (AccountingDepartment.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment('d2');
		return this.instance;
	}

	get getSecret() {
		return this.secret;
	}

	set setSecret(newSecret: string) {
		this.secret = newSecret;
	}

	describe() {
		console.log(
			`Accounting Department ${this.id}: ${this.name}`
		);
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

const accounting = AccountingDepartment.getInstance();

console.log(`accounting`, accounting);

accounting.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Francis');
// accounting.employees[2] = 'Anna';  // no longer works when employees is made private
accounting.printEmployeeInformation();

const newWorker = Department.createEmployee('Francis');

console.log(newWorker);

console.log(Department.fiscalYear);

////////

// const accountingCopy = { describe: accounting.describe };

// accountingCopy.describe();  Doesn't work because of this: Department in describe

// const accountingCopy2 = {
// 	name: 'Accounting 2',
// 	describe: accounting.describe
// };

// accountingCopy2.describe(); // works because it matches the class
