// Built in Generics
const names3: Array<string> = [ 'jake' ];

const promise: Promise<string> = new Promise(resolve => {
	setTimeout(() => {
		resolve('Done');
	}, 2000);
});

promise.then(data => {
	data.split(' '); // works because TS knows now
});

// Writing our own

function merge<T extends object, U extends object>(
	objA: T,
	objB: U
) {
	return Object.assign(objA, objB);
}

// fails b/c of constraint
// const merged = merge(
// 	{ name: 'jake', hobbies: [ "bein' cool" ] },
// 	39
// );

const merged = merge(
	{ name: 'jake', hobbies: [ "bein' cool" ] },
	{ age: 39 }
);
console.log(merged);

console.log(merged.age);

const merged2 = merge(
	{ cool: true, number: 123123 },
	{ francis: 'no' }
);
console.log(merged2);

console.log(merged2.cool);

interface Lengthy {
	length: number;
}

function countAndPrint<T extends Lengthy>(
	element: T
): [T, string] {
	const description =
		element.length > 0
			? `Got ${element.length} elements`
			: 'Got no value';
	return [ element, description ];
}

console.log(
	`countAndPrint('yo dude)`,
	countAndPrint('yo dude')
);
console.log(
	`countAndPrint([23,234,234,65,363])`,
	countAndPrint([ 23, 234, 234, 65, 363 ])
);

// keyof

function extractAndConvert<
	T extends object,
	U extends keyof T
>(obj: T, key: U) {
	return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Jake' }, 'name'));

// Generic Classes

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [ ...this.data ];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Sup');
textStorage.addItem('yoooo');
console.log(`textStorage`, textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem({ name: 'Max' });  // fails
// console.log('objStorage', objStorage.getItems());
