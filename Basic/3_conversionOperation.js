let score = 33
let score1 = "33abc" // "33"

console.log(typeof score); // number
console.log(typeof score1);  // string

let valueInNumber = Number(score1)
console.log(valueInNumber);  // NaN (Not a Number)
console.log(typeof valueInNumber);  // number

//Converts into number
// "33" => 33
// "33abc => NaN
// Null => 0
// undefined => NaN
// true => 1
// false => 0
// "Number" => number

console.log("========================>");
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// convets into boolean
// 1 => true
// 0 => false
// "Rani" => true
//Notes + Investigation Study

console.log("-------------------------->>");
let Num=11
let someNum = String(Num)
console.log(someNum);
console.log(typeof someNum);


