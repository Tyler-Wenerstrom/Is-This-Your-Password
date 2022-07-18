var generateBtn = document.querySelector("#generate");
var specialCharacters = "~!@#$%^&*()_+-=";
var integers = "0123456789";
var littleGuys =  "abcdefghhijklmnopqrstuvwxyz";
var bigGuys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword() {
  var charAmount = prompt("How many Characters would you like to use? Must be: 12-128.");
  var numbers = confirm("Include numbers?");
  var lowerCase = confirm("Include LowerCase?");
  var upperCase = confirm("Include UpperCase?");
  var specialChar = confirm("Include Special Characters?");

  var minCount = 0;
  
  var minNumbers = "";
  var minLower = "";
  var minUpper = "";
  var minSpecial = "";

  var functionArray = {
    getnumbers: function() {
      return integers[Math.floor(Math.random() * integers.length)];
    },
    getlowerCase: function() {
      return littleGuys[Math.floor(Math.random() * littleGuys.length)];
    },
    getupperCase: function() {
      return bigGuys[Math.floor(Math.random() * bigGuys.length )];
    },
    getspecialChar: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  };

    
    if (numbers == true) {
      minNumbers = functionArray.getnumbers();
      minCount++;
    };
      
    if (lowerCase == true) {
      minLower = functionArray.getlowerCase();
      minCount++;
    };
    if (upperCase == true) {
      minUpper = functionArray.getupperCase();
      minCount++;
    };
    if (specialChar == true) {
      minSpecial = functionArray.getspecialChar();
      minCount++;
    };

    var yourSecurePassword = "";
    for (let i = 0; i < (parseInt(charAmount) - minCount); i++) {
      var randomNumber = Math.floor(Math.random() * 4);
      yourSecurePassword += randomNumber;
    }

    yourSecurePassword += minNumbers;
    yourSecurePassword += minLower;
    yourSecurePassword += minUpper;
    yourSecurePassword += minSpecial;

    return yourSecurePassword;

  }

  

  

