// This is day 2 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Operators"


//Activity 1: Arithmetic Operations
let num1 = 30;
let num2 = 20;
let sum = num1 + num2;
console.log('Sum of num1 and num2 is: ' + sum);

let diff = num1 - num2;
console.log('Difference of num1 and num2 is: ' + diff);

let mul = num1 * num2;
console.log('Product of num1 and num2 is: ' + mul);

let div = num1 / num2;
console.log('Division of num1 and num2 is: ' + div);

let mod = num1 % num2;
console.log('Modulus of num1 and num2 is: ' + mod);


//Activity 2: Assignment Operators
let num3 = 10;
num3 += 10;
console.log('Value of num3 after addition: ' + num3);

let num4 = 20;      // Increment and Decrement Operators
num4 -= 10;
console.log('Value of num4 after subtraction: ' + num4);


//Activity 3: Comparison Operators
let num5 = 10;
let num6 = 20;
console.log(num5 > num6);   //less than and greater than
console.log(num5 < num6);

num7 = 25;
num8 = 26;
console.log(num7 >= num8);  //equal to less than and equal to greater than
console.log(num7 <= num8);

num9 = 30;
num10 = 30;
console.log(num9 == num10); //equal and not equal to 
console.log(num9 === num10);
console.log(num9 != num10);


//Activity 4: Logical Operators
let rollNum = 101;
let id = 102;
let phNum = 101;
console.log(rollNum == id && rollNum == phNum); //both statements should be true

let num11 = 10;
let num12 = 20;
console.log(num11 == 10 || num12 == 30); //atleast 1 statement should be true

let isStudent = true;
console.log(!isStudent); //negation of the statement


//Activity 5: Ternary Operator
let num13 = 50;
let num14 = 20;
let result = (num13 > num14) ? console.log('num13 is greater') : console.log('num14 is greater');


// Feature Request: 
// 1. Arithmetic Operations Script - 

function arithmaticOp(para1, para2) {
    let sum = para1 + para2;
    console.log('Sum of para1 and para2 is: ' + sum);

    let diff = para1 - para2;
    console.log('Difference of para1 and para2 is: ' + diff);

    let mul = para1 * para2;
    console.log('Product of para1 and para2 is: ' + mul);

    let div = para1 / para2;
    console.log('Division of para1 and para2 is: ' + div);

    let mod = para1 % para2;
    console.log('Modulus of para1 and para2 is: ' + mod);
}

arithmaticOp(30, 20);


// 2. Comparison and Logical Operators Script -

function compLogOp(para1, para2) {
    console.log(para1 > para2);   //less than and greater than
    console.log(para1 < para2);

    console.log(para1 >= para2);  //equal to less than and equal to greater than
    console.log(para1 <= para2);

    console.log(para1 == para2); //equal and not equal to 
    console.log(para1 === para2);
    console.log(para1 != para2);

    console.log(para1 == para2 && para1 == para2); //both statements should be true

    console.log(para1 == para2 || para1 == para2); //atleast 1 statement should be true

    console.log(!para1); //negation of the statement
}
compLogOp(30, 20);
compLogOp(60, 60);



// 3. Ternary Operator Script -

function ternaryOp(para1, para2) {
    let result = (para1 > para2) ? console.log('parameter 1 is greater') : console.log('parameter 2 is greater');
}
ternaryOp(45, 20);