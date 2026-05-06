const accountID = 123456
let accountName = "Rani"
var accountState = "Jaipur"
accountPassword = "123123"
let accountEmail;  // ------>> variable is declared but value is not defined so it gives undefined

// accountID = 890      ----->>>> not allowed
// console.log(accountID);

accountName = "Roshni"
accountState = "Goa"
accountPassword = "123456"


console.table([accountID , accountName , accountState , accountPassword , accountEmail])


/*  prefer not to use var
baecause of issues in block scope {} and functional scope */
