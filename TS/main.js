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
exports.__esModule = true;
var booleanVal = true;
var total = 0;
var name = "typescript";
// name = "false";
var data = "My name is " + name + "\n    I am a beginner\n";
console.log(data);
var a = null;
var u = undefined;
//null+undefined are subtypes of other types
var val1 = null;
var val2 = undefined;
var arr1 = [1, 2, 3];
var arr2 = [6, 5, 4];
//Tuple - array with different types
var person1 = ["John", 22, "Sales", [22]];
//Enums
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
var c = color.Green;
console.log(c);
//any 
// let boo : any = 10;
// boo = true
// boo = "Hello"
// console.log(boo.name)
// boo()
// boo.toUpperCase();
//unknown
// let boo : unknown = 10;
// // boo = true
// // boo = "Hello"
// // console.log(boo.name)
// // boo()
// (boo as string).toUpperCase();
//function
// function add(num1:number, num2:number = 10){
//     return num1+num2
// }
// add(5, 10)
// // add(1 + 'a')
// add(3)
//interfaces
// interface Person {
//     firstName:string;
//     lastName?:string;
// }
// function fullName(person:Person){
//     console.log(`${person.firstName} ${person.lastName}`)
// }
// let p = {
//     firstName:"John",
// }
// fullName(p)
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("John");
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating Work");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Supername");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
