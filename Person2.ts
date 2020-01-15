export class Person2{
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

let per=new Person2('Aniket','Molwane');
console.log(per);