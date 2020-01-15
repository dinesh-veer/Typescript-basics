"use strict";
exports.__esModule = true;
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person2;
}());
exports.Person2 = Person2;
var per = new Person2('Aniket', 'Molwane');
console.log(per);
