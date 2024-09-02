const accountId = 938459
let accountEmail = "swastiktimilsina@gmail.com"
var accountPassword = "12345"
accountCity = "Pokhara"
let accountState;

// accountId = 2       Not allowed to change constant(Throws an error)

accountEmail = "random@gmail.com"
accountPassword = "gdsggo"
accountCity = "Surrey"

/*
Prefer not to use var because of some issues with block scopes
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
