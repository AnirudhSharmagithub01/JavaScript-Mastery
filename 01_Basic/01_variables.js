const accountId = 144556
let accountEmail = "xyx@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;  // its return undefined
//accountId = 434  //its not allowed because const never change once its initialize


accountEmail = "as@as.com"
accountPassword = "939593"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/