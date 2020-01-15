var Person = /** @class */ (function () {
    function Person(lastName) {
        this.lastName = lastName;
        this.firstName1 = "Dinesh";
        this.lastName = lastName;
    }
    return Person;
}());
var personType = new Person("Veer");
console.log(personType.firstName1);
console.log(personType.lastName);
