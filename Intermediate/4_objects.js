const objUser = new Object()    // singleton objects
// const objUser = {}       // non-singleton objects
console.log(objUser);

objUser.name = "roshni"
objUser.id = "rani@123"
objUser.IsloggedIn = false

console.log(objUser);
console.log("---------------------------------->>>>");

const regularUser={
    email:"roshni123@gmail.com",
    fullname:{    // fullname and userfullname is a object
        userFullName:{
            firstNmae:"Roshni",
            lastName:"Sahu"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname.userFullName);

console.log("---------------------------------->>>>");
const obj1 = {1:"A" , 2:"B"}
const obj2 = {3:"C" , 4:"D"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)  // {} is a target and obj1 , obj2 is a source
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

console.log("============================>>>>>");
console.log(objUser);  // in line no. 1 
console.log(Object.keys(objUser));
console.log(Object.values(objUser));
console.log(Object.entries(objUser));  // array inside array And "key = values" pairs
console.log(objUser.hasOwnProperty('IsloggedIn'));
