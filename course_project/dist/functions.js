"use strict";
function addN(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = addN;
printResult(addN(5, 6));
printResult(combineValues(15, 16));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
