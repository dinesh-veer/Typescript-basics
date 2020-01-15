import{Person2} from './Person2';

function echo<T>(value:T):T{
    return value;
}
var vau=echo(4334);
console.log(vau);


class Programmer extends Person2{
}

class Manager extends Person2{  
}

let programmer=new Programmer('Dinesh','Veer');
let manager=new Manager('KICK','Test');

function personEcho<T extends Person2>(person:T ):T{
    return person;
}

console.log(personEcho(programmer));
console.log(personEcho(manager));