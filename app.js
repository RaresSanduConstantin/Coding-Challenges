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
		return 'even';https://carturesti.ro/carte/infopedia-enciclopedia-ilustrata-77172
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


/*
 CODING CHALLANGE 17
Even or Odd
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function even_or_odd(number) {
	// ...
	if(number%2 === 0){
	  return 'Even'
	} else {
	  return "Odd"
	}
  }


  /*
  CODING CHALLANGE 18

  Total pressure calculation


Notes
Remember: Temperature is given in Celsius while SI unit is Kelvin (KKK).  0°C=273.15K\ 0\degree C = 273.15K 0°C=273.15K

The gas constant  R=0.082dm3⋅atm⋅K−1⋅mol−1\ R = 0.082dm^3 \cdot atm \cdot K^{-1} \cdot mol^{-1} R=0.082dm
3
 ⋅atm⋅K
−1
 ⋅mol
−1

  */

 function solution(M1, M2, m1, m2, V, T) {
    M1 = m1 * 0.001/M1;
    M2 = m2 * 0.001/M2;
    T = T + 273.15;
  var R = 0.082;

  return (((M1 + M2) * R * T) / V) * 1000;
}


/*
 CODING CHALLANGE 19

 Opposite number

 Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/

function opposite(number) {
	//your code here
	return -number
  }


/*
 CODING CHALLANGE 20
Chuck Norris loves push ups. That's just a fact. It has been said that when Chuck Norris does a push up, he isn't pushing himself up, he's pushing the world down!

Today, Chuck got home from work 10 minutes earlier than his wife. Naturally he decided to bang out some push ups. By the time she arrives home he can have smashed out at least 1000 and barely broken a sweat. He counts them in binary, because he thinks coding is cool, and because he is a massive Badass.

When his wife arrives home, she starts talking to Chuck, spoiling his count! Your job is to write a function to isolate Chuck's count, and then work out how many push ups he has done! Return your answer as a number.

Careful Chuck doesn't lose count! Even if he does, always return the highest number he counted to! If Chuck's wife has left a list of jobs for him he won't be able to do any push ups... if there is no sign of a count, simply return "CHUCK SMASH!!"

In the event someone dares to provide Chuck with something other than a string, return 'FAIL!!'

Your code should still pass in the case that the binary is mixed up with other characters - maybe Chuck has a cough... e.g.: '1ee1gf00t10h1011tr00' --> '110010101100' --> 3244.

Feel the burn!!

*/

function chuckPushUps(s) {
	if (!s || typeof(s)!='string') return 'FAIL!!';
	if (!s.includes('0')&&!s.includes('1')) return 'CHUCK SMASH!!';
	r = s.split('').filter(e=>(e=='0')||(e=='1')||(e==' ')).join('').split(' ').map(e=>parseInt(e, 2)).filter(e=>!isNaN(e));
	return Math.max(...r);
  }


  /*
  CODING CHALLANGE 21
   Return Negative

   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
  */

 function makeNegative(num) {
	// Code?
	if(num < 0) return num
	return -num
  }


  /*
  CODING CHALLANGE 22
 Descending Order
 Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
  */

 function descendingOrder(n){
	//...
   let str = n.toString().split('')
	let a = str.sort((a,b) => {return b-a}).join('')
	return parseInt(a)
  }


  /* CODING CHALLANGE 23
  Vowel Count

  Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
  */

 function getCount(str) {
	var vowelsCount = 0;

	// enter your majic here
	let a = str.split('')
	for (let vowel of a){
	  if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
		vowelsCount ++;
	  }
	}
	return vowelsCount;
  }


  /* CODING CHALLANGE 24
  Reversed Words
  Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
  */

 function reverseWords(str){

	return str.split(' ').reverse().join(' '); // reverse those words
  }

  /* CODING CHALLANGE 25

  Beginner Series #3 Sum of Numbers
  Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
  */

 function getSum( a,b ){
	let arr = []

	if(a<b){
	 for(let start = a; start <=b; start++){
	   arr.push(start)
	 }
  //     console.log('pos', arr)
	}

	if(a>b){
	  for(let start = a; start >=b; start--){
	   arr.push(start)
	 }
  //     console.log('neg', arr)
	}
	if(arr.length === 0){
  return a
	} else {

	   let sum = arr.reduce((acc,cur)=> acc+cur)
	  return sum
	  console.log('res', arr)

	}

  }


  /*

 CODING CHALLANGE 26
 Disemvowel Trolls
 Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */


function disemvowel(str) {
	let res = []
	let a = str.split("")
	a.forEach(char => {

	  if (char.toLowerCase() === 'a' ||
		  char.toLowerCase() === 'e' ||
		  char.toLowerCase() === 'i' ||
		  char.toLowerCase() ==='o' ||
		  char.toLowerCase() === "u"){
		return
	   }else {
		 res.push(char)
	   }
	})
	return res.join('');
  }
