var TestSample = /** @class */ (function () {
    function TestSample() {
    }
    TestSample.prototype.greet = function () {
        console.log("Inside greet");
        return "inside";
    };
    return TestSample;
}());
var aperson = new TestSample();
aperson.greet();
