// Local scope:--->>>
// let and const is a local scope

// let a = 2;
// var b = 3;
// const c = 5;
// console.log("A=", a);
// console.log("B=", b);
// console.log("C=", c);

console.log("=================================>>>");
// global scope:----->>>>
// var is a function / global scope. 

var c = 100;
// let  a = 100;

if (true) {
    let a = 2;   // a and b value not print(access) in outside 
    const b = 5;
    var c = 3;   // only var value print.its defined inside {} and outside {}
}
// console.log("A=", a);
// console.log("B=", b);
console.log("C=", c);

/* Note : If var is defined inside local and outside global scope
 is print only local scope value */

 /* Note : If let is defined inside local and outside global scope
 is print only global scope value */

 console.log("------------------------------------>>>");
 let a = 400;

 if (true) {
    let a = 10;
    console.log("Inner A=",a);
 }
 console.log("A=",a);
 
 