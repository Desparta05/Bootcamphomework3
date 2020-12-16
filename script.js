// Assignment Code
var length;
var numberCon;
var characterCon;
var uppercaseCon;
var lowercaseCon;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

function generatePassword() {

  document.getElementById("generate").values = password;
  // Prompts after Generate is clicked.
  length = parseInt(prompt("Choose from 8 to 128 Characters!"));
  
  if (!length) {
      alert("Value Needed. Try again!");
  } else if (length < 8 || length > 128) {
      
      length = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once user input is validated
      numberCon = confirm("Numbers?");
      characterCon = confirm("Special characters?");
      uppercaseCon = confirm("Uppercase letters?");
      lowercaseCon = confirm("Lowercase letters?");
  };
  
  //Adds generated password to text area
  document.getElementById("password").textContent = ps;
  
  
  for (var i = 0; i < enter; i++) {
    var generatePassword = choices[Math.floor(Math.random() * choices.length)];
    password.push(generatePassword);
  }
 }

 function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}

