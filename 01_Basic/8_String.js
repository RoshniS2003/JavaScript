const name = "Roshni"
const age = 18
// console.log(name + age + " value");  // not readable
console.log(`Hello My name is ${name} and I'm ${age} years old.`);

const fullName = new String("Roshni")  //also declared like this
console.log(fullName);

console.log(fullName[0]);
console.log(fullName.__proto__);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(2));
console.log(fullName.indexOf('i'));

const newstring = fullName.substring(0,3)
console.log(newstring);

const newstring1 = fullName.slice(-6,3)
console.log(newstring1);

const newStringOne = "    Roshni   "
console.log(newStringOne)
console.log(newStringOne.trim());  // trim remove the space

const url = "https://roshni&08.com"
console.log(url.replace("&" , "_"));
console.log(url.includes("roshni"));
console.log(url.includes("rani"));

const strName = new String("roshni-08-com")
console.log(strName.split("-"));

