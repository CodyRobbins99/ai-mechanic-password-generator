// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordString = '';
var emptyArray = [];
var passwordLength;

// Password Length Function 
var lengthVar = function() {
  passwordLength = prompt("How many characters would you like in your password? Please enter a number between 8 and 128.");

  passwordLength = parseInt(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  else {
    alert("That is not a valid entery! Please try again!");
    lengthVar();
  }
  lowercaseVar();
};

// Lowercase Letters Function 
var lowercaseVar = function () {
  var lowercaseConfirm = confirm("Would you like lowercase letters in your password? Please click 'OK' for yes or 'Cancel' for no.");

  if (lowercaseConfirm) {
    alert("Roger that, I'll tell the AI mechanic in charge of building your password to add some lowercase letters!");
    for(let i = 97 ; i <= 122; i++) {
      emptyArray.push(i);
    }
    return true;
  }
  else {
    alert("Roger that, I'll tell the AI mechanic in charge of building your password to hold off on the lowercase letters!");
    return false;
  }
};

// Uppercase Letters Function
var uppercaseVar = function () {
  var uppercaseConfirm = confirm("How about uppercase letters? Please click 'OK' for yes or 'Cancel' for no.");

  if (uppercaseConfirm) {
    alert("The AI mechanic loves working on uppercase letters, he'll be pleased to hear this!");
    for(let i = 65; i <= 90; i++) {
      emptyArray.push(i);
    }
    return true;
  }
  else {
    alert("The AI mecanic loves working on uppercase letters, I'm sure this news will be sad for him to hear!");
    return false;
  }
};

// Numbers Function 
var numbersVar = function() {
  var numbersConfirm = confirm("How do you feel about numbers in your password? Click 'OK' and we'll be sure to add some in. Otherwise, click 'Cancel'.");

  if (numbersConfirm) {
    alert("There's nothing an AI mechanic knows better than numbers! Your password is in good hands!");
    for (let i = 48; i <= 57; i++) {
      emptyArray.push(i);
    }
    return true;
  }
  else {
    alert("There's nothing an AI mechanic knows better than numbers! Your password will definitely be missing out!");
    return false;
  }
};

// Symbols Function
var symbolsVar = function () {
  var symbolsConfirm = confirm("Lastly, would you like the AI mechanic to throw in any symbols? You know the deal on 'OK' and 'Cancel' by now.");

  if (symbolsConfirm) {
    alert("Wow! You're really making the AI mechanic work until the last minute huh? I'll let him know!");
    for( let i = 33; i <= 46; i++) {
      emptyArray.push(i);
    }
    for( let i = 58; i <= 64; i++) {
      emptyArray.push(i);
    }
    return true;
  }
  else {
    alert("I'm sure the AI mechanic will enjoy a chance to catch his robot equivalent of breath! I'll be sure to pass on the message!");
    return false;
  }
}

//Function To Generate Password
var generatePassword = function() {
  for( var i = 0; i < passwordLength; i++) {
    var newChar = String.fromCharCode(emptyArray[Math.floor(Math.random() * emptyArray.length)]);
    passwordString += newChar;
  }
  return passwordString;
}

// Write Password To The #password Input
function writePassword() {

  var passwordCriteriaArray = [];
  passwordCriteriaArray.push(lengthVar);
  passwordCriteriaArray.push(lowercaseVar);
  passwordCriteriaArray.push(uppercaseVar);
  passwordCriteriaArray.push(numbersVar);
  passwordCriteriaArray.push(symbolsVar);

  // For Loop To Get Password Criteria
  for( var i = 0; i < passwordCriteriaArray.length; i++) {
    passwordCriteriaArray[i]();
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
};

// Add Event Listener To Generate Button
generateBtn.addEventListener("click", writePassword);
