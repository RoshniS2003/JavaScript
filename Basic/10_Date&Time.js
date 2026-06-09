let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDay());

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

console.log("----------->>");
// let myDate1 = new Date(2026, 3 , 10)
let myDate1 = new Date("2026-03-10")
console.log(myDate1.toDateString());

console.log("----------->>");
let myDate2 = new Date(2026, 0 , 10 , 12 ,8)
// let myDate2 = new Date("2026-03-10")
console.log(myDate2.toLocaleString());


