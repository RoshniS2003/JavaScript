// In memory there are two types :-->>>
// stack (primitive) and heap (non - primitive)

let myEmailName = "roshnisahu@gmail.com"
let anotherEmail = myEmailName
console.log(myEmailName);
console.log(anotherEmail);


console.log("----------------->>>>");
let user1 = {
    email : "roshni@gmail.com" ,
    name : "Roshni",
    age : 18
}
// console.log(user1);

let user2 = user1
user2.name = "Rani"
// console.log(user2);
console.log(user1.name);
console.log(user2.name);
