//singleton
// non-singleton object

// const tinderUsers = new Object{} //singleton object -empty object
const tinderUser = {}  // non-singleton object -empty object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname :{
            firstname : "vaishnavi",
            lastname: "mankar",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const objt1 = {1: "a", 2:"b"}
const objt2 = {3: "a", 4:"b"}
const objt4 = {5: "a", 6:"b"}


// console.log(objt1, objt2);
// const objt3 = {objt1,objt2} // o/p : { objt1: { '1': 'a', '2': 'b' }, objt2: { '3': 'a', '4': 'b' } }
// const objt3 = Object.assign({}, objt1, objt2, objt4) //empty array used incase if you have many entries

// const returnedTarget = Object.assign(objt1,objt2,objt4)
// console.log(objt1);
// console.log(returnedTarget);

// console.log(returnedTarget === objt1);

const objt3 = {...objt1, ...objt2}
// console.log(objt3);

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //gets output in array
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); //o/p gives all keys and values in separate arrays 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //has property?-true
console.log(tinderUser.hasOwnProperty('isLogged')); //has property?- false


// objects de-structure and JSCON /API