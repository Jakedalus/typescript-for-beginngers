"use strict";
console.log('test');
var button = document.querySelector('button');
console.log("button", button);
button.addEventListener('click', function () {
    console.log('clicked');
});