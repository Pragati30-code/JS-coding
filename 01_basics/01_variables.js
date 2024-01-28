const accountId = 144553
let accountEmail = "pragati@google.com"
var accountPassword = "1234"
accountCity = "Delhi"
let accountState;

//accountId = 2 is not allowed

accountEmail = "pp.pp@google.com"
accountPassword = "121212"
accountCity = "jaipur"

console.log(accountId);

/*prefer to use let
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountState,accountCity]);
