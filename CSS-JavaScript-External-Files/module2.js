export class User2{
    constructor(n,a){
        this.name = n;
        this.age = a;
    }
}

export function getName2(user){
    document.getElementById("emptydiv").innerHTML += user.name;
}

export function getAge2(user){
    document.getElementById("emptydiv").innerHTML += user.age;
}