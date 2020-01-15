var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        console.log('Parent constructor');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        var welcomeMsg = 'welcome ' + this.firstName + ' ' + this.lastName;
        console.log(welcomeMsg);
        return welcomeMsg;
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        var _this = _super.call(this, 'Dinesh', 'veer') || this;
        _this.greet();
        return _this;
    }
    Programmer.prototype.greet = function () {
        var welcome = "programmer class";
        console.log(welcome);
        return welcome;
    };
    return Programmer;
}(Person));
var person = new Programmer();
person.greet();
