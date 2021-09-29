export default class User{
    constructor(n,a){
        this.name = n;
        this.age = a;
    }
}

export function getName(user){
    document.getElementById("idkdude").innerHTML += user.name;
}

export function getAge(user){
    document.getElementById("idkdude").innerHTML += user.age;
}