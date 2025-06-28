// Nums***************
const  score = 400
console.log(score);
console.log(typeof score); // if data type is not mentioned it considers the value is a Number by default


const balance = new Number(100)  //also can be defined from the begining that the number is a Number
console.log(balance);

// also some number methods
console.log(balance.toString()); //converts to string
console.log(balance.toString().length); //tells number of characters the value has

console.log(balance.toFixed()); //how exact the num should be / o/p: 100
console.log(balance.toFixed(2)); // o/p: 100.00

const otherNumber = 123.456
console.log(otherNumber);

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //US standard 
console.log(hundreds.toLocaleString('en-IN'));  //defined indian type

// Maths ************************************

console.log(Math)

console.log(Math.abs(-4)); //turns positive
console.log(Math.abs(4));  //remians positive
console.log(Math.round(4.6)); //roundof o/p: 5
console.log(Math.ceil(4.2)); // o/p: 5
console.log(Math.floor(4.9)); //o/p : 4

console.log(Math.min(4,6,8,10));
console.log(Math.max(4,6,8,10));

console.log(Math.random());  //values between 0 and 1
console.log(Math.random() *10 + 1 ); //avoid 0 as value
console.log((Math.random() *10) + 1 ); //BODMAS - to keep is clear which calculation will be performed first
console.log(Math.floor(Math.random() *10) + 1 );

const min = 10
const max = 20

console.log(Math.random()* (max - min + 1)) // o/p will be between 0 to 1 as empty randon fn will aslways consider values between 0 to 1

console.log(Math.floor(Math.random()* (max-min + 1)) + min);
