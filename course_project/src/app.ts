interface Named {
	readonly name: string;
	outputName?: string; // optional
}
interface Greetable extends Named {
	greet(phrase: string): void;
}

// type Person = {
// 	name: string;
// 	age: number;

// 	greet(phrase: string): void;
// };

class Person implements Greetable {
	name: string;
	age: number;

	constructor(n: string, a: number) {
		this.name = n;
		this.age = a;
	}

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`);
	}
}

let user1: Greetable;

user1 = new Person('Jake', 39);

user1.greet('Hello, I am');

// user1 = {
// 	name: 'Jake',
// 	age: 39,
// 	greet(phrase: string) {
// 		console.log(`${phrase} ${this.name}`);
// 	}
// };
