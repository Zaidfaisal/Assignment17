// string methods

// q1
// // Get user input for first name
// var firstName = prompt("Please enter your first name: ");

// // Get user input for last name
// var lastName = prompt("Please enter your last name: ");

// // Merge first and last name into fullName
// var fullName = firstName + " " + lastName;

// // Greet the user using their full name
// alert(`Hello, ${fullName}!`);

// q2
// Get user input for favorite mobile phone model
// var mobileModel = prompt("Please enter your favorite mobile phone model: ");
// // Find the length of the user input
// var modelLength = mobileModel.length;
// // Display the length of the user input in the browser
// document.write(`You entered: ${mobileModel}<br>`);
// document.write(`The length of your input is: ${modelLength}`);

// q3
// // Define the word "Pakistani"
// var word = "Pakistani";
// // Find the index of the letter "n" in the word
// var index = word.indexOf("n");
// // Display the result in the browser
// document.write(`The index of letter "n" in the word "Pakistani" is: ${index}`);

// q4
// // Define the word "Hello World"
// var word = "Hello World";
// // Find the last index of the letter "l" in the word
// var lastIndex = word.lastIndexOf("l");
// // Display the result in the browser
// document.write(`The last index of letter "l" in the word "Hello World" is: ${lastIndex}`);

// // q5
// // Define the word "Pakistani"
// var word = "Pakistani";
// // Find the character at the 3rd index in the word
// var charAt3rdIndex = word.charAt(2);
// // Display the result in the browser
// document.write(`The character at 3rd index in the word "Pakistani" is: ${charAt3rdIndex}`);

// q6
// // Get user input for first name
// var firstName = prompt("Please enter your first name: ");
// // Get user input for last name
// var lastName = prompt("Please enter your last name: ");
// // Merge first and last name into fullName using concat()
// var fullName = firstName.concat(" ", lastName);
// // Greet the user using their full name
// alert(`Hello, ${fullName}!`);

// q7
// // Define the word "Hyderabad"
// var word = "Hyderabad";
// // Replace "Hyder" with "Islam" in the word
// var newWord = word.replace("Hyder", "Islam");
// // Display the result in the browser
// document.write(`Original word: ${word}<br>`);
// document.write(`Word after replacement: ${newWord}`);

// q8
// // Define the original string
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// // Replace all occurrences of "and" with "&" in the string
// var newMessage = message.replace(/and/g, "&");
// // Display the result in the browser
// document.write(`Original string: ${message}<br>`);
// document.write(`String after replacement: ${newMessage}`);

// q9
// // Define the original string
// var str = "472";
// // Convert the string to a number
// var num = parseInt(str);
// // Display the values and types in the browser
// document.write(`Original string: ${str} (Type: ${typeof str})<br>`);
// document.write(`Converted number: ${num} (Type: ${typeof num})`);

// q10
// // Get user input
// var userInput = prompt("Please enter a string: ");
// // Convert the input to capital letters
// var capitalInput = userInput.toUpperCase();
// // Display the result in the browser
// document.write(`Original input: ${userInput}<br>`);
// document.write(`Input in capital letters: ${capitalInput}`);

// q11
// var userInput = prompt("Please enter a string: ");
// var titleCaseInput = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// document.write(`Title case: ${titleCaseInput}`);

// q12
// var num =35.36;
// var string = num.toString()
// console.log(`num:`+num,`string:`+string)

// q13
// var username = prompt("Please enter a username: ");
// var specialSymbols = /[@.,!]/;
// if (specialSymbols.test(username)) {
//   alert("Invalid username. Please enter a valid username without special symbols.");
//   username = prompt("Please enter a username: ");
// } else {
//   console.log("Username:", username);
//   document.write("Username: " + username);
// }

// q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search: ");
// var userinputlower = userInput.toLowerCase()
// var found = false;
// for(i=0;i<A.length;i++){
//     if (A[i].toLowerCase().includes(userinputlower)) {
//         found = true;
//         break;
//       }
// }
// if (found) {
//     alert(`Yes, "${userInput}" is found in the list!`);
//   } else {
//     alert(`Sorry, "${userInput}" is not found in the list.`);
//   }

// q15
// var password = prompt("Enter a password: ");
// var validPassword = true;

// q16
// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write("Array elements: ");
// for (var i = 0; i < universityArray.length; i++) {
//   document.write(universityArray[i] + " ");
// }

// q17
// var character = Pakistan;
// var lastword = character[character.lenght-1]
// document.write("Last character: " +lastword);

// q18
// var str = "The quick brown fox jumps over the lazy dog";
// var lowerCaseStr = str.toLowerCase();
// var words = lowerCaseStr.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }
// document.write("Number of occurrences of 'the': " + count);







