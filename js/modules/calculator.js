// ADD A PRIVATE FUNCTION CALLED CALCULATE

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

// SUBTRACT FUNCTION

// MULTIPLY FUNCTION

// DIVIDE FUNCTION

// EXPORT THE FOUR PUBLIC FUNCTIONS


const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
let result;
export default function calculator(number1, number2) {
    
if (operator == '+') {
    result = number1 + number2;
     return result;
 }
 else if (operator == '-') {
    result = number1 - number2;
return result;
 }
 else if (operator == '*') {
    result = number1 * number2;
return result;
 }
 else {
    result = number1 / number2;
return result;
 }
}
  

 
 console.log(calculator(number1, number2));
