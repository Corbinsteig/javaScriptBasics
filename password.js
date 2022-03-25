
console.log("Welcome to the password validator tool")
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Enter your user password. ", function(input){
    tokens = input.split(' ');
const password = tokens[0];
let extraCharacters = password.length
if (password.length < 10 )
console.log("Password length unsuccessful, your password must be at least 10 characters long")
else if(password.length >= 10)
console.log("Password length successful");
// could not figure out how to do the bottom code correctly.
//  else if(extraCharacters == (".?!"))
// console.log("Contains a .?!");
// else if(extraCharacters != (".?!"));
// console.log('Password MUST contain at least one of the following characters. ".?!" ');

// console.log(`${password.length}`)
reader.close()

    // mathSymbol = tokens[0];
    // num1 = Number(tokens[1]);
    // num2 = Number(tokens[2]);

    // console.log('mathSymbol', mathSymbol);
    // console.log('num1', num1);
    // console.log('num2', num2);

    // reader.close()

});