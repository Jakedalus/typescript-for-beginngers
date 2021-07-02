console.log('test');

const button = document.querySelector('button')!;

console.log(`button`, button);

button.addEventListener('click', () => {
	console.log('clicked');
});
