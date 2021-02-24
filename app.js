/*
CODING CHALLANGE 1
Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and return their sum.

Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10
*/

function addition(a, b) {
	return a + b;
}

/* CODING CHALLANGE 2

Return the First Element in an Array

Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500

*/

function getFirstValue(arr) {
	return arr[0];
}

/* CODING CHALLANGE 3

Fix the Expression

Fix the code in the Code tab so the function returns true if and only if x is equal to 7. Try to debug code and pass all the tests.

Examples
isSeven(4) ➞ false

isSeven(9) ➞ false

isSeven(7) ➞ true

*/

function isSeven(x) {
	if (x === 7) {
		return true;
	} else {
		return false;
	}
}

/* CODING CHALLANGE 4

Convert Hours into Seconds

Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400

*/

function howManySeconds(hours) {
	return (hours = hours * 3600);
}

/*
 CODING CHALLANGE 5

 Convert Age to Days

 Create a function that takes the age and return the age in days.

Examples
calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300

Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.
*/

function calcAge(age) {
	return (age = age * 365);
}

/*
 CODING CHALLANGE 6

 Find the Perimeter of a Rectangle

 Create a function that takes length and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22

*/

function findPerimeter(length, width) {
	return (x = 2 * (length + width));
}

/*
CODING CHALLANGE 8
Convert Minutes into Seconds

Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120


*/

function convert(minutes) {
	return (minutes = minutes * 60);
}

/*
CODING CHALLANGE 8

Buggy Code (Part 1)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
cubes(3) ➞ 27

cubes(5) ➞ 125

cubes(10) ➞ 1000
*/
function cubes(a) {
	return (a = a ** 3);
}

/*
CODING CHALLANGE 9

Convert a Number to Base-2

Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

Examples
binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10
Notes
Numbers will always be below 1024 (not including 1024).
The && operator could be useful.
The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
If a binary conversion for 0 is attempted, return "0".

*/

function binary(decimal) {
	return decimal.toString(2);
}

/*
CODING CHALLANGE 10

Return the Next Number from the Integer Passed
Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2

*/

function addition(num) {
	return (num += 1);
}

/*
CODING CHALLANGE 11

Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50

*/

function triArea(base, height) {
	return base * height / 2;
}

/*
CODING CHALLANGE 11

Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
*/

function minMax(arr) {
	let a = [];

	a.push(Math.min(...arr));
	a.push(Math.max(...arr));
	return a;
}

/*

CODING CHALLANGE 12

Power Calculator
Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
*/

function circuitPower(voltage, current) {
	return voltage * current;
}

/*

CODING CHALLANGE 13

Promises III: Native Promise, Introducing the Executor
Promises are just objects that contain the outcome of asynchronous operations. So when do you use one? When you want to control the outcome of an asynchronous operation. All you have to do is wrap the asynchronous function with a promise constructor.

The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation. Here's an example of a simple promise:

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
     resolve("edabit")
  }, 1000)
})
setTimeout is a browser API that is very commonly used in tutorials to represent async operations. After 1000ms has passed, we call the callback function in setTimeout() and pass a string "edabit" to the resolve function.

Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.
*/

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('edabit');
	}, 1000);
});

/*

CODING CHALLANGE 14

Matchstick Houses
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

*/

function matchHouses(steps) {
	return steps * 5 + 1;
}

/*
CODING CHALLANGE 15

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

function oddOrEven(array) {
	//enter code here
	if (array.length === 0) {
		return 'even';
	}
	let i = array.reduce((acc, cur) => acc + cur);

	if (i % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
}

/*
 CODING CHALLANGE 16

 Sum of positive
 You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.



 */

function positiveSum(arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = [];

	arr.forEach((num) => {
		if (num > 0) {
			sum.push(num);
		}
	});

	if (sum.length === 0) {
		return 0;
	} else {
		return sum.reduce((acc, cur) => acc + cur);
	}
}
