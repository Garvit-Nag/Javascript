const accountID = 14456 // for constants
let accountEmail = "garvit@gmail.com" // for variables
var accountPassword = "1234" // we dont use this for variables because of block and functional scope issues
accountCity = "Jaipur" // bad way for variables also avoid
let accountState;
// acountID = 2 // not allowed

accountEmail = "Garvitng@gmail.com"
accountPassword = "5587"
accountCity = "Chandigarh"

console.table([accountID, accountEmail, accountPassword, accountCity]);

console.log(accountState); // prints undefined values