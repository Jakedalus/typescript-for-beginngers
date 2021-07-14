"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("# of employees", this.employees.length);
        console.log("Employees:", this.employees);
    };
    Department.createEmployee = function (name) {
        return name;
    };
    Department.fiscalYear = 2021;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.secret = 'secreeeet';
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "getSecret", {
        get: function () {
            return this.secret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ITDepartment.prototype, "setSecret", {
        set: function (newSecret) {
            this.secret = newSecret;
        },
        enumerable: false,
        configurable: true
    });
    ITDepartment.prototype.describe = function () {
        console.log("IT Department " + this.id + ": " + this.name);
    };
    ITDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'Max') {
            console.log('Cannot add Max');
            return;
        }
        this.employees.push(employee);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.secret = 'secreeeet';
        return _this;
    }
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2');
        return this.instance;
    };
    Object.defineProperty(AccountingDepartment.prototype, "getSecret", {
        get: function () {
            return this.secret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "setSecret", {
        set: function (newSecret) {
            this.secret = newSecret;
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department " + this.id + ": " + this.name);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'Max') {
            console.log('Cannot add Max');
            return;
        }
        this.employees.push(employee);
    };
    return AccountingDepartment;
}(Department));
console.log('== IT ==');
var IT = new ITDepartment('it1', ['Jake']);
IT.addEmployee('Max');
IT.addEmployee('Jake');
IT.describe();
console.log("IT", IT);
IT.printEmployeeInformation();
console.log(IT.getSecret);
IT.setSecret = 'new seeeeecret';
console.log(IT.getSecret);
console.log('== Accounting ==');
var accounting = AccountingDepartment.getInstance();
console.log("accounting", accounting);
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Francis');
accounting.printEmployeeInformation();
var newWorker = Department.createEmployee('Francis');
console.log(newWorker);
console.log(Department.fiscalYear);
