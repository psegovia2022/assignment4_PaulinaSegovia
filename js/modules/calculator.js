// ADD A PRIVATE FUNCTION CALLED CALCULATE

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

// SUBTRACT FUNCTION

// MULTIPLY FUNCTION

// DIVIDE FUNCTION

// EXPORT THE FOUR PUBLIC FUNCTIONS


var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var result;
export default function calculator(number1, number2) {
    
if (operator === '+') {
    result = number1 + number2;
 }
 else if (operator === '-') {
    result = number1 - number2;
 }
 else if (operator === '*') {
    result = number1 * number2;
 }
 else {
    result = number1 / number2;
 }
}
  
// console.log(`${number1} ${operator} ${number2} = ${result}`);
 
//  console.log(calculator(number1, number2));

 