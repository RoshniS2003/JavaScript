// execution one by one:

// console.log("R");
// console.log("A");
// console.log("N");
// console.log("I");

function myFun(){
  console.log("R");
  console.log("A");
  console.log("N");
  console.log("I");
}

// myFun  // reference
myFun()  // execution




console.log("1st method------------------------->>>>");

// 1st Method
function addTwoNumbers(num1 , num2){   // function define & value num1 , num2 is a parameter
    console.log(num1 + num2); 
}
addTwoNumbers()  //NaN (no arguments)
// addTwoNumbers(3, "a")    // 3a
// addTwoNumbers(3, "5")    // 35
addTwoNumbers(3 , 2)   // 5  :--->> function call (arguments pass)
const result = addTwoNumbers(3 , 2)
console.log("Result=",result);  // undefined



console.log("2nd method------------------------>>>>");

// 2nd Method
function addTwoNum(num1 , num2){
    let result1 = num1 + num2
    return result1
    // return num1 + num2
    console.log("rani");  // not execute...its execute before return value
    
}
const result1 = addTwoNum(3 , 2)
console.log("Result=",result1); 


console.log("------------------------->>>>");

function loginUserMessage(username){
    return `${username} just logged In`
}
console.log(loginUserMessage("Roshni"))
console.log(loginUserMessage(""))   // empty
console.log(loginUserMessage())  // undefined
loginUserMessage("Roshni")   // its says return only value.. not to print the msg


console.log("------------------------->>>>");

function loginUserMessage1(username){
    if (username === undefined) {     // !username
        console.log("please enter username"); 
        return
    }
    return `${username} just logged In`   // using return word its line is not print
}
console.log(loginUserMessage1())



// console.log("------------------------->>>>");

// function loginUserMessage1(username = "roshni"){
//     if (username === undefined) {     // !username
//         console.log("please enter username"); 
//         return
//     }
//     return `${username} just logged In`   // using return word its line is not print
// }
// console.log(loginUserMessage1("Rani"))