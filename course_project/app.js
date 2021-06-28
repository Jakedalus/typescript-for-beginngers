// let userInput: any;
var userInput;
var userName;
userInput = 5;
userInput = 'Jake';
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errodCode: code
    };
}
generateError('error occurred', 5000);
