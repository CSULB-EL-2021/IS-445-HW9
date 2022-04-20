const Account = require("./accounting");

const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());
