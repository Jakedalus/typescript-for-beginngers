"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var names3 = ['jake'];
var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('Done');
    }, 2000);
});
promise.then(function (data) {
    data.split(' ');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var merged = merge({ name: 'jake', hobbies: ["bein' cool"] }, { age: 39 });
console.log(merged);
console.log(merged.age);
var merged2 = merge({ cool: true, number: 123123 }, { francis: 'no' });
console.log(merged2);
console.log(merged2.cool);
function countAndPrint(element) {
    var description = element.length > 0
        ? "Got " + element.length + " elements"
        : 'Got no value';
    return [element, description];
}
console.log("countAndPrint('yo dude)", countAndPrint('yo dude'));
console.log("countAndPrint([23,234,234,65,363])", countAndPrint([23, 234, 234, 65, 363]));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Jake' }, 'name'));
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Sup');
textStorage.addItem('yoooo');
console.log("textStorage", textStorage.getItems());
