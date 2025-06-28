// dates in js mdn
//Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString()); //Thu Jun 19 2025 18:07:55 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Thu Jun 19 2025
console.log(myDate.toJSON());  //2025-06-19T12:37:55.894Z
console.log(myDate.toLocaleString()); //19/6/2025, 6:07:55 pm
console.log(myDate.toLocaleDateString()); //19/6/2025
console.log(myDate.toISOString()); //2025-06-19T12:56:21.833Z/
console.log(typeof myDate) //object

let myCreatedDate = new Date(2025, 0 , 23)
// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// let myCreatedDate = new Date("2025-01-14") 
// let myCreatedDate = new Date("01-14-2025") 
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now()/1000); // ans in decimal
console.log(Math.floor(Date.now()/1000));  //gives the lowest value and removes the decimal

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// ` new date is ${newDate.getDate()} and new month is ${newDate.getMonth()}` //not sure of this code need to check later

console.log (newDate.toLocaleString('default',{
    weekday:"long",  //sat gives saturday
}))