// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("password must be between 8 and 128 characters");
  var length;
  var lowerCase;
  var upperCase;
  var numbers;
  var specialCharacters;
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharactersArray = ["!", " ” ", "#", "$", "%", "&", " ’ ", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~"];
  var useableCharactersArray = [];

  function passwordLengthCheck(w) {
    if (w >= 8 && w <= 128) {
      length = w;
    } else {
      writePassword()
    }
  }

  function correct() {
    lowerCase = confirm("Do you want to have lowercase?");
    upperCase = confirm("Do you want to have uppercase?");
    numbers = confirm("Do you want to have numbers?");
    specialCharacters = confirm("Do you want to have special characters?");
    console.log(lowerCase, upperCase, numbers, specialCharacters)

    if (lowerCase == false && upperCase == false && numbers == false && specialCharacters == false) {
      correct();
    } else {
      if (lowerCase == true) {
        useableCharacterArray = useableCharactersArray.concat(lowerCaseArray);
        console.log(useableCharactersArray);
      }
      if (upperCase == true) {
        useableCharacterArray = useableCharactersArray.concat(upperCaseArray);
        console.log(useableCharactersArray);
      }
      if (numbers == true) {
        useableCharacterArray = useableCharactersArray.concat(numbersArray);
        console.log(useableCharactersArray);
      }
      if (specialCharacters == true) {
        useableCharacterArray = useableCharactersArray.concat(specialCharactersArray);
        console.log(useableCharactersArray);
      }
      console.log(useableCharactersArray);

    }
  }

 

  passwordLengthCheck(passwordLength)
  correct()
  generatePassword()
  passwordText.value = password;
}

function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 