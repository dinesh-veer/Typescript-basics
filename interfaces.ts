interface Person{
    firstName : String;
    lastName : string;
    greet():string;
}

class TestSample implements Person{
    firstName: String;    lastName: string;
    
    greet():string {
    console.log("Inside greet");
    return "inside";
    }
}

let aperson:Person=new TestSample();
aperson.greet();

let someObject={
    firstName:'Dinesh',
    lastName:'veer',
    greet:()=>'Welcome'
}
aperson=someObject;
