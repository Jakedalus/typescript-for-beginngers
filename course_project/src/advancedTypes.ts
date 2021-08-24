// Intersection Types

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Jake',
	privileges: [ 'create server' ],
	startDate: new Date()
};

// Type Guards

type Mergable = string | number;
type Numeric = number | boolean;

type Universal = Mergable & Numeric;

function addMergable(n1: Mergable, n2: Mergable) {
	if (typeof n1 === 'string' || typeof n2 === 'string') {
		return n1.toString() + n2.toString();
	}
	return n1 + n2;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnknownEmployee) {
	console.log('Name:', employee.name);
	if ('privileges' in employee) {
		console.log('Privileges:', employee.privileges);
	}
	if ('startDate' in employee) {
		console.log('Date:', employee.startDate);
	}
}

printEmployeeInfo(e1);

class Car {
	drive() {
		console.log('Driving');
	}
}

class Truck {
	drive() {
		console.log('Drive truck');
	}

	loadCargo(amount: number) {
		console.log('loading ', amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle) {
	v.drive();
	if (v instanceof Truck) {
		v.loadCargo(3);
	}
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Union

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(a: Animal) {
	switch (a.type) {
		case 'bird':
			console.log(`Moving with speed ${a.flyingSpeed}`);
			break;
		case 'horse':
			console.log(`Moving with speed ${a.runningSpeed}`);
			break;
	}
}

const bird: Animal = {
	type: 'bird',
	flyingSpeed: 10
};

const horse: Animal = {
	type: 'horse',
	runningSpeed: 37
};

moveAnimal(bird);
moveAnimal(horse);

// Type Casting

const paragraph = document.getElementById('message');
// const input = document.getElementById(
// 	'user-input'
// )! as HTMLInputElement;
const input = document.getElementById('user-input');

if (input) {
	(input as HTMLInputElement).value = 'Hi there';
}

// Index Properties

interface ErrorContainer {
	// id: string; // cannot be an number
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: 'not a valid email',
	username: 'must start with a letter'
};

// Function Overloads
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: number, n2: string): string;
function add(n1: string, n2: number): string;
function add(n1: Mergable, n2: Mergable) {
	if (typeof n1 === 'string' || typeof n2 === 'string') {
		return n1.toString() + n2.toString();
	}
	return n1 + n2;
}

const result = add('Jake', ' Carpenter');
const names = result.split(' ');

const result2 = add('Jake', 1);
const names2 = result2.split(' ');

// const result3 = add(3, 1);
// const names3 = result3.split(' ');

// Optional Chaining

const fetchedUserData = {
	id: 'u1',
	name: 'MAx',
	job: { title: 'Cool guy', company: 'Mine' }
};

// console.log(
// 	`fetchedUserData.job.title`,
// 	fetchedUserData?.job?.title
// );

// Nullish Coalescing

const userInputNyll = null;

// const storedInput = userInputNyll || 'DEFAULT';
// const storedInput = userInputNyll ?? 'DEFAULT';

// console.log(`storedInput`, storedInput);
