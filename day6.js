// This is day 6 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Arrays"


// Activity 1: Array creation and access

// 1. Create an array of numbers from 1 to 5

let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray); // [1, 2, 3, 4, 5]

// 2. Access the first and last element of the array

console.log(numberArray[0]); // 1
console.log(numberArray[numberArray.length - 1]); // 5  (another way to access the last element)
console.log(numberArray[4]); // another way to access the last element using last index


// Activity 2: Array methods (basic - push, pop, shift, unshift)

// 1. Use the push method to add a new element to the end of the array

numberArray.push(6);
console.log(numberArray); // [1, 2, 3, 4, 5, 6]

// 2. Use the pop method to remove the last element of the array

numberArray.pop();
console.log(numberArray); // [1, 2, 3, 4, 5]

// 3. Use the shift method to remove the first element of the array

numberArray.shift();
console.log(numberArray); // [2, 3, 4, 5]

// 4. Use the unshift method to add a new element to the beginning of the array

numberArray.unshift(1);
console.log(numberArray); // [1, 2, 3, 4, 5]


// Activity 3: Array methods (intermediate - map, filter, reduce)

// 1. Use the map method to create a new array where each number is doubled

let newArray = [2, 3, 5, 8, 10];
let doubledArray = newArray.map(num => num * 2);
console.log("Doubled array is: " + doubledArray); // [4, 6, 10, 16, 20]

// 2. Use the filter method to create a new array with only the even numbers

let evenArray = newArray.filter(num => num % 2 === 0);
console.log("Even numbers array is: " + evenArray); // [2, 8, 10]

// 3. Use the reduce method to calculate the sum of all numbers in the array

// let sum = newArray.reduce((acc, num) => acc + num, 0); // using arrow function

let sum = newArray.reduce(function(acc, num) {  // using normal function
    return acc + num;
}, 0);
console.log("Sum of all numbers is: " + sum); // 28


// Activity 4: Array Iteration (for loop, forEach)

// 1. Use a for loop to iterate over the array and print each number

for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

// 2. Use the forEach method to iterate over the array and print each number

newArray.forEach(num => console.log(num));


// Activity 5: Multi-dimensional arrays

// 1. Create a two-dimensional array (matrix) of numbers

let matrix1 = [1, 3, 5, 7, 9, 2, 4, 6, 8];
console.log(matrix1); // [1, 3, 5, 7, 9, 2, 4, 6, 8]

let matrix2 = [[1, 3, 5], [7, 9, 2], [4, 6, 8]];
console.log(matrix2); // [[1, 3, 5], [7, 9, 2], [4, 6, 8]]
console.log(matrix2[2][2]); // 8 (accessing the element at row 3, column 3)

// 2. Access and log a specific element from two-dimensional array

console.log(matrix2[1][0]); // 7 (accessing the element at row 2, column 1)


// Feature Request

// 1. Array manipulation script
// write a script that demonstrates the creation of an array, adding elements to the array, removing using push, pop, shift, unshift.

let fruits = ['apple', 'banana', 'orange', 'mango', 'grapes'];
console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'grapes']

fruits.push('kiwi');
console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'grapes', 'kiwi']

fruits.pop();
console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'grapes']

fruits.shift();
console.log(fruits); // ['banana', 'orange', 'mango', 'grapes']

fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'grapes']


// 2. Array transformation script
// write a script that uses map, filter, reduce methods on an array of numbers.

let numbers = [2, 4, 6, 8, 10];

let squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers: " + squaredNumbers); // [4, 16, 36, 64, 100]

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers: " + evenNumbers); // [2, 4, 6, 8, 10]

let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers: " + sumOfNumbers); // 30


// 3. Array iteration script
// write a script that uses for loop and forEach method to iterate over an array.

let colors = ['red', 'green', 'blue', 'yellow', 'orange'];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(color => console.log(color + " is a beautiful color"));

// 4. Multi-dimensional array script
// write a script that demonstrates the creation and manipulation of a two-dimensional array.

let twoDArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(twoDArray); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(twoDArray[1][2]); // 6 (accessing the element at row 2, column 3)

twoDArray.push([10, 11, 12]);
console.log(twoDArray); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

twoDArray.pop();
console.log(twoDArray); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


// End of day 6 of "30 days JavaScript challenge"
