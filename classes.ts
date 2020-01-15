//classes
class Person{
    firstName:string;
    lastName:string;
    bike:boolean;
    

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }


    getFullName(){
        return this.firstName+" "+this.lastName;
    }
}
//explicit typing
//var person:Person=new Person();
//console.log(person);
//person.firstName="Dinesh"
//person.bike=false;
//person.lastName='veer'
//console.log(person);
//console.log(person.getFullName())

//implicit typing
var person2=new Person('Dinesh', 'veer');
console.log(person2.getFullName())

