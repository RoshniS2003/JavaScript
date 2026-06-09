const accountID = 123456
let accountName = "Rani"
var accountState = "Jaipur"
accountPassword = "123123"
let accountCity = "Bhilai"
let accountEmail;  // ------>> variable is declared but value is not defined so it gives undefined

// accountID = 890      ----->>>> not allowed
// console.log(accountID);

accountName = "Roshni"
accountState = "Goa"
accountPassword = "123456"


console.table([accountID , accountName , accountState , accountPassword ,accountCity, accountEmail])


/*  prefer not to use var
because of issues in block scope {} and functional scope */
