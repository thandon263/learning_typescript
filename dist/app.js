"use strict";
// type AddFn = (a: number, b: number) => number
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
        this.age = 30;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('William');
user1.greet("Hi there, I am");
