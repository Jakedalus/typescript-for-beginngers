// let userInput: any;
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jake';

// userName = userInput;

if (typeof userInput === 'string') {
	userName = userInput;
}

function generateError(
	message: string,
	code: number
): never {
	throw {
		message,
		errodCode: code
	};
}

generateError('error occurred', 5000);
