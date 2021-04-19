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
  return (base * height) / 2;
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
    resolve("edabit");
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
    return "even";
  }
  let i = array.reduce((acc, cur) => acc + cur);

  if (i % 2 === 0) {
    return "even";
  } else {
    return "odd";
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
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
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
  M1 = (m1 * 0.001) / M1;
  M2 = (m2 * 0.001) / M2;
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
  return -number;
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
  if (!s || typeof s != "string") return "FAIL!!";
  if (!s.includes("0") && !s.includes("1")) return "CHUCK SMASH!!";
  r = s
    .split("")
    .filter((e) => e == "0" || e == "1" || e == " ")
    .join("")
    .split(" ")
    .map((e) => parseInt(e, 2))
    .filter((e) => !isNaN(e));
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
  if (num < 0) return num;
  return -num;
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

function descendingOrder(n) {
  //...
  let str = n.toString().split("");
  let a = str
    .sort((a, b) => {
      return b - a;
    })
    .join("");
  return parseInt(a);
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
  let a = str.split("");
  for (let vowel of a) {
    if (
      vowel === "a" ||
      vowel === "e" ||
      vowel === "i" ||
      vowel === "o" ||
      vowel === "u"
    ) {
      vowelsCount++;
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

function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
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

function getSum(a, b) {
  let arr = [];

  if (a < b) {
    for (let start = a; start <= b; start++) {
      arr.push(start);
    }
    //     console.log('pos', arr)
  }

  if (a > b) {
    for (let start = a; start >= b; start--) {
      arr.push(start);
    }
    //     console.log('neg', arr)
  }
  if (arr.length === 0) {
    return a;
  } else {
    let sum = arr.reduce((acc, cur) => acc + cur);
    return sum;
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
  let res = [];
  let a = str.split("");
  a.forEach((char) => {
    if (
      char.toLowerCase() === "a" ||
      char.toLowerCase() === "e" ||
      char.toLowerCase() === "i" ||
      char.toLowerCase() === "o" ||
      char.toLowerCase() === "u"
    ) {
      return;
    } else {
      res.push(char);
    }
  });
  return res.join("");
}

/*
   CODING CHALLANGE 27
Get the Middle Character

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

 A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
  */

function getMiddle(s) {
  let l = s.length;
  console.log(l / 2, l / 2 + 1);
  if (l % 2 === 0) {
    return s.slice(l / 2 - 1, s.length / 2 + 1);
  } else {
    return s.slice(s.length / 2, s.length / 2 + 1);
  }
}

/*
   CODING CHALLANGE 28
   Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
   */

function squareDigits(num) {
  //may the code be with you
  let a = [...num.toString()];
  let arr = [];
  for (let n of a) {
    let transformNum = parseInt(n);
    let squer = transformNum * transformNum;
    arr.push(squer);
  }

  return parseInt(arr.join(""));
}
/*
CODING CHALLANGE 29
If you can read this...

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

The set of used punctuation is .!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

function to_nato(words) {
  let transformUpperCaseAndArray = [...words.toUpperCase()];
  let d = {
    "": " ",
    A: "Alfa",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "Xray",
    Y: "Yankee",
    Z: "Zulu",
    "!": "!",
    "?": "?",
    ".": ".",
    "-": "",
  };
  let a = transformUpperCaseAndArray.map((x) => d[x]).join("/");
  let arr = [];
  a.split("/").forEach((char) => {
    if (char !== "") {
      arr.push(char);
    } else {
      return;
    }
  });

  let final = arr.join(" ");
  return final;
}

/*
CODING CHALLANGE 30
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

var isSquare = function (n) {
  if (n === 0) return true;
  return n > 0 && Math.sqrt(n) % 1 === 0;
};

/*
CODING CHALLANGE 31
Sum of Cubes
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:


*/

function sumCubes(n) {
  let sum = [];
  for (let i = 1; i <= n; i++) {
    let a = i ** 3;
    //    console.log(a)
    sum.push(a);
  }
  return sum.reduce((acc, cur) => acc + cur);
}

/*
  CODING CHALLANGE 31
  Highest and Lowest
  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
  */

function highAndLow(numbers) {
  const arr = numbers.split(" ");
  const a = [];
  for (let num of arr) {
    a.push(parseInt(num));
  }

  let min = Math.min(...a).toString();
  let max = Math.max(...a).toString();

  return max + " " + min;
}

/*
   CODING CHALLANGE 32
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
  */

function accum(s) {
  // your code
  let str = s.split("");
  let arr = [];
  str.forEach((letter, index) => {
    let a = letter.repeat(index + 1);
    let b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();

    arr.push(b);
  });

  return arr.join("-");
}

/*
 CODING CHALLANGE 33
 Shortest Word
 Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/

function findShort(s) {
  let arrStr = s.split(" ");
  let lengtharr = [];
  arrStr.forEach((word) => {
    let lengthWord = word.length;
    lengtharr.push(lengthWord);
  });
  return Math.min.apply(Math, lengtharr);
}

/*
   CODING CHALLANGE 34
Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
  */

function XO(str) {
  //code here
  let arr = str.toLowerCase().split("");
  let x = 0;
  let o = 0;
  arr.forEach((c) => {
    if (c === "x") {
      x++;
    } else if (c === "o") {
      o++;
    }
  });

  if (x === o) {
    return true;
  } else {
    return false;
  }
}

/*
CODING CHALLANGE 35
Jaden Casing Strings
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  let arrStr = this.split(" ");
  let cap = arrStr.map((a) => a.charAt(0).toUpperCase() + a.substr(1));
  return cap.join(" ");
};

/*
CODING CHALLANGE 36
Complementary DNA
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"
*/

function DNAStrand(dna) {
  let a = "A";
  let t = "T";
  let c = "C";
  let g = "G";
  let result = [];
  const split = dna.split("");
  split.forEach((letter) => {
    if (letter === a) {
      result.push(t);
    } else if (letter === t) {
      result.push(a);
    } else if (letter === c) {
      result.push(g);
    } else if (letter === g) {
      result.push(c);
    }
  });
  return result.join("");
}

/*
CODING CHALLANGE 37
List Filtering
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
  // Return a new array with the strings filtered out
  const result = [];
  l.filter((ent) => {
    if (typeof ent === "string") {
      return;
    } else {
      result.push(ent);
    }
  });
  return result;
}

/*
  CODING CHALLANGE 38
 Count salutes
 Description
There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.
  */

function countSalutes(hallway) {
  let right = 0;
  let salutes = 0;
  for (let p of [...hallway]) {
    if (p === ">") right += 1;
    else if (p === "<") salutes += 2 * right;
  }
  //   console.log(right, salutes)
  return salutes;
}

/*
CODING CHALLANGE 39

Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/


function isIsogram(str){
let notUpper = str.toLowerCase()
const intersection = notUpper.split("").every((c, i) => notUpper.indexOf(c) == i);

return intersection

}

/* CODING CHALLANGE 40
Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
    //Code here
  const res = numbers.sort((a,b) => a - b).slice(0, 2);
   return res.reduce((acc, curr) => acc+curr, 0)
  }


  /* CODING CHALLANGE 41
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/

function paul(x){
    let kata = 5;
    let PetesKata = 10;
    let life = 0;
    let eating = 1;

    let count = 0;

    x.forEach(activitie => {
      if(activitie === 'life'){
        count +=life;
      } else if(activitie === 'eating'){
        count +=eating;
      }else if(activitie === 'Petes kata'){
        count +=PetesKata
      } else if(activitie === 'kata'){
         count +=kata
      }
    })
      if(count < 40){
        return 'Super happy!'
      } else if(count < 70){
        return 'Happy!'
      }else if(count < 100){
        return 'Sad!'
      } else if(count == undefined){
        return 'Miserable!'
      } else {
        return 'Miserable!'
      }
    }

    /*
    CODING CHALLANGE 42

    In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
    */

function nbYear(p0, percent, aug, p) {
    let count = 0;
    while(p0<p){
        p0 += p0 * percent/100 + aug;
        count++;
    }
    return count;
}


/*
 CODING CHALLANGE 43
Drink about
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

function peopleWithAgeDrink(age){
    if(age < 14)
      drink = 'toddy';
    else if(age < 18)
      drink = 'coke'
    else if(age < 21)
      drink = 'beer';
    else if(age => 21)
      drink = 'whisky';

    return 'drink ' + drink;
  }
/*
 CODING CHALLANGE 44
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:
*/
function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

/* 

Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}