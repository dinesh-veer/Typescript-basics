//classes
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
//explicit typing
//var person:Person=new Person();
//console.log(person);
//person.firstName="Dinesh"
//person.bike=false;
//person.lastName='veer'
//console.log(person);
//console.log(person.getFullName())
//implicit typing
var person2 = new Person('Dinesh', 'veer');
console.log(person2.getFullName());
