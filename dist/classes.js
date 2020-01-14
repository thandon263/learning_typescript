"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        /**
         * @author Thando Ncube
         * @throws Error("No Report Found")
         * @returns this.lastReport
         */
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report Found");
        },
        /**
         * @author Thando Ncube
         * @param value
         * @argument value
         */
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value! [string]");
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department - ID: " + this.id);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('Max');
console.log(employee1);
var it = new ITDepartment('1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
console.log(it);
var accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
accounting.addReport('Something went wrong...');
accounting.printReports();
accounting.describe();
var accounting1 = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
console.log(accounting1, accounting2);
