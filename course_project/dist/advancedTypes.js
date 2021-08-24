"use strict";
var e1 = {
    name: 'Jake',
    privileges: ['create server'],
    startDate: new Date()
};
function addMergable(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
function printEmployeeInfo(employee) {
    console.log('Name:', employee.name);
    if ('privileges' in employee) {
        console.log('Privileges:', employee.privileges);
    }
    if ('startDate' in employee) {
        console.log('Date:', employee.startDate);
    }
}
printEmployeeInfo(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Drive truck');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('loading ', amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo(3);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(a) {
    switch (a.type) {
        case 'bird':
            console.log("Moving with speed " + a.flyingSpeed);
            break;
        case 'horse':
            console.log("Moving with speed " + a.runningSpeed);
            break;
    }
}
var bird = {
    type: 'bird',
    flyingSpeed: 10
};
var horse = {
    type: 'horse',
    runningSpeed: 37
};
moveAnimal(bird);
moveAnimal(horse);
var paragraph = document.getElementById('message');
var input = document.getElementById('user-input');
if (input) {
    input.value = 'Hi there';
}
var errorBag = {
    email: 'not a valid email',
    username: 'must start with a letter'
};
function add(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var result = add('Jake', ' Carpenter');
var names = result.split(' ');
var result2 = add('Jake', 1);
var names2 = result2.split(' ');
var fetchedUserData = {
    id: 'u1',
    name: 'MAx',
    job: { title: 'Cool guy', company: 'Mine' }
};
var userInputNyll = null;
