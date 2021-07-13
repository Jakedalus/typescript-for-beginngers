"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("this.employees.length", this.employees.length);
        console.log("this.employees", this.employees);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
console.log("accounting", accounting);
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Francis');
accounting.printEmployeeInformation();
var accountingCopy = { describe: accounting.describe };
