//arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman','nagraj']
console.log(myArr[1]);

// array methods //

// myArr.push(6) //adds 6th character
// myArr.push(7) //adds 7th character
// myArr.pop() //removes last character

// myArr.unshift(9) //shifts this value at the begining of the characters
// myArr.shift()

// console.log(myArr.includes(9)); //boolean output : false
// console.log(myArr.indexOf(9));  //-1 i.e its not present in the data
// console.log(myArr.indexOf(3));  //o/p: 3 as the number is present

const newArr = myArr.join() //coverts array into string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr);

// // slice & splice //
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

// SLICE does not manipulate the originaal array and SPILCE does manipulate the original array

