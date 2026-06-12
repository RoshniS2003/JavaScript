function calculateCartprice(num1) {
    return num1
}
console.log(calculateCartprice(1))  // 1
console.log(calculateCartprice(10, 20, 30))  // only 10 print

console.log("=============================>>>");
// num1 print only one value so we use ...(rest , spread) operator
function calculateCartprice1(...num1) {
    return num1
}
console.log(calculateCartprice1(10, 20, 30, 40, 50))  // only 10 print and answer inside array


console.log("=============================>>>");
// num1 print only one value so we use ...(rest , spread) operator
function calculateCartprice2(val1, val2, ...num1) {   // val1 is 10 and val2 is 20
    return num1
}
console.log(calculateCartprice2(10, 20, 30, 40, 50))  // only 10 print and answer inside array


console.log("===========================>>>>>");
// create object: user
const user = {
    username: "roshni",
    age: 20
}
// how object pass in function
function newObj(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
newObj(user)

console.log("===========================>>>>>");
function newObj(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
// we also create object like these
newObj({
    username: "roshni",
        age : 20
})

console.log("===========================>>>>>");
// create array
const myArray = [10, 20, 30, 40, 50]

function returnFun(getArray){
    return getArray[1]
}

console.log(returnFun(myArray));
console.log(returnFun([10, 20, 30, 40, 50]));
