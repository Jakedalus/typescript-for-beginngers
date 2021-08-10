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
