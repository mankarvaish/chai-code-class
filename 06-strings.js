const name = "vaish"
const repoCount = 50

console.log(name + repoCount + "value") // not supposed to use this format

console.log('Hello my name is ${name} and my repoCount is ${repoCount}'); // only this method should be used

const gameName = new String('hitech-hc') //declaring the string using gameName/ string is object in this scenerio
console.log(gameName[0]); // 0th key of gameName i.e h
console.log(gameName.__proto__); //it is a syntax//prototype has methods/ prototype is a study of strings

//methods off strings
console.log(gameName.length); // length of the value characters
console.log(gameName.toUpperCase()); //touppercase is a function/ which converts all the characters Uppercase
console.log(gameName.charAt(2)); // position of character using numbers
console.log(gameName.indexOf('t')); //knowing the position number using the character

const newString = gameName.substring(0,4)  // dividing the variable into substring
console.log(newString); //printing the output : (0)h, (1)i, (2)t, (3)e / last number is not included

const anotherString = gameName.slice(-8,4) //reverse value
console.log(anotherString); // o/p : ite

const newString1 = '   vaish  '   //string has space around it
console.log(newString1); //prints with space
console.log(newString1.trim()); //removes the space and prints it.

const url = "https://hitesh.com/hitesh%20choudary" //declaring the url value

console.log(url.replace('%20','-')); //using replace method/ if the url hass some space it  is filled wwith %20 or similar 
// hence to replace that use replace method.

console.log(url.includes("hitesh")) //include method/ to check is this included- gives booelan value
console.log(url.includes("sundar"))

console.log(gameName.split('-')); //convert string into array by spliting them based on '-' /using split method /'-' is a seperator in this case
