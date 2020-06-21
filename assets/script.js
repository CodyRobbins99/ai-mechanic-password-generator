// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Length Function 
var lengthVar = function() {
  var passwordLength = prompt("How many characters would you like in your password? Please enter a number between 8 and 128.");

  passwordLength = parseInt(passwordLength);

  if(passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  else {
    alert("That is not a valid entery! Please try again!");
    lengthVar();
  }
};

// Lowercase Letters Function 
var lowercaseVar = function () {
  var lowercaseConfirm = confirm("Would you like lowercase letters in your password? Please click 'Confirm' for yes or 'Cancel' for no.");

  if(lowercaseConfirm) {
    alert("Roger that, I'll tell the AI mechanic to make sure to add some lowercase letters!");
    return true;
  }
  else {
    alert("Roger that, I'll tell the AI mechanic to hold off on the lowercase letters!");
    return false;
  }
};

// Uppercase Letters Function
var uppercaseVar = function () {
  var uppercaseConfirm = confirm("How about uppercase letters? Please click 'Confirm' for yes or 'Cancel' for no.");

  if(uppercaseConfirm) {
    alert("The AI mechanic loves working on uppercase letters, he'll be pleased to hear this!");
    return true;
  }
  else {
    alert("The AI mecanic loves working on uppercase letters, I'm sure this news will be sad for him to hear!");
    return false;
  }
};

// Numbers Function 
var numbersVar = function() {
  var numbersConfirm = confirm("How do you feel about numbers in your password? Click 'Confirm' and we'll be sure to add some in. Otherwise, click 'Cancel'");

  if(numbersConfirm) {
    alert("There's nothing an AI mechanic knows better than numbers! Your password is in good hands!");
    return true;
  }
  else {
    alert("There's nothing an AI mechanic knows better than numbers! Your password will definitely be missing out!");
    return false;
  }
};

// Symbols Function
var symbolsVar = function () {
  var symbolsConfirm = confirm("Lastly, would you like the AI mechanic to throw in any symbols? You know the deal on 'Confirm' and 'Cancel' by now.");

  if(symbolsConfirm) {
    alert("Wow! You're really making the AI mechanic work until the last minute huh? I'll let him know!");
    return true;
  }
  else {
    alert("I'm sure the AI mechanic will enjoy a chance to catch his robot equivalent of breath! I'll be sure to pass on the message!");
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  lengthVar();
  var characterAmount = lowercaseConfirm.value;
  lowercaseVar();
  var includeLowercase = lowercaseConfirm.checked;
  uppercaseVar();
  var includeUowercase = uppercaseConfirm.checked;
  numbersVar();
  var includeNumbers = numbersConfirm.checked;
  symbolsVar();
  var includeSymbols = symbolsConfirm.checked;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
