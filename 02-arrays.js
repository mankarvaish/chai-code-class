const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);  //flash ///not suggested to use this method 

const all_heros = marvel_heros.concat(dc_heros) //when using concat we have to give a new variable
// console.log(all_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]  //can be used when there are more than 2 variables
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))  //asking is hitesh an array where "Hitesh" is a string
console.log(Array.from("Hitesh"))  //comverting hitesh from string into an array using form property
console.log(Array.from({name: "hitesh"})); //inresting // the array cannot be converted from inside the object{}

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of returens a new array from a set of arrays
