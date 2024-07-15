// This is day 1 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Variables and Data types"


//Activity 1: Variable Declaration
var num1 = 20;
console.log(num1);
let string1 = 'stringExample';
console.log(string1);


//Activity 2: Constant Declaration
const boolValue = true;
console.log(boolValue);


//Activity 3: Data Types 
console.log(typeof num1);
console.log(typeof(string1));
console.log(typeof(boolValue));

let nullValue = null;
console.log(typeof(nullValue));

let undefinedValue;
console.log(typeof(undefinedValue));

let emptyString = "";
console.log(typeof(emptyString));

const arr = [2,3,4,5,6];
console.log(typeof(arr));
// console.log(arr[1]);

let obj = {name: 'Abhi', age: 22};
console.log(typeof(obj));

let func = function() {}
console.log(typeof(func));


//Activity 4: Reassigning Variables
let variable2 = 223;
console.log('old value: ' + variable2);
variable2 = 224;
console.log('new value: ' + variable2);

//Activity 5: Understanding const keyword
const constant1 = 10;
constant1 = 4; 
//Gives error because we can not change constant values


//Feature Request:
// 1. Variable types colsole log:

var num = 101;
const name = 'Abhishek';
let isSignedIn = true;
const details = {
    course: 'MCA',
    year: '2nd'
};
const studName = ['Abhishek', 'Rohit', 'Harsh'];

console.log(`Value of num variable: ${num} and its data type: ${typeof(num)}`);
console.log(`Value of name variable: ${name} and its data type: ${typeof(name)}`);
console.log(`Value of isSignedIn variable: ${isSignedIn} and its data type: ${typeof(isSignedIn)}`);
console.log(`Value of details variable: ${Object.values(details)} and its data type: ${typeof(details)}`);
console.log(`Value of studName variable: ${studName} and its data type: ${typeof(studName)}`);


// 2. Reassigning demo:

let variable3 = 130;
console.log('old value: ' + variable3);
variable3 = 140;
console.log('new value: ' + variable3);

const variable4 = 200;
console.log('old value: ' + variable4);
variable4 = 300;
console.log('new value: ' + variable4);
//Gives error because we can not reassign const variables