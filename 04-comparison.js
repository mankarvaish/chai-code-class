console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined >0); // undefined no matter comparred with gives false as an output.

// the reason is that an equality check == and comparisons <> <= >= work differently.
// comparisons convert null to a number, treating it as 0.
// thats why (3)null >= 0 is true and (1)null > 0 is false. 
// this type of conversions can confused you hence you have to avaoid using them."clean code is the priority".

//********** summary//*********** 

// Categories of data types- Primitive & Non-Primitive

// Primitive ( Call by Value)
// 7 types- String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false

const outsideTemp = null
let userEmail; //decalring a variable but keeoing the value undefined //

const id= Symbol('123')
const anotherId = Symbol('123')  // even if the value is same still the output is different as symbol is used for defining uniqueness.

console.log(id===anotherId);

// const bigNumber = 213546543134643234n

// Non-Primitive (Refernce Type)
// 3 types- Arrays, Objects, Function.

const heros = ["ironman", "spiderman",]
let myObj = {
    name: "vaishnavi",
    age: 32,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

