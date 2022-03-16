//STEP 1
// 1.	Write a function called halfNumber() that accepts one argument (a number), 
// divide it by 2, and return the result.
//  It should log a string like "Half of 5 is 2.5.".

// function halfNumber(number) {
//     "use strict";
//     return String("Half of " + number + " is " + (number / 2) + ".");
// }
// console.log(halfNumber(10));
// console.log(halfNumber(9));
// console.log(halfNumber(7));
// console.log(halfNumber(4));


//STEP 2
// 2.	Write a function called squareNumber() that accepts one argument (a number), 
// square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

// function squareNumber(number) {
//     "use strict";
//     return String("The result of squaring the number " + number + " is " + (number * number) + ".");
// }
// console.log(squareNumber(2));
// console.log(squareNumber(10));
// console.log(squareNumber(7));
// console.log(squareNumber(4));



//STEP 3
// 3.	Write a function called percentOf() that accepts two numbers, 
// figure out what percent the first number represents of the second number, 
// and return the result. It should log a string like "2 is 50% of 4."

// function percentOf(num1, num2) {
//     "use strict";
//  var percent = ((num1 * 100) / num2);
//   return String(num1 + " is " + percent + "% of " + num2 + ".");
// };

// console.log(percentOf(2, 4));
// console.log(percentOf(10, 1000));
// console.log(percentOf(7, 70));
// console.log(percentOf(4, 80));




//STEP 4
// 4.	Write a function called findModulus() that accepts two numbers. 
// Within the function write a statement that returns the modulus of the first 
// // and second parameters.
// //  It should log a string like "2 is the modulus of 4 and 10."

// function findModulus(num1, num2) {
//     "use strict";
//     var divisionResult = Math.floor((num1 / num2));
//     var mult = (divisionResult * num2);
//     var modulus = ((num1) - mult);
    
//     return String(modulus + " is the modulus of " + num1 + " and  " + num2 + ".");
// };

// console.log(findModulus(17, 5));




// //STEP 5
// 5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. 
// Those numbers should be collected using a prompt and the numbers should be delimited by commas. 
// Once the values are collected, find the sum of all of the numbers combined. 
// You will need to use a function, loop, arguments object, 
// and several type conversion global functions to accomplish this task.

function calculate(numbers) {
    "use strict";
    var base = Number(prompt("Enter a numbers."));
    var base2 = Number(prompt("Enter another number."));
    for (var i = 1; i < base.lenght; i++) {
       base += Number(base[i]);
    }
return String(base + base2);
}

