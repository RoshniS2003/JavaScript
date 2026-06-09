const flower = ["rose", "sunflower", "lotus"]
const colours = ["red", "pink", "white"]
// flower.push(colours)  // Array inside array
// console.log(flower);
// console.log(flower[3][1]);

// better format
// const items = flower.concat(colours)
// console.log(items);

// best and easy
// const items = [...flower, ...colours]
// console.log(items);

// console.log("====================>>");
// const arrNum = [1, 2, [3, 4, 5], 6, 7, [8, 7, [5, 3, 0]]]
// const arrNum1 = arrNum.flat(Infinity)
// console.log(arrNum1);

console.log("----------------->>>>");
console.log(Array.isArray("Roshni"));
console.log(Array.from("Roshni"));
console.log(Array.from({name :"Roshni"}));

console.log("----------------->>>");
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1 , score2 , score3));


