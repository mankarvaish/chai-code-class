// Stack memory ( Primitive) & Heap Memory (Non-Primitive) 
// stack - changes are updated in the copy

// heap- changes are updated on original value

let myYoutubename = "vaishnavimankar"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email: "user@oggle.com",
    upi:"user@ybl",
}
let userTwo = userOne
userTwo.email = "home@user.com"
console.log(userOne.email);
console.log(userTwo.email);

