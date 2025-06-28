const accountId = 1453201
let accountEmail = "vaish@google.com"
var accountPassword = "12345"
accountCity="Pune"

// accountId = 2// not allowed

accountEmail = "vm@vm.com"
accountPassword = "125880"
accountCity = "jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])