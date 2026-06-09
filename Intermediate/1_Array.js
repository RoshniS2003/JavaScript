// array size are resizeable(badh sakti)
const myArr = [10,20,30,40]
const flowName = ["Rose" ,"Sunflower" , "lotus"]
console.log(myArr[1]);
console.log(typeof myArr);


// also declared like this
const myArr1 = new Array(10, 20, 30, 40,50)
console.log(myArr1[3]);

// Array methods
myArr.push(50)   // Insert into the last element
myArr.pop()  // delete the last element
console.log(myArr);

myArr.unshift(100)  // Insert into the first place
myArr.shift()  //delete the first place of element
console.log(myArr);

// myArr.includes(30)
console.log(myArr.includes(30))  // value is present or absent
console.log(myArr.indexOf(10))  // value index find & value is presen or not check
console.log(myArr.indexOf(19)) 

// slice , splice
console.log("----------->>>");
console.log("A" , myArr);  // original value

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);
 
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" , myArr);

