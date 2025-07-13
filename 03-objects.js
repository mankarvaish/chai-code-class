//signleton

//object literals

const mySym = Symbol("key1")

const JSUser = {
    name : "vaishnavi",
    "full name" : "Vaishnavi Mankar",
    [mySym] : "mykey1",
    age: 18,
    location :"Jaipur",
    email: "hitesh@abc.com",
    isLoggedIn : false,
    lastLoginDaays : ["Monday", "Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]); //accessing the object as a string
// console.log(JSUser["full name"]); 
// console.log(mySym);

JSUser.email = "vaish@abc.com"
// Object.freeze(JSUser)
JSUser.email = "xyz@abc.com"
// console.log(JSUser);


JSUser.greeting = function(){
    console.log("Hello JS user");   
}

JSUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);   
}
console.log(JSUser.greeting());
console.log(JSUser.greetingtwo());
