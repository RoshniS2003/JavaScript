// object literals
// const JSuser = {}  // Empty object
const mykey = Symbol("key1")

const JsUser = {
     name : "roshni",   // key - values
     "full name": "roshni sahu",
     email : "roshni123@gmail.com",
     // mykey : "Systemkey1" 
     [mykey] : "Systemkey1"   // symbol is defined inside []
}
console.log(JsUser);

console.log(JsUser.name);  // not good to use
// console.log(JsUser."full name");
// console.log(JsUser.full name);
console.log(JsUser["full name"]);
console.log(JsUser["name"]);
// console.log(JsUser.mykey);    // not defined like these
console.log(JsUser[mykey]); 


// change the email
JsUser.email = "roshni@gpay.com"
// Object.freeze(JsUser);  // lock
JsUser.email = "roshni@amazon.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingOne = function(){
    console.log(`Hello JS User,${this.name}`);
}
// console.log(JsUser.greeting); // undefined if its use freeze and when its not use freeze then its show function (anonymous)
// console.log(JsUser.greeting());  // greeting is not a function and its use freeze so first comment out
console.log(JsUser.greeting()); // show msg if freeze not use
console.log(JsUser.greetingOne()); 