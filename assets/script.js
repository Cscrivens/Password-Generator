// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var length = parseInt(prompt('Enter the length of the password (between 8 and 128):'));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
      return 'Invalid password length. Please enter a number between 8 and 128.';
  }

  console.log('Password length:', length);

  // Confirm character types
  var includeLowercase = confirm('Include lowercase characters?');
  var includeUppercase = confirm('Include uppercase characters?');
  var includeNumeric = confirm('Include numeric characters?');
  var includeSpecial = confirm('Include special characters?');

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    return 'At least one character type must be selected.';
      
  }

  console.log('Include lowercase:', includeLowercase);
  console.log('Include uppercase:', includeUppercase);
  console.log('Include numeric:', includeNumeric);
  console.log('Include special:', includeSpecial);

  // Generate the password
  var password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  // Display the generated password ret
  return password;

}

// Function to generate a random password based on selected criteria
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()_-+=<>?';

  var allChars = '';
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  var password = '';
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
  }
  console.log("the2ndpasswordis"+password)
  return password;
}

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
