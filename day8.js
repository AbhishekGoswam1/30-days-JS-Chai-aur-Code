// This is day 8 of "30 days JavaScript challenge"
// and today's tasks/activities are on "ES6+ Features"


// Activity 1: Template Literals

// 1. Use template literals to create a string that includes variables for a person's name, age.

const name = 'Abhishek';
const age = 23;
console.log(`My name is ${name} and I am ${age} years old.`);

// 2. create a multiline string using template literals.

console.log(`This is a multiline string using template literals.
This is the second line of the string.
This is the third line of the string.`);


// Activity 2: Destructuring

// 1. use array destructuring to extract the first and second elements from an array of numbers.

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second);

// 2. use object destructuring to extract the title and author from a book object.

const book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    year: 2018
}
const {title, author} = book;
console.log(title, author);


// Activity 3: Spread and Rest Operator

// 1. use the spread operator to create a new array that includes all elements from an existing array plus additional elements and log the new array to the console.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];    // ... is spread operator
console.log(arr3);  // Output: [1, 2, 3, 4, 5, 6]

// 2. use the rest operator to accept an arbitrary number of arguments, sum them, and log the result to the console.
const sum = function(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};
console.log(sum(8, 2, 9, 3, 5));  // Output: 27


// Activity 4: Default Parameters

// 1. write a function that accepts two parameters, and returns their product, with the second parameter having a default value of 1. log the result to the console with and without passing a second argument.

const product = function (x, y = 1) {
    return x *  y;
}
console.log(product(11)); // Output: 11 (without passing second argument)
console.log(product(12, 4)); // Output 48 (with passing second argument)


// Activity 5: Enhanced Object Literals

// 1. use enhanced object literals to create an object with methods and properties and log the object to the console.

const person = {
    name: 'Abhishek',
    age: 23,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(person);
person.greet();

// 2. create an object with computed property names based on variables and log the object to the console.

const key = 'name';
const value = 'Abhishek';
const obj = {
    [key]: value,
};
console.log(obj);       // Output: {name: "Abhishek"}
