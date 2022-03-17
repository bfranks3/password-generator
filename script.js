// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordLength = window.prompt("Please choose a length for your password, minimum of 8 characters or maximum of 128 characters.")
  var includedCharacters = []
  var lowercase = ["a", "b", "c"]
  var uppercase = ["A", "B", "C"]
  var numeric = ["1", "2", "3"]
  var special = ["!", "@", "#"]

  if (passwordLength < 8 || passwordLength > 128) {
    return window.alert("Please pick a number between 8 and 128 characters.")
  }
  var isLowercase = window.confirm("Would you like to use lowercase letters?");
  if (isLowercase) {
    includedCharacters = includedCharacters.concat(lowercase)
  }
  var isUppercase = window.confirm("Would you like to use uppercase letters?");
  if (isUppercase) {
    includedCharacters = includedCharacters.concat(uppercase)
  }
  var isNumeric = window.confirm("Would you like to use numeric characters?");
  if (isNumeric) {
    includedCharacters = includedCharacters.concat(numeric)
  }
  var isSpecial = window.confirm("Would you like to use special characters?");
  if (isSpecial) {
    includedCharacters = includedCharacters.concat(special)
  }
  // get random characters from includedCharacters array
  // get random characters until we are at password length that the user selects
  // add each random character together
  // return above line 

  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = includedCharacters[Math.floor(Math.random() * includedCharacters.length)]
    password = password + randomCharacter
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
