// This is day 5 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Functions"


//Activity 1: Function Declaration

// 1. Write a function to check if a number is even or odd.

function evenOrOdd(num) {
    if(num % 2 === 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(evenOrOdd(5));  // Odd

// 2. Write a function to calculate the square of a number.

function square(num) {
    return num * num;
}

console.log(square(5));  // 25


//Activity 2: Function Expression

// 1. Write a function expression to find the maximum of two numbers.

const maxOfTwo = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maxOfTwo(5, 10));  // 10

// 2. Write a function expression to concatenate two strings.

const concatStrings = function(str1, str2) {
    return str1 + ' ' + str2;
}

console.log(concatStrings('Hello', 'World'));  // Hello World


//Activity 3: Arrow Function

// 1. Write an arrow function to find the sum of two numbers.

const sumOfTwo = (num1, num2) => num1 + num2; // single line arrow function
const sumOfTwonums = (num1, num2) => {          // multi-line arrow function
    return num1 + num2;
}

console.log(sumOfTwo(5, 10));  // 15
console.log(sumOfTwonums(5, 10));  // 15

// 2. Write an arrow function to check if string contains a specific character.

// const containsChar = (str, char) => str.includes(char);
const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter('Hello', 'e'));  // true
console.log(containsCharacter('Hello', 'z'));  // false


//Activity 4: Function Parametersd and default values

// 1. Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(num1, num2 = 2) {
    return num1 * num2;
}

console.log(product(5, 10));  // 50
console.log(product(5));  // 10 (default value is 2, so 5 * 2 = 10)

// 2. Write a function that takes a person's name and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet('Abhishek', 22));  // Hello John, you are 25 years old.
console.log(greet('Abhi'));  // Hello Jane, you are 18 years old.


//Activity 5: Higher Order Functions

// 1. Write a high order function that takes a function and a number, and calls the function many times.

function callManyTimes(function1, num){
    for(i = 1; i <= num; i++){
        function1();
    }
}

function message(){
    console.log("Hello World");
}

callManyTimes(message, 10);

// 2. Write a high order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result..

function applyFunctions(function1, function2, value){
    return function2(function1(value));
}

function squareNumber(num){ // function1
    return num * num;
}

function doubleNumber(num){ // function2
    return num * 2;
}

console.log(applyFunctions(squareNumber, doubleNumber, 5));  // 50
