class Person{
    firstName:String;
    lastName:string;

    constructor(firstName:string,lastName:string){
        console.log('Parent constructor');
        this.firstName=firstName;
        this.lastName=lastName;
    }

    greet():string{
        var welcomeMsg='welcome '+this.firstName+' '+this.lastName;
        console.log(welcomeMsg)
        return welcomeMsg;
    }
}

class Programmer extends Person{

    constructor(){
        super('Dinesh','veer');
        this.greet();
    }

    greet():string{
        var welcome="programmer class";
        console.log(welcome);
        return welcome;
    }
}
var person:Person=new Programmer();
person.greet();

