class Person{

    readonly firstName1="Dinesh";
    constructor(readonly lastName:String){
        this.lastName=lastName
    }
}

let personType = new Person("Veer");
console.log(personType.firstName1);
console.log(personType.lastName)