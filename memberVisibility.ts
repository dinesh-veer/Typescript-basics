class person{
    constructor(private firstName:string,private lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    setFirstName(firstName:string){
        this.firstName=firstName;
    }
    setLastName(lastName:string){
        this.lastName=lastName;
    }

    private getName(){
        console.log(this.firstName+"  "+this.lastName);
    }
    public getFullName(){
        this.getName();
    }

}

let aperson:person=new person('Dinesh','Veer');
console.log("FirstName: " + aperson.getFirstName());
console.log("LastName: " +aperson.getLastName());
aperson.getFullName();