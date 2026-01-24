 //                            Q1

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome ");


//               Q2


// var mobileModel = prompt("Enter your favorite mobile phone model:");

// var lengthOfInput = mobileModel.length;

// alert("The length of your input is: " + lengthOfInput);

//             Q3


// var word = "Pakistani";

// var index = word.indexOf("n");

// console.log("The index of letter 'n' in the word 'Pakistani' is: " + index);


//                    Q4


// var text = "Hello World";

// var lastIndex = text.lastIndexOf("l");

// console.log("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);



//                   Q5



// var word = "Pakistani";

// var index = word.charAt(3);

// console.log("The character at 3rd index in the word 'Pakistani' is: " + index);


//                      Q6



// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "  Welcome");



//                Q7



// var city = "Hyderabad";

// var modify = city.replace("Hyder", "Islam");


// console.log("City after replacement: " + modify);


//                   Q8

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// console.log(newMessage)


//                   Q14


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");


// var searchItem = userInput.toLowerCase();

// var found = false;


// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === searchItem) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(searchItem + " is available at our bakery.");
// } else {
//   alert("We are sorry. " + searchItem + " is not available at our bakery.");
// }



//                       Q15

//                    Not Solve 



//                       Q16


// var university = "University of Karachi";

// var arr = university.split("");

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


//                      Q17

// var userInput = prompt("Enter any text:");

// if (userInput.length > 0) {

//   var lastChar = userInput.charAt(userInput.length - 1);
//   alert("The last character is: " + lastChar);
// } else {
//   alert("You did not enter any text!");
// }

//                    Q18



// var str = "The quick brown fox jumps over the lazy dog";

// var lowerStr = str.toLowerCase();

// var words = lowerStr.split(" ");

// var count = 0;

// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// console.log('The word "the" occurs ' + count + ' times.');
