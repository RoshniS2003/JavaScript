// non-primitive datatypes
// string
const student = ["Rani" , "Roshni" ,"pinku" ,"payal"]
let myobj = {
     name : "Roshni",
     age: 20
}

// function
// function(){}  // function is declared inisde the variable
const myFunction = function() {
    console.log("Hello Roshni"); 
}
console.log(typeof myFunction);  // object function

// pimitive
const isLoggedIn = false
const outSideTemp = null
let email;
console.table([isLoggedIn , outSideTemp, email ])
console.log(typeof outSideTemp);

// using Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
console.log(id === anotherId);

// bigInt
const bigNumber = 1234778887634252673n
console.log(bigNumber);

// typeof operator & Return type of variables in JS
// Primitive Datatypes:
    // Number => number
    // String => string
    // Boolean => boolean
    // Null => Object
    // Undefined => undefined
    // BigInt => BigInt
    // Symbol => Symbol

    // // non-promitive datatypes
    // function => object function
     // Array => Object
     // Object => object
