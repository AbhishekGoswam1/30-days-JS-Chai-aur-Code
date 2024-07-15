// This is day 3 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Control Structures/Statements"


//Activity 1: If else statements

// 1. Write a program to check if the number is positive or negative or zero.
function checkNum(num) {
    if(num > 0) {
        console.log('Positive number');
    } else if(num === 0) {
        console.log('Number is zero');
    } else {
        console.log('Negative number');
    }
}

checkNum(10); //Positive number
checkNum(0);  //Number is zero
checkNum(-10); //Negative number


// 2. Write a program to check if a person is eligible for voting or not.

function voteAge(age) {
    if(age >= 18) {
        console.log('Eligible for voting');
    } else {
        console.log('Not eligible for voting');
    }
}

voteAge(20); //Eligible for voting
voteAge(15); //Not eligible for voting


//Activity 2: Nested If-Else statements

// 1. Write a program to find the largest number among three numbers.

function largestNum(num1, num2, num3) {
    if(num1 > num2) {
        if(num1 > num3) {
            console.log(num1 + ' is the largest number');
        } else {
            console.log(num3 + ' is the largest number');
        }
    } else {
        if(num2 > num3) {
            console.log(num2 + ' is the largest number');
        } else {
            console.log(num3 + ' is the largest number');
        }
    }
}

largestNum(10, 20, 30); //30 is the largest number


//Activity 3: Switch case statements

// 1. Write a program to display the day of the week using switch case.

function dayOfWeek(day) {
    switch (day) {
        case 1: 
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thursday');
            break;
        case 6:
            console.log('Friday');
            break;
        case 7:
            console.log('Saturday');
            break;
        default:
            break;
    }
}

dayOfWeek(4); //Wednesday

//2. Write a program that uses a switch case to assign a grade to a student based on score.

function studentGrade(score) {
    switch (true) {
        case score >= 90:
            console.log('A');
            break;
        case score >= 80:
            console.log('B');
            break;
        case score >= 70:
            console.log('C');
            break;
        case score >= 60:
            console.log('D');
            break;
        case score >= 50:
            console.log('E');
            break;
        default:
            console.log('F');
            break;
    }
}

studentGrade(89); //B


//Activity 4: Conditional (Ternary) Operator

// 1. Write a program to check if a number is even or odd using the ternary operator.

function evenOdd(num) {
    let result = num % 2 === 0 ? 'Even' : 'Odd';
    console.log(result);
}
function checkEvenOdd(num) {   //Another way to write the same function
    num % 2 === 0 ? console.log('Even') : console.log('Odd');
}

evenOdd(10); //Even
checkEvenOdd(11); //Odd


//Activity 5: Combining Conditions

// 1. Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not by 100 unless also divisible by 400).

function leapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('Leap year');
    } else {
        console.log('Not a leap year');
    }
}

leapYear(2900); //Not a leap year