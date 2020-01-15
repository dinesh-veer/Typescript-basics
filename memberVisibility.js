var person = /** @class */ (function () {
    function person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    person.prototype.getFirstName = function () {
        return this.firstName;
    };
    person.prototype.getLastName = function () {
        return this.lastName;
    };
    person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    person.prototype.getName = function () {
        console.log(this.firstName + "  " + this.lastName);
    };
    person.prototype.getFullName = function () {
        this.getName();
    };
    return person;
}());
var aperson = new person('Dinesh', 'Veer');
console.log("FirstName: " + aperson.getFirstName());
console.log("LastName: " + aperson.getLastName());
aperson.getFullName();
