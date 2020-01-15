var fn = ()=>"return";
//Postfix assignment
var a:number;
var b:boolean;
var c: string;
var d:undefined;

a=100;
b=false;
c='Dinesh';

//Array
var myArray:number[];
myArray=[];
myArray=[1,2,3];
//compile time error   myArray=['a','b'];
myArray.push(12);
a=myArray.pop();
var variableArray=[12,'Dinesh',false];// can be assigned at declaration

//Tuples
var myTuple:[number,string];
myTuple=[12,'veer'];
myTuple=[2,'Dveer'];
myTuple=[23,'veer'];

function add(x: number, y: number): number {
    return x + y;
}

console.log(add(2,2)); // 4

function addofNumber(a:number,b:number,c:number=0):number{
    return a+b;
}

console.log(addofNumber(11,33));

//optional variable
function optionalVariable(a,b,c?){
    if(c==undefined)
    c=0;
    return a+b+c;
}
console.log(optionalVariable(2,4))

//implicit typing
var str='string';
var bool=false;
var num=11;

function greet():string{
    return "greetings";
}

var greeting=greet();
console.log(greeting);

//any type variable
var anyVariable:any;

anyVariable=11;
anyVariable=true;
anyVariable="string";

//union
var varUnion:number |boolean;

varUnion=11;
varUnion=false;

