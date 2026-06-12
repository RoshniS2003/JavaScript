const termp = 43
if (termp === 40) {
    console.log("temp is less than 40");
}
else {
    console.log("temp is greater than 40");
}
console.log("Execute..");


// scope
const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power :${power}`);  
}

// let and const is best to use because value is not access outside 
const score1 = 200
if (score1 > 100) {
    const power = "fly"
    console.log(`user power :${power}`);  // power is define only {}
}
console.log(`user power :${power}`); // const is not defined value outside


const score2 = 200
if (score2 > 100) {
    var power = "fly"
    console.log(`user power :${power}`);  // power is define only {}
}
console.log(`user power :${power}`); 
