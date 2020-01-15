var fn = function () { return "return"; };
//Postfix assignment
var a;
var b;
var c;
var d;
a = 100;
b = false;
c = 'Dinesh';
//Array
var myArray;
myArray = [];
myArray = [1, 2, 3];
//compile time error   myArray=['a','b'];
myArray.push(12);
a = myArray.pop();
var variableArray = [12, 'Dinesh', false]; // can be assigned at declaration
//Tuples
var myTuple;
myTuple = [12, 'veer'];
myTuple = [2, 'Dveer'];
myTuple = [23, 'veer'];
function add(x, y) {
    return x + y;
}
console.log(add(2, 2)); // 4
function addofNumber(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b;
}
console.log(addofNumber(11, 33));
//optional variable
function optionalVariable(a, b, c) {
    if (c == undefined)
        c = 0;
    return a + b + c;
}
console.log(optionalVariable(2, 4));
//implicit typing
var str = 'string';
var bool = false;
var num = 11;
function greet() {
    return "greetings";
}
var greeting = greet();
console.log(greeting);
//any type variable
var anyVariable;
anyVariable = 11;
anyVariable = true;
anyVariable = "string";
//union
var varUnion;
varUnion = 11;
varUnion = false;
