// This is day 3 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Loops"

// Loops are used to execute a block of code multiple times.
//Activity 1: For Loop

// 1. Program to print 1 to 10

for(let i = 0; i <= 10; i++){
    console.log(i);
}

// 2. Program to print multiplication table of 5.

for(let i = 1; i <= 10; i++){
    // console.log('5 * ' + i + ' = '+ 5 * i); // string concatenation method
    console.log(`5 * ${i} = ${5 * i}`); // string interpolation method
}


// Activity 2: While Loop

// 1. Program to print sum of numbers 1 to 10

let sum = 0;
let i = 1;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);      // 55

// 2. Program to print numbers from 10 to 1

let j = 10;
while(j >= 1){
    console.log(j);
    j--;
}


// Activity 3: Do While Loop

// 1. Program to print numbers from 1 to 5

let k = 1;
do{
    console.log(k);
    k++;
} while(k <= 5);

// 2. Program to calculate factorial of a number

function factOfNum(num) {
    let factorial = 1;
    let l = 1;
    while(l <= num){
        factorial *= l;
        l++;
    }
    return factorial;
}
console.log(factOfNum(5));        // 120


// Activity 4: Nested Loops

// 1. write a program to print the pattern using nested loops

// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 1; i <=5; i++) {
    let pattern = '';
    for(let j = 1; j <= i; j++){
        pattern += '* ';
    }
    console.log(pattern);
}


// Activity 5: Loop Control Statements

// 1. Program to print numbers from 1 to 10 but skip 5 using continue statement

for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;   // skip the loop if i is 5 and continue with the next iteration
    }
    console.log(i);
}

// 2. Program to print numbers from 1 to 10 but break the loop if the number is 7

for(let i = 1; i <= 10; i++){
    if(i === 7){
        break;    // break the loop if i is 7 and exit the loop
    }
    console.log(i);
}


// Feature Request:

// 1. Number printing script

function printNumbers(start, end){
    for(let i = start; i <= end; i++){
        console.log(i);
    }
}

// printNumbers(1, 100);    // prints numbers from 1 to 100


// 2. Multiplication table script

function multiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

multiplicationTable(6);    // prints multiplication table

// 3. Pattern printing script

function printPattern(rows){
    for(let i = 1; i <= rows; i++) {
        let pattern = '';
        for(let j = 1; j <= i; j++){
            pattern += '* ';
        }
        console.log(pattern);
    }
}

printPattern(4);    // prints the pattern

// 4. Sum calculation script

function sumOfNumbers(start, end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(1, 8));    // prints the sum of numbers

// 5. Factorial calculation script

function factOfNum(num) {
    let factorial = 1;
    let l = 1;
    while(l <= num){
        factorial *= l;
        l++;
    }
    return factorial;
}
// console.log(factOfNum(5));  //same function written above