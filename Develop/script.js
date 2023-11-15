// Assignment code here


// set variables and conditionals for 
// set conditionals for length of 8 < and > 128
function generatePassword() {
  var passwordLength = parseInt(window.prompt("Choose your password length, it must be between 8 and 128 characters"));
  if (passwordLength < 8 || passwordLength > 128 ) {
    return "Password is not the correct length for Generation";
  };
  if (isNaN(passwordLength)) {
    return "Input must be a number";
  };

  var includeLowerCase = window.confirm("Include lowercase chars in password?");
  var inclueUpperCase = window.confirm("Include uppercase chars in password?");
  var includeSpecial = window.confirm("Include special chars in password?");
  var includeNumber = window.confirm("Include numbers in password?");

  if (!includeLowerCase && !inclueUpperCase && !includeSpecial && !includeNumber) {
    return "You need to at least pick one character type";
  };

  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
  var numberChar = "0123456789";

  var passwordChar = "";
  if (includeLowerCase) passwordChar += lowerCaseChar;
  if (inclueUpperCase) passwordChar += upperCaseChar;
  if (includeSpecial) passwordChar += specialChar;
  if (includeNumber) passwordChar += numberChar;  


};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
