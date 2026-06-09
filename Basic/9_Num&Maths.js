const score = 300
console.log(score);

const newScore = new Number(100)
console.log(newScore);
// convert into string
console.log(newScore.toString());
console.log(typeof newScore.toString());
console.log(newScore.toString().length);
console.log(newScore.toFixed(2));

const anotherNum =28.09775
console.log(anotherNum.toPrecision(3));

const hundrends = 10000000
console.log(hundrends.toLocaleString('en-IN'));
console.log(hundrends.toLocaleString());


console.log("------------------------->>>");
// Maths--------->..
console.log(Math);
console.log(Math.abs(-4));   // 4
console.log(Math.round(3.4));   // 3
console.log(Math.round(3.8));    //4
console.log(Math.floor(5.9));    // 5
console.log(Math.ceil(3.3));   // 4
console.log(Math.max(2,5,4,0,7));
console.log(Math.min(2,5,4,0,7));
console.log(Math.random());
console.log(Math.random() * 10);



