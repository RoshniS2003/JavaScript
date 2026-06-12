// This function:---->>>
const user = {
    username: "Roshni",
    price: 999,

    welcomeMsg: function () {
        console.log(`${this.username}, Welcome to websites`);
        console.log(this);
    }
}
// user.welcomeMsg  // no msg print
// user.welcomeMsg()
// user.username = "Rani"
// user.welcomeMsg()
console.log(this);   // {empty}

console.log("===================================>>>>>");

function fun() {
    console.log(this);
}
fun()


function fun1() {
    let username = "rani"
    console.log(this.username);
}
fun1()   // undefined

// object
const fun2 = function () {
    let username = "rani"
    console.log(this.username);
}
fun2()


// Arror function:----->>>

//normal function
function add(a , b){
    return a + b;
}

//Arrow Function
const add = (a, b) => a + b;   // small and clean code and no write to written return

console.log("-------------------------->>>>>");

const fun3 = () => {
    let username = "rani"
    console.log(this.username);
}
fun3()

// Basic
// syntax :-->> () => {}
// Explicit
const addTwoNum = (num1, num2) => {   // use {} so add return
    return num1 + num2
}
console.log("Add=", addTwoNum(2, 3))

// Implicit
const addTwoNum1 = (num1, num2) => (num1 + num2)
console.log("Add=", addTwoNum1(5, 3))

// object written
const addTwoNum3 = (num1, num2) => {username:"rani"}
console.log(addTwoNum3(5, 3))   // undefined

// correct-way
const addTwoNum5 = (num1, num2) => ({username1:"rani"})
console.log(addTwoNum5(5, 3))