// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; // tuples
// } = {
// 	name: 'Jacob',
// 	age: 39,
// 	hobbies: [ 'sports', 'cooking' ],
// 	role: [ 2, 'author' ]
// };

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR
}

const person = {
	name: 'Jacob',
	age: 39,
	hobbies: [ 'sports', 'cooking' ],
	role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

if (person.role === Role.ADMIN) {
	console.log('Admin');
}

console.log(person);
