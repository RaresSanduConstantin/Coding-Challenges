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
