const names = " pranjal and aman";
const repoCount =  50;
console.log(`hello my group name is ${names} and our repoCount is ${repoCount}.`);
//console.log(name + repoCount +"value"); - not recommended for mordern time 
//use String interpolation and In JavaScript, it uses template literals (backticks `) and ${}
//*String interpolation* is a way to insert variables or expressions directly inside a string.
// for eg - 
const name = "pranjal";
const age = 20;
console.log(`My name is ${name} and i am ${age} year old.`);


const gameName = new String('Pranjal'); // - String object hai yaha pe
// show output of this on console
//String {'Pranjal'}
// 0: "P"
// 1: "r"
// 2: "a"    -> this are key value pair 
// 3: "n"         where 0 is key and p is its value
// 4: "j"
// 5: "a"
// 6: "l"
// length: 7
// [[Prototype]]: String
// [[PrimitiveValue]]: "Pranjal" 

console.log(gameName[0]);
console.log(gameName[0].__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));


const nameWithSurname = "Pranjal-Jain";
console.log(nameWithSurname.split('-'));



const newString = gameName.substring(0, 4)
console.log(newString);

const anotherstring = gameName.slice(-8,8);
console.log(anotherstring);

const newStringOne = "  pranjal   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = " https://pranjal.com/pranjal%20jain"
console.log(url.replace('%20' , '-'));
console.log(url.includes('sundar'));