function addN(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number) {
	console.log(`Result: ${num}`);
}

function addAndHandle(
	n1: number,
	n2: number,
	cb: (num: number) => void
) {
	const result = n1 + n2;
	cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = addN;

// combineValues = 5;
// combineValues = printResult;

printResult(addN(5, 6));
printResult(combineValues(15, 16));

addAndHandle(10, 20, result => {
	console.log(result);
});
