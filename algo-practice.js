'use strict'
// (char is short for “character” )

// Create a new string method called `announceFirstChar()` such that this will work:

//     // your code here
//     // now the following lines should behave like this
//     const myStr = “Hi”;
//     myStr.announceFirstChar();    // logs “The first char is H”

// String.prototype.announceFirstChar = function () {
//     return `The first char is ${this.charAt(0)}`;
// }

// const test1 = 'Test string';
// const test2 = 'More test';
// const test3 = '3rd Test';
// const test4 = '¡ATTENTION - 4TH TEST!';

// console.log(test1.announceFirstChar())
// console.log(test2.announceFirstChar())
// console.log(test3.announceFirstChar())
// console.log(test4.announceFirstChar())

// Minimum
// input: two values
// output: return the minimum of the two values without using Math.min()

// const minimum = (num1, num2) => num1 < num2 ? num1 : num2;
// console.log(minimum(10,2));

// isEven
// input: a single positive integer
// output: boolean 

// function isEven(num) {
//     num = Math.abs(num);
//     // base case 1
//     if (num === 1) {
//         return false;
//     } else if (num === 0) {
//         return true;
//     } else {
//         return isEven(num - 2);
//     }
// }

// console.log(isEven(-20));

// countBs
// takes a string as its only argument and returns a number that indicates how many uppercase 'B' char there are
// input: two strings - a string to be checked, and a string to check for
// output: number

//countChar
// like countBs but has a second parameter that indicates the character to be counted

// function countBs(str, char) {
//     let counter = 0;
//     // iterate over entire string
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(countBs('B.B. King - Blues Guitar in review', 'i'))


// The sum of a range
// console.log(sum(range(1, 10)));

// write range function
// input: two args - start and end
// output: array

// write sum function
// input: array of numbers
// output: sum of these nums

// function range(start, end, step = 1) {
//     const outputArr = [];
//     for (let i = start; i <= end; i += step) {
//         outputArr.push(i);
//     }
//     return outputArr;
// }

// function sum(arr) {
//     return arr.reduce((a,b) => a + b);
// }

// const testRange = range(5, 2, -1);
// console.log(testRange);
// // const testSum = sum(testRange);
// // console.log(testSum);
// //-----
// // Mubashir has started his journey from home. 
// // Given a string of directions (N=North, W=West, S=South, E=East), 
// // he will walk for one minute in each direction. Determine 
// // whether a set of directions will lead him back to the starting position or not.

// // Examples
// // backToHome("EEWE") ➞ false

// // backToHome("NENESSWW") ➞ true

// // backToHome("NEESSW") ➞ false

// // declare function homeCheck
// // input: a string
// // return boolean

// function backToHome(str) {
//     // declare veritcal tracker
//     // declare horiz tracker
//     let vertTracker = 0;
//     let horizTracker = 0;

//     // iterate over each element of the string with simple for loop
//     for (let i = 0; i < str.length; i++) {
//         // check each element
//         const currentDir = str[i];
//             // if N - incremenet vertical
//             // if S - decrement vert
//             // if E - increment horiz
//             // if W - decrement horiz
//             if (currentDir === 'N') {
//                 vertTracker += 1;
//             } else if (currentDir === 'S') {
//                 vertTracker -= 1;
//             } else if (currentDir === 'E') {
//                 horizTracker += 1;
//             } else if (currentDir === 'W') {
//                 horizTracker -= 1;
//             }
//     }
//     // after iterating, check if vert and horiz both === 0
//     return (vertTracker === 0 && horizTracker === 0);
// }

// console.log(backToHome("EEWE")) //➞ false
// console.log(backToHome("NENESSWW")) //➞ true
// console.log(backToHome("NEESSW")) //➞ false

//-----

// Given a sentence, create a function which shifts the first letter of 
// each word to the next word in the sentence (shifting right).

// Examples:

// shiftSentence("create a function") ➞ "freate c aunction"
// shiftSentence("it should shift the sentence") ➞ "st ihould shift she tentence"
// shiftSentence("the output is not very legible") ➞ "lhe tutput os iot nery vegible"
// shiftSentence("edabit") ➞ "edabit"

// Notes:

// The last word shifts its first letter to the first word in the sentence.
// All sentences will be given in lowercase.
// Note how single words remain untouched (example #4).

// // function shiftSentence
// // input: string of words separated by spaces
// // output: new string of words
// function shiftSentence(str) {
//     // split the string into an array using the ' ' as separator
//     const outputArr = str.split(' ');
//     const newOutputArr = [];
    
//     // iterate of the array
//     for (let i = 0; i < outputArr.length; i++) {
//         // for each word, grab the first letter of the next word and concat to remainder of currentword
//         // word[1][0] + word[0].slice(1)
//         // add new letter to front of word, add remainder of word using slice()
//         // template literal to update current array element
//         const currentWordWithoutFirstLetter = outputArr[i].slice(1);
//         let newFirstLetter = '';
//         // check if it's the first element
//             // get first letteer from last element
//         if (i === 0) {
//             newFirstLetter = outputArr[outputArr.length - 1][0];
//             // otherwise get first letter from previous element
//         } else {
//             newFirstLetter = outputArr[i - 1][0];
//         }
//         // console.log('first letter: ', newFirstLetter, 'remaining word: ', currentWordWithoutFirstLetter)

//         newOutputArr.push(newFirstLetter + currentWordWithoutFirstLetter);
//     }
    
//     // after iterating, join the array into a string and return
//     return newOutputArr.join(' ');
// }

// console.log(shiftSentence("create a function")) //➞ "freate c aunction"
// console.log(shiftSentence("it should shift the sentence")) //➞ "st ihould shift she tentence"
// console.log(shiftSentence("the output is not very legible")) //➞ "lhe tutput os iot nery vegible"
// console.log(shiftSentence("edabit")) //➞ "edabit"

//------

// Given a sentence, create a function which shifts the first letter of 
// each word to the next word in the sentence (shifting right).  Solve using map.

// Examples:

// shiftSentence("create a function") ➞ "freate c aunction"
// shiftSentence("it should shift the sentence") ➞ "st ihould shift she tentence"
// shiftSentence("the output is not very legible") ➞ "lhe tutput os iot nery vegible"
// shiftSentence("edabit") ➞ "edabit"

// Notes:

// The last word shifts its first letter to the first word in the sentence.
// All sentences will be given in lowercase.
// Note how single words remain untouched (example #4).

// // declare function shiftSentence
// // input: string
// // output: modified string
// function shiftSentence(str) {
//     // store sentence string into array
//     const sentenceArr = str.split(' ');
//     // if arr.length === 1, return
//     if (sentenceArr.length === 1) return sentenceArr[0];
    
//     // use map to perform function on each element of array and return new array
//     const outputArr = sentenceArr.map((word, index, arr) => {
//         // declare currentWordWithNoFirstLetter
//         const currentWordWithNoFirstLetter = word.slice(1);
//         // declare newFirstLetter
//         let newFirstLetter;
        
//         // if it's the first element, newFirstLetter should equal the first character of the last element in the array
//         if (index === 0) {
//             newFirstLetter = arr[arr.length - 1][0];
//         } else {
//             // otherwise, newFirstLetter should be equal to the first character of the previous element
//             newFirstLetter = arr[index - 1][0];
//         }
//         return newFirstLetter + currentWordWithNoFirstLetter;
//     })
//     return outputArr.join(' ');
// }

// console.log(shiftSentence("create a function")) //➞ "freate c aunction"
// console.log(shiftSentence("it should shift the sentence")) //➞ "st ihould shift she tentence"
// console.log(shiftSentence("the output is not very legible")) //➞ "lhe tutput os iot nery vegible"
// console.log(shiftSentence("edabit")) //➞ "edabit"

//--------

/* understanding the reduce() method

 make 3 versions of a function that takes in [10, 100, 1000] and calls a reduce method 

 version 1 - the reduce method should return an empty array
 version 2 - the reduce method should return true
 version 3 - the reduce method should return an empty object

hint: focus ONLY on the 2nd arg of the reduce method

 all of these should just have 1 statement in the function that starts with return reduce(yourInputVariable)
 when completed, console.log various things to see the iteration cycle

*/
// const test = [10, 100, 1000];

// function reduceV1(arr) {
//     return arr.reduce((acc, curr, index) => {
//         return acc;
//     }, [])
// }
    
// function reduceV2(arr) {
//     return arr.reduce((acc, curr, index) => {
//         return acc;
//     }, true)
// }
    
// function reduceV3(arr) {
//     return arr.reduce((acc, curr, index) => {
//         return acc;
//     }, {})
// }

// console.log(reduceV1(test))
// console.log(reduceV2(test))
// console.log(reduceV3(test))

/* create a function that takes an array and returns an object
 the output object should look like:
{
  indexNum: arrItem at this index,
  nextIndexNum: arrItem at this index,
}

ex input [100, true, "hi"]
output {0: 100, 1: true, 2: "hi"}

do this as one reduce statement 
like the one above, this is a knowledge check algo. If you know the trick, it shouldn't take more than 10 min 
*/

// input: arr
// output: object

// function objCreate(arr) {
//     return arr.reduce((acc, curr, index) => {
//         acc[index] = curr;
//         return acc;
//     }, {})
// };

// const test = [100, true, "hi"];

// console.log(objCreate(test));

/*create a function where it takes in 1 input, an array of objects and outputs an object
use reduce

ex. input [{a: 'hi', b: 'bye'}, {bla: 34}, {ohio: true, ny: "cheesecake"}]
output {a: 'hi', b: 'bye', bla: 34, ohio: true, ny: "cheesecake"}   ANY ORDER
you can assume keys in all objects are unique
try to do this as one reduce statement
*/

// input: an array of objects
// output: single object
// use reduce

// function reduceToOneObject(arr) {
//     return arr.reduce((acc, curr, index) => {
//         for (const property in curr) {
//             acc[property] = curr[property];  // add any properties from curr obj to acc obj
//         }
//         return acc;
//     })
// }

// const test = [{a: 'hi', b: 'bye'}, {bla: 34}, {ohio: true, ny: "cheesecake"}];

// console.log(reduceToOneObject(test));

//------

// write a function that takes in an array of numbers eg - [1,2,3]
// and returns a single item array with the total output - [6]

// function reduceToOneElement(arr) {
//     return arr.reduce((acc, curr, index) => {
//         const currentEl = acc.pop() + curr;
//         acc.push(currentEl);
//         return acc;
//     }, [0])
// }

// const test = [1, 2, 3];

// console.log(reduceToOneElement(test));
//------
// // Given two integers a and b, return how many times a can be halved while still being greater than b.

// // Examples

// // halveCount(4666, 544) //should return 3
// // // (4666 -> 2333 -> 1166.5 -> 583.25)

// // halveCount(466, 54) //should return 3
// // // (466 -> 233 -> 116.5 -> 58.25)

// // halveCount(1324, 98) //should return 3
// // // (1324 -> 662 -> 331 -> 165.5)

// // halveCount(624, 8) //should return 6
// // // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

// // halveCount(1000, 3) //should return 8
// // // (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

// // Notes

// // Integer a will always be at least greater than the twice of b.
// // You are expected to solve this challenge via a recursive approach.

// // declare function halveCount
// // input: two integers, A  and B
// // output: single integer

// function halveCount(num1, num2) {
//     // Given two integers a and b, return how many times a can be halved while still being greater than b.
//     if (num1 / 2 > num2) {
//         return halveCount(num1 / 2, num2) + 1;
//     } else {
//         return 0;
//     }
// }

// console.log(halveCount(4666, 544)) //should return 3
// // (4666 -> 2333 -> 1166.5 -> 583.25)

// console.log(halveCount(466, 54)) //should return 3
// // (466 -> 233 -> 116.5 -> 58.25)

// console.log(halveCount(1324, 98)) //should return 3
// // (1324 -> 662 -> 331 -> 165.5)

// console.log(halveCount(624, 8)) //should return 6
// // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

// console.log(halveCount(1000, 3)) //should return 8
// // (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

// -----

// Create a function that takes an object or array as an argument 
// and returns the maximum depth of that object or array.

// Examples

// getDepth([]) ➞ 1

// getDepth({ a: 1 }) ➞ 1

// getDepth({ a: 1, b: { c: 1 } }) ➞ 2

// getDepth([1, [2, [3, [4, [5]]]]]) ➞ 5

// Notes
// An empty object / array counts as a depth of 1.

// array
// [1, [2, 3]]   is [0] array -> false
//               is [1] array - true
//               Array.isArray(element)

// object
// [{a: 1, b: {c: 1, d:3}}]  // istype === 'object'

// function getDepth
// input: array or object, unknown which
// output: integer
// function getDepth(arrOrObj) {
//     // check if arg is an array
//     if (Array.isArray(arrOrObj)) {
//         // iterate
//         for (let i = 0; i < arrOrObj.length; i++) {
//             if (typeof arrOrObj[i] === 'object') {
//                 return getDepth(arrOrObj[i]) + 1;   
//             }
//         }
//         return 1; // BASE CASE - arr with no more depth (or empty obj / arr)
//     } else {
//         // check each property using for in
//         for (const property in arrOrObj) {
//             // if value of key:value pair is array or obj?
//             if (typeof arrOrObj[property] === 'object') {
//                 // if yes -->call getDepth on value + 1;
//                 return getDepth(arrOrObj[property]) + 1;
//             }
//         }
//         return 1; // BASE CASE - obj with no more depth
//     }
// }

// // console.log(getDepth([])) //➞ 1
// // console.log(getDepth({ a: 1 })) //➞ 1
// // console.log(getDepth({ a: 1, b: { c: 1 } })) //➞ 2
// console.log(getDepth([1, [2, [3, [4, [5]]]]])) //➞ 5
// // console.log(getDepth([1, [2, 3]]))
    
// PROMPT: write a function that returns a reverse string of the input

// input: "hello"
// output: "olleh"

// you can not use the length property

// declare function reverseString
// input: string
// output: string reversed
// use recursion
// function reverseString(str) {
//     if (str === '') {
//         return '';
//     }
//     return reverseString(str.slice(1)) + str[0];
// }

// // 'no'
// // return rs(o) + n
// // return rs('') + o + n
// // 'o' + 'n' -> 'on'

// console.log(reverseString('hello bitches'));

// reverseString
// new implementation using an array

// function reverseString(str) {
//     // store outputArr
//     const outputArr = [];
//     const stringArr = str.split('');
//     innerReverse(stringArr, 0);
//     return outputArr.join('');

//     // declare innerReverse
//     function innerReverse(arr, index) {
//         // turn str to stringArr

//         if (arr[index + 1]) {
//             innerReverse(arr, index + 1)
//         }
//         outputArr.push(str[index])
//     }
// }

// hi -> [h, i], no BC, rs(i, []) ..... then OA.push(h)------> [i].push(h) ----> [i, h]
// i --> [i], no BC, rs('', []) ...... then OA.push(i) ------> [].push(i)
// '' ---> [], BC! return OA

// make while loop using recursion
// make for loop using recursion

// Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number. 
// When the sum of the digits consists of more than one digit, repeat summing until you get one digit.

// Examples:
// rootDigit(123) ➞ 6
// // 1 + 2 + 3 = 6
// rootDigit(999888777) ➞ 9
// rootDigit(1238763636555555555555) ➞ 6

// Notes:
// Recursion is allowed

// function rootDigit 
// input: number
// output: number (one digit only)
// function rootDigit(num) {
//     // declare result variable initialized to 0
//     // call innerRoot
//     return innerRoot(num);
    
//     // declare innerRoot
//     // input: number
//     // output: nothing - side effect to result variable only
//     function innerRoot(innerNum) {
//         // store number as a array  (number -> num.toString() -> array using .split(''))
//         // const numArray = innerNum.toString().split('');
//         // console.log('numArr: ', numArray);
//         // // iterate over the number using reduce        // add 1st digit, add 2nd digit, etc. 
//         // result = numArray.reduce((a, b) => {
//         //     const num1 = Number(a);
//         //     const num2 = Number(b);
//         //     return a + b;
//         // })
//         let result = 0;
//         const numString = innerNum.toString();
//         console.log('numString: ', numString);
//         for (let i = 0; i < numString.length; i++ ) {
//             console.log(typeof numString[i]);
//             const currentNum = Number.parseInt(numString[i]);
//             console.log('currentNum: ', currentNum);

//         }

//         console.log('result: ', result)
//         console.log('result length: ', result.toString().length);
//         const resultString = result.toString()

//         if (result.toString().length === 1) {
//             return result;
//         } else {
//             // if result.length > 1, call innerRoot  ---- RECURSIVE CASE
//             return innerRoot(result);
//         }
//     }
// }

// Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number. 
// When the sum of the digits consists of more than one digit, repeat summing until you get one digit.

// Examples:
// rootDigit(123) ➞ 6
// // 1 + 2 + 3 = 6
// rootDigit(999888777) ➞ 9
// rootDigit(1238763636555555555555) ➞ 6

// function rootDigit(num) {
//     console.log(num);
//     let result = 0;
//     const numArray = num.toString().split('');
//     console.log('numArr: ', numArray);

//     result = numArray.reduce((a, b) => {
//         console.log('number a: ', parseInt(a));
//         console.log('number b: ', parseInt(b));

//         return parseInt(a) + parseInt(b);
//     })
            
//     console.log('result: ', result)
//     console.log('result length: ', result.toString().length);
//     const resultString = result.toString()

//     // if (result.toString().length === 1) {
//     //         return result;
//     // } else {
//     //     // if result.length > 1, call innerRoot  ---- RECURSIVE CASE
//     //     return rootDigit(result);
//     // }
// }

// console.log(rootDigit(123)) //➞ 6
// // 1 + 2 + 3 = 6
// console.log(rootDigit(999888777)) //➞ 9
// console.log(rootDigit(1238763636555555555555)) //➞ 6


// Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number. 
// When the sum of the digits consists of more than one digit, repeat summing until you get one digit.

// Examples:
// rootDigit(123) ➞ 6
// // 1 + 2 + 3 = 6
// rootDigit(999888777) ➞ 9
// rootDigit(1238763636555555555555) ➞ 6

function rootDigit(num) {
    // store the number into an array
    const numArr = [];
    while (num > 0) {
        const lastDigit = num % 10;
        num = Math.floor(num / 10)
        numArr.unshift(lastDigit);
    }
    console.log('numArr: ', numArr)

    const result = numArr.reduce((a, b) => a + b)        
    console.log('result: ', result)

    if (result < 10) {
            return result;
    } else {
        // if result.length > 1, call innerRoot  ---- RECURSIVE CASE
        return rootDigit(result);
    }
}



// const rootDigit = n => (
//     n > 9 ? rootDigit([...`${n}`].reduce((a,b) => a + +b, 0)) : n
//     );
    
    
// console.log(rootDigit(123)) //➞ 6
// // // 1 + 2 + 3 = 6
// console.log(rootDigit(999888777)) //➞ 9
// console.log(rootDigit(1238763636555555555555)) //➞ 6



// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

// input: str
// output: num (str length)
// function getLength(str) {
//     // BASE CASE
//     if (str[0] === undefined) {
//       return 0;
//     } else {
//       return getLength(SHORTER_STRING)
//     }
//   }
  
//   // string manipulation
//   // access each character using string[index]
//   // BASE CASE
//   // if string[index] === undefined, end of string
//   // call getLength recursively
//       // each time passing the str with one less character
//       // how to remove one character from string???
  

// /*
// There are two types of potions:
// Growing potion: "A"
// Shrinking potion: "B"
// If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
// If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
// Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

// Example:
// usePotions("3A78B51") ➞ "47751"
//   3 grows to 4, 8 shrinks to 7
// usePotions("9999B") ➞ "9998"
// usePotions("9A123") ➞ "10123"
// usePotions("567") ➞ "567"
// */

// function addOne(num) {
//     return num + 1;
// }

// function subtractOne(num) {
//     return num - 1;
// }


// // input: string
// // output: string

// // inner function with side effects
// // use while loop to iterate over string, while currIndex < str.length
//     // declare currEl (coerce to number)
//     // declare nextEl
//     // if nextEl is A, addOne() on currEl and push value to outputArr, increment indexes by 2
//     // if nextEl is B, subtractOne() on currEl and push value to outputArr, incremenet indexes by 2
//     // otherwise, push currEl to outputArr, increment indexes by 1

// function usePotions(str) {
//     let currIndex = 0;      // store the current index
//     let nextIndex = 1;      // store the index of the next element
//     const outputArr = [];   // store all final values in an array

//     innerPotions();             // call the inner function to store results in outputArr
//     return outputArr.join('');  // join the outputArr into a string and return

//     function innerPotions() {                           // THIS FUNCTION RETURNS NOTHING - ONLY SIDE EFFECTS TO outputArr
//         while (currIndex < str.length) {                // loop until our index is outside of string
//             const currChar = Number(str[currIndex]);    // store current character as a number type
//             const nextChar = str[nextIndex];            // store next character
//             if (nextChar === 'A' || nextChar === 'B') {                     // if next char is an 'A'
//                 if (nextChar === 'A') {
//                     outputArr.push(addOne(currChar));
//                 } else {
//                     outputArr.push(subtractOne(currChar));
//                 }                                       // invoke subtractOne and store result in outputArr
//                 currIndex += 2;                         // incremenet both indexes by 2 to reach 
//                 nextIndex += 2;
//             } else {                                    // if next char is not an 'A' or 'B', it must be a number
//                 outputArr.push(currChar);               // store current char in outputArr without modifying
//                 currIndex += 1;                         // increment both indexes by 1
//                 nextIndex += 1;                         // repeat process on next pair of characters (a number, and an unknown char)
//             }
//         }
//     }
// }

// console.log(usePotions("3A78B51")) //➞ "47751"
// //  3 grows to 4, 8 shrinks to 7
// console.log(usePotions("9999B")) //➞ "9998"
// console.log(usePotions("9A123")) //➞ "10123"
// console.log(usePotions("567")) //➞ "567"
//------------------------------------------------------------------------------------------//
/* understanding the reduce() method

make 3 versions of a function that takes in [10, 100, 1000] and calls a reduce method 

version 1 - the reduce method should return an empty array
version 2 - the reduce method should return true
version 3 - the reduce method should return an empty object

hint: focus ONLY on the 2nd arg of the reduce method

all of these should just have 1 statement in the function that starts with return reduce(yourInputVariable)
when completed, console.log various things to see the iteration cycle
*/

// version 1
// input: arr
// output: empty arr

function reduceToArr(arr) {
    return arr.reduce((acc, curr, index) => {
        return acc;
    }, [])
}

// version 2
// input: arr
// output: true

function reduceToBool(arr) {
    return arr.reduce((acc, curr, index) => {
        return acc;
    }, true)
}

// version 3
// input: arr
// output: empty object

function reduceToObj(arr) {
    return arr.reduce((acc, curr, index) => {
        return acc;
    }, {})
}
// const test1 = [10, 100, 1000];
// console.log(reduceToArr(test1))
// console.log(reduceToBool(test1))
// console.log(reduceToObj(test1))

//------------------------------------------------------------------------------------------//

/* create a function that takes an array and returns an object
the output object should look like:
{
    indexNum: arrItem at this index,
    nextIndexNum: arrItem at this index,
}

ex input [100, true, "hi"]
output {0: 100, 1: true, 2: "hi"}

do this as one reduce statement 
like the one above, this is a knowledge check algo. If you know the trick, it shouldn't take more than 10 min 
*/

// input: arr
// output: obj

function reduceArrToObj(arr) {
    // iterate over arr using reduce
    // initial value = empty object
    // for each acc / curr / index, add new property to object index: arrEl at that index
    return arr.reduce((acc, curr, index) => {
        acc[index] = curr;
        return acc;
    }, {})
}

// const test2 = [100, true, "hi"];
// console.log(reduceArrToObj(test2));

//------------------------------------------------------------------------------------------//

// create a function where it takes in 1 input, an array of objects and outputs an object
// use reduce

// ex. input [{a: 'hi', b: 'bye'}, {bla: 34}, {ohio: true, ny: "cheesecake"}]
// output {a: 'hi', b: 'bye', bla: 34, ohio: true, ny: "cheesecake"}   ANY ORDER
// you can assume keys in all objects are unique
// try to do this as one reduce statement

// input: arr of objects
// output: object
function reduceObjArrToObj(arr) {
    return arr.reduce((acc, curr, index) => {
        for (const property in curr) {
            acc[property] = curr[property]
        }
        return acc;
    }, {})
}

// const test3 = [{a: 'hi', b: 'bye'}, {bla: 34}, {ohio: true, ny: "cheesecake"}]
// console.log(reduceObjArrToObj(test3));

//------------------------------------------------------------------------------------------//

/* implement function flattenArray such that

input - [1,3,true,[[[3]]], [['hi']]] 
output - [1,3,true,3, 'hi];

obviously do not use built in Array.prototype.flat()
*/


// function flattenArray(arr) {
//     const outputArr = [];
//     innerFlatten(arr);
//     return outputArr;

//     function innerFlatten(innerArr) {
//         innerArr.forEach((element) => {
//             if (Array.isArray(element)) {
//                 innerFlatten(element);
//             } else {
//                 outputArr.push(element);
//             }
//         })
//     }
// }

// function flattenArray(arr, output = []) {
//     arr.forEach((element) => {
//         if (Array.isArray(element)) {
//             flattenArray(element, output);
//         } else {
//             output.push(element)
//         }
//     })
//     return output;
// }

// console.log(flattenArray([1, [2, [3, 4, [5, [6]]]]]));

//------------------------------------------------------------------------------------------//

/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

// function countTimes(arr, searchVal) {
//     return arr.reduce((acc, curr, index) => {
//         if (curr === searchVal) {
//             acc++;
//         }
//         return acc;
//     }, 0)
// }

// console.log(countTimes([1, 8, 9, 9, 10, 9], 9)) //-> 2

// function validParentheses(parens) {
//     if (parens.length%2 !== 0) return false;
//     let count = 0;
//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] === '(') count++;
//         if (parens[i] === ')') count--;
//         if (count < 0) return false;
//     }
//     return count === 0;
// }

// const test1 = '()'
// const test2 = ')('
// const test3 = '())'
// const test4 = '()()(())'
// console.log(validParentheses(test1)) //true
// console.log(validParentheses(test2)) //false
// console.log(validParentheses(test3)) //false
// console.log(validParentheses(test4)) // true

/*Create a function that recursively counts the integer's number of digits.

Examples
count(318) ➞ 3

count(-92563) ➞ 5

count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6
*/


// function count
// input: number, length = 0;
// output: number

// function count(num, length = 1) {
//     num = Math.abs(num);
//     if (num < 10) {
//         return length;
//     } else {
//         const newNum = Math.floor(num / 10);
//         return count(newNum, length + 1);
//     }
// }

// function countConstructor() {
//     let length = 1;
//     return function count(num) {
//         num = Math.abs(num);
//         if (num < 10) {
//             return length;
//         } else {
//             const newNum = Math.floor(num / 10);
//             length++;
//             return count(newNum);
//         }
//     }
// }

// const recursiveCounter = countConstructor();
// console.log(recursiveCounter(318), 'should be 3')


// console.log(count(318)) // ➞ 3
// console.log(count(-92563)) // ➞ 5
// console.log(count(4666)) // ➞ 4
// console.log(count(-314890)) // ➞ 6
// console.log(count(654321)) // ➞ 6
// console.log(count(638476)) // ➞ 6

//------------------------------------------------

// Create a function that allows the following to occur:

// const createBase = (summingNum) => (innerNum) => summingNum + innerNum
// let addSix = createBase(6);
// console.log(addSix(10), ', should log 16');
// console.log(addSix(21), 'should log 27');

// createBase
// input: numberArg
// output: function that returns number plus numberArg
// function createBase(summingNum) {
//     return function sumNums(innerNum) {
//         return summingNum + innerNum;
//     }
// }

// function createBase(summingNum) {
//     return (innerNum) => summingNum + innerNum
// }




// Then create a new version of your function so it returns as follows:
// let cumulativeSum = createBaseCumulative(6);
// console.log(cumulativeSum(10), ', should log 16');
// console.log(cumulativeSum(21), ', should log 37');

// cumulativeSum 
// input: numberArg
// output: function that returns cumulative value

// function createBaseCumulative(summingNumber) {
//     let accumulator = summingNumber;
//     return function innerSummer(innerNumber) {
//         accumulator += innerNumber;
//         return accumulator;
//     }
// }


//-----------------------
// create a function that does the following:

// const sayHelloJohn = createSayHello('John')
// sayHelloJohn() // should log "Hello, John!"
// sayHelloJohn() // should log "Hello, John!"
// sayHelloJohn() // should log "Hello, John!"
// sayHelloJohn() // should log "I already said hello, John."
// sayHelloJohn() // should log "This is getting old, John."
// sayHelloJohn() // should log "It's time for you to go, John."
// sayHelloJohn() //should log nothing
// sayHelloJohn() //should log nothing
// sayHelloJohn() //should log nothing

// function createSayHello()
// input: string
// output: function
function createSayHello(nameStr) {
    let count = 0;
    // input: none
    // output: string
    // references a counter and the original string
    return () => {
        count++;
        if (count <= 3) {
            console.log(`Hello, ${nameStr}!`);
        } else if (count === 4 ) {
            console.log(`I already said hello, ${nameStr}.`)
        } else if (count === 5) {
            console.log (`This is getting old, ${nameStr}.`)
        } else if (count === 6) {
            console.log(`It's time for you to go, ${nameStr}.`)
        } 
    }
}

//----------------------


// Create a function which takes a number as an argument and returns an object with two properties: 
// the number's multiplicative persistence, which is the number of times you must multiply the 
// individual digits in the number until you reach a single digit, and the final resulting digit.  
// Examples:


// console.log(oneDigit(39))
// //should log { multiplicativePersistence: 3, finalDigit: 4 }
// // Because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 -- took 3 steps to get to a single digit, which is 4.

// console.log(oneDigit(999))
// //should log { multiplicativePersistence: 4, finalDigit: 2 }
// // Because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, 1 * 2 = 2 -- took 4 steps to get to a single digit, which is 2.

// console.log(oneDigit(4))
// //should log { multiplicativePersistence: 0, finalDigit: 4 }
// // Because 4 is already a one-digit number.


// function oneDigit
// input: number
// output: object
// function oneDigit(num) {
//     const outputObj = {
//         multiplicativePersistence: 0
//     }
//     if (num < 10) {
//         outputObj.finalDigit = num;
//         return outputObj;
//     }
//     return innerOneDigit(num);

//     function innerOneDigit(innerNum) {
//         outputObj.multiplicativePersistence++;
//         let product = 1;

//         while (innerNum > 9) {
//             let onesPlace = innerNum % 10;
//             product *= onesPlace;
//             innerNum = Math.floor(innerNum / 10)
//         }
//         product *= innerNum;
//         if (product < 10) {
//             outputObj.finalDigit = product;
//             return outputObj;
//         } else {
//             return innerOneDigit(product);
//         }
//     }
// }

// console.log(oneDigit(39))
// //should log { multiplicativePersistence: 3, finalDigit: 4 }
// // Because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 -- took 3 steps to get to a single digit, which is 4.

// console.log(oneDigit(999))
// //should log { multiplicativePersistence: 4, finalDigit: 2 }
// // Because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, 1 * 2 = 2 -- took 4 steps to get to a single digit, which is 2.

// console.log(oneDigit(4))
// //should log { multiplicativePersistence: 0, finalDigit: 4 }
// // Because 4 is already a one-digit number.

//---------------

/*Create a function that recursively counts the integer's 
number of digits.

Examples
count(318) ➞ 3

count(-92563) ➞ 5

count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6
*/

// input: number
// ouput: number
// function count(num, length = 1) {
//     num = Math.abs(num);
//     // BASE CASE
//     if (num < 10) {
//         return length;
//     } else {
//         const shortenedNum = Math.floor(num / 10)
//         return count(shortenedNum, length + 1)
//     }
// }

// using innerFunc
function count(num) {
    num = Math.abs(num);
    let length = 1;
    return innerCount(num);
    function innerCount(innerNum) {
        if (innerNum < 10) {
            return length;
        } else {
            length++;
            const shortenedInnerNum = Math.floor(innerNum / 10);
            return innerCount(shortenedInnerNum);
        }
    }
}


// console.log(count(318)) // ➞ 3
// console.log(count(-92563)) // ➞ 5
// console.log(count(4666)) // ➞ 4
// console.log(count(-314890)) // ➞ 6
// console.log(count(654321)) // ➞ 6
// console.log(count(638476)) // ➞ 6


function cascade(number) {
  if (typeof(number) !== 'number') {    // ERROR CHECK to pass test
    return undefined;
  }
  if (number < 10) {        // BASE CASE - num is 1 digit. End recursion
  	console.log(number)     // Print num (this is the middle)
  } else {                  // RECURSIVE CASE
    console.log(number);    // print current number (top sandwich)
    const shortenedNum = Math.floor(number / 10) // Remove ones place digit
    cascade(shortenedNum);  // Recursive call with shortenedNum
    console.log(number)     // print current number (bottom sandwich)
  }
}


/*
Create a function that takes in an array of integers returns the number of even or odd digits for each number, depending on the parameter. 
(Bonus points for doing this without converting the numbers to strings.) // use Math.floor
countDigits([22, 53, 99, 61, 777, 8], "odd") ➞ [0, 2, 2, 1, 3, 0]
countDigits([22, 53, 99, 61, 777, 8], "even") ➞ [2, 0, 0, 1, 0, 1]
countDigits([54, 113, 89, 10], "odd") ➞ [1, 3, 1, 1]
countDigits([54, 113, 89, 10], "even") ➞ [1, 0, 1, 1]
*/


// input: arr of numbers, string with directions ('even' or 'odd')
function countDigits(arr, direction) {
    return arr.map((num) => {
        let count = 0;
        let currNum = num;
        while (currNum > 0) {                        // while loop to check each digit.  Stops after each digit place has been checked
            const onesPlace = currNum % 10;          // store the onesPlace digit (will be a single digit 0 - 9)
            if (isNumCorrectType(currNum, direction)) count++;        
            currNum = Math.floor(currNum / 10);  // removes the ones place digit & eventually results in 0 (end while loop)
        }
        return count;                                   // return the number of even/odd digits in the number (as map requires)
    })

    // HELPER FUNCTION - check if number is even or odd.  return boolean
    function isNumCorrectType(num, direction) {
        if (direction === 'even') {
            return num % 2 === 0;
        } else if (direction === 'odd') {
            return num % 2 !== 0;
        }
    }
}

// console.log(countDigits([22, 53, 99, 61, 777, 8], "odd")) // [0, 2, 2, 1, 3, 0]
// console.log(countDigits([22, 53, 99, 61, 777, 8], "even")) // [2, 0, 0, 1, 0, 1]
// console.log(countDigits([54, 113, 89, 10], "odd")) // [1, 3, 1, 1]
// console.log(countDigits([54, 113, 89, 10], "even")) // [1, 0, 1, 1]

/*
Create a function that takes in an array of integers and returns an array of strings "<number>: <oddOrEven>"

console.log(countDigits([22])) ➞ log ["22: even"]
console.log(countDigits([22, 53])) ➞ ["22: even", "53: odd"]
console.log(countDigits([54, 113, 89, 10])) ➞ ["54: even", "113: odd", "89: odd", "10: even"]

*/

//input: arr of integers
// output: arr of strings

// declare outputArr to store strings
// iterate over array
// for each element in array, check if even or odd   <---- helper func
// push template literal to outputArr

function countDigits(arr) {
    return arr.map((num) => `${num}: ${getEvenOrOdd(num)}`);

    function getEvenOrOdd(num) {
        return num % 2 === 0 ? 'even' : 'odd';
    }
}


// console.log(countDigits([22])) //➞ log ["22: even"]
// console.log(countDigits([22, 53])) //➞ ["22: even", "53: odd"]
// console.log(countDigits([54, 113, 89, 10])) //➞ ["54: even", "113: odd", "89: odd", "10: even"]


// refactor this function so it doesn't use a counter variable or for loop or a while loop

// function countEvens(arr) {
//   let counter = 0;
//   for (const num of arr) {
//     if (num % 2 === 0) counter++;
//   }
//   return counter
// }

// function countEvensRefactored(arr) {
//     const numArr = arr.slice();
//     const initialValue = 0;
//     return numArr.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc, initialValue);
// }

// // console.log(countEvensRefactored([2,3]) === 1);
// // console.log(countEvensRefactored([1,3,5,7]) === 0);
// // console.log(countEvensRefactored([234,2,3,3,1,345,0,-2]) === 4);

// function countEvensRecursion(arr) {                 // No counter variable, even in the insideFunctionCall
//     const initialValue = 0
//     return countEvensInside();

//     // INSIDE RECURSIVE FUNCTION                    
//     function countEvensInside(index = 0) {
//         const currNum = arr[index];
//         const nextIndex = index + 1;
//         // BASE CASE
//         if (currNum === undefined) {                // reached the end of the array
//             return initialValue;                    // return the initialValue
//         } 
        
//         // RECURSIVE CASES - reach the base case first 
//         if (isEven(currNum)) {                      // if number is EVEN 
//             return countEvensInside(nextIndex) + 1  // recursive call on nextArrEl + 1, AKA increase accumulator
//         } else {                                    // if number is NOT EVEN
//             return countEvensInside(nextIndex);     // recursive call on nextArrEl + 0, AKA do not alter accumulator
//         }
//     }

//     // HELPER FUNCTION
//     function isEven(num) {
//         return num % 2 === 0;
//     }
// }

// console.log(countEvensRecursion([2,3]) === 1);
// console.log(countEvensRecursion([1,3,5,7]) === 0);
// console.log(countEvensRecursion([234,2,3,3,1,345,0,-2]) === 4);

function countDigits(arr, evenOrOdd) {                  // countDigits function takes an arr and string as arguments
    console.log('originalArr: ', arr)
    return arr.map((num) => {                           // use .map() to iterate arr since outputArr is same length as argArr
        let count = 0;                                  // declare count variable store the number of even or odd digits
        while (num > 0) {                               // while loop to check each digit.  Stops after each digit place has been checked
            console.log('origNum: ', num)
            const onesPlace = num % 10;                 // store the onesPlace digit (will be a single digit 0 - 9)
            if (evenOddCheck(num, evenOrOdd)) count++;  // check if the number is even or odd          
            num = Math.floor(num / 10)                  // removes the ones place digit & eventually results in 0 (end while loop)
        }
        console.log('finalNum: ', num)
        console.log('finalArr: ', arr);
        return count;                                   // return the number of even/odd digits in the number (as map requires)
    })

    function evenOddCheck(num, evenOrOdd) {   // helper function to check if number is even or odd. returns boolean
        if (evenOrOdd === 'even') {           // if looking for even numbers
            return num % 2 === 0;             // and number is even - return true
        } else if (evenOrOdd === 'odd') {     // if looking for odd numbers
            return num % 2 !== 0;             // and number is odd - return true
        }
    }
}

// console.log(countDigits([22, 53, 99, 61, 777, 8], "odd")) // [0, 2, 2, 1, 3, 0]
// console.log(countDigits([22, 53, 99, 61, 777, 8], "even")) // [2, 0, 0, 1, 0, 1]
// console.log(countDigits([54, 113, 89, 10], "odd")) // [1, 3, 1, 1]
// console.log(countDigits([54, 113, 89, 10], "even")) // [1, 0, 1, 1]
//---

/*
make a function that takes in an object and returns a boolean
key types can be "string", "number", "boolean", "array", "object"

 tests should print true for all

console.log(validate({ string: 4, number: 4 }) === false);
console.log(validate({ string: "3", number: 3 }) === true);
console.log(validate({ boolean: "false" }) === false);
console.log(validate({ boolean: false }) === true);
console.log(validate({ number: 0 }) === true);
console.log(validate({ array: {}, object: [] }) === false);
console.log(validate({ array: [{}] }) === true);
console.log(validate({ object: { test: true } }) === true);
console.log(
  validate({
    string: "4",
    number: 5,
    boolean: false,
    array: [],
    object: { 3: "hi" },
  }) === true,
);

*/

// function validate
// input: object
// output: boolean
// check each property in an object.  If the value is the typeof the key, for each property, return true.

// function validate(obj) {
//     const keys = Object.keys(obj);
//     return keys.reduce((acc, currKey) => {
//         if (acc) {
//             return isDataTypeMatch(currKey);
//         }
//         return acc;
//     }, true)

//     // HELPER FUNCTION
//     function isDataTypeMatch(key) {
//         const dataType = key;
//         const currVal = obj[key];
//         if (dataType === 'array') {
//             return Array.isArray(currVal);
//         } else {
//             return typeof currVal === dataType;
//         }
//     }
// }

function validate(obj) {
    for (const key in obj) {
        if (!isDataTypeMatch(key)) return false;
    }
    return true;

    // HELPER FUNCTION
    function isDataTypeMatch(key) {
        const dataType = key;
        const currVal = obj[key];
        return dataType === 'array' ? Array.isArray(currVal) : typeof currVal === dataType;
    }
}


// console.log(validate({ string: 4, number: 4 }) === false);
// console.log(validate({ string: "3", number: 3 }) === true);
// console.log(validate({ boolean: "false" }) === false);
// console.log(validate({ boolean: false }) === true);
// console.log(validate({ number: 0 }) === true);
// console.log(validate({ array: {}, object: [] }) === false);
// console.log(validate({ array: [{}] }) === true);
// console.log(validate({ object: { test: true } }) === true);
// console.log(
//   validate({
//     string: "4",
//     number: 5,
//     boolean: false,
//     array: [],
//     object: { 3: "hi" },
//   }) === true,
// );

/* 

twistedReduce:
write a function that takes in an array
return an array of only even numbers
use reduce

*/

// function twistedReduce(arr) {
//     return arr.reduce((acc, curr) => {
//         if (curr % 2 === 0) {
//             acc.push(curr)
//         }
//         return acc;
//     }, [])
// }

function twistedReduce(arr) {
    return arr.reduce((acc, curr) => curr % 2 === 0 ? [...acc, curr] : acc, [])
}

// const test1 = [1, 2, 3]
// const test2 = [2, 4, 6, , 7, 8]
// const test3 = [0, 99, 999, 1000]

// console.log(twistedReduce(test1))
// console.log(twistedReduce(test2))
// console.log(twistedReduce(test3))

//---

/*

refactor this function so it doesn’t use a counter variable or a for loop or a while loop
hint: you can do this as one statement
function countEvens(arr) {
  let counter = 0;
  for (const num of arr) {
    if (num % 2 === 0) counter++;
  }
  return counter
}
Hints
figure out the 1 statement
refactor with ternary
refactor again with implicit return
++i

*/

const countEvens = (arr) => arr.reduce((acc, curr) => curr % 2 === 0 ? ++acc : acc, 0)

// const test1 = [1, 2, 3]
// const test2 = [2, 4, 6, 7, 8]
// const test3 = [0, 99, 999, 1000]
// console.log(countEvens(test1))
// console.log(countEvens(test2))
// console.log(countEvens(test3))


// coding challenge: (char is short for “character”)

// Create a new string method called announceFirstChar() such that this will work:

// String.prototype.announceFirstChar = function () {
//     const char = this[0];
//     console.log(`The first char is ${this[0]}`);
// }
// const myStr = 'hi';
// myStr.announceFirstChar();    // logs “The first char is H” (edited) 

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    let countObj = {};

    for (let letter of str1) {
        countObj[letter] ? countObj[letter] += 1 : countObj[letter] = 1;
    }

    for (let letter of str2) {
        if (!countObj[letter]) {
            return false;
        } else {
            countObj[letter] -= 1;
        }
    }

    return true;
}

// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram('rat', 'car')) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

// function countUniqueValues(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     let first = 0;
//     let second = 1;
//     while (arr[second] !== undefined) {
//         const el1 = arr[first];
//         const el2 = arr[second];
//         if (el1 === el2) {
//             second++;
//         } else {
//             first++;
//             arr.splice(first, 1, el2);
//             second++;
//         }
//     }
//     return first + 1;
// }

// console.log(countUniqueValues([1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

//-----

/*

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/


function sameFrequency(num1, num2) {
    let num1Freq = {};
    let num2Freq = {};
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    
    for (const digit of num1Str) {
        num1Freq[digit] = (num1Freq[digit] || 0) + 1;
    }
    
    for (const digit of num2Str) {
        num2Freq[digit] = (num2Freq[digit] || 0) + 1;
    }

    for (const property in num1Freq) {
        if (!(property in num2Freq)) {
            return false;
        }
        if (num1Freq[property] !== num2Freq[property]) {
            return false;
        }
    }

    return true;
}

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

//----

/* 

Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)

*/

// frequencyCounterSolution

// function areThereDuplicates(...args) {
//     const freqCounter = {};

//     // args is an array
//     // iterate over the array and store vales in obj
//     for (const argument of args) {
//         freqCounter[argument] = (freqCounter[argument] || 0) + 1;
//     }

//     for (const key in freqCounter) {
//         if (freqCounter[key] > 1) {
//             return true;
//         }
//     }

//     return false;
// }

// multiple pointers solution

// function areThereDuplicates(...args) {
//     const sortedArr = args.sort();
//     let start = 0
//     let next = 1;

//     while (next < args.length) {
//         const el1 = sortedArr[start];
//         const el2 = sortedArr[next];
//         if (el1 === el2) {
//             return true;
//         }
//         start++;
//         next++;
//     }
//     return false;
// }

// one-liner

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }


// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

//------

/*
Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)
Space: O(1)

Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, target) {
    //pointers start at front and end
    let first = 0;
    let last = arr.length - 1;

    // iterate as long as first < last
    while (first < last) {
        const avg = arr[first] + arr[last] / 2;
        if (avg < target) {
            first++;
        } else if (avg > target) {
            last--;
        } else {
            return true;
        }
    }
    return false;
}

// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

/*
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a subsequence 
of the characters in the second string. In other words, the function 
should check whether the characters in the first string appear somewhere 
in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(smallStr, bigStr) {
    if (bigStr.length < smallStr.length) {
        return false;
    }

    let searcher = 0;

  for (let i = 0; i < bigStr.length; i++) {
        const searchLetter = smallStr[searcher];
        const referenceLetter = bigStr[i];
        if (searchLetter === referenceLetter) {
            searcher++;
        }

        if (searcher >= smallStr.length) {
            return true;
        }
    }
    return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)
// console.log(isSubsequence('abc', 'ac')); // false (order matters)

//------

/*
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, 
but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        const currentNum = arr[i]
        maxSum += currentNum;
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        const firstEl = arr[i - num];
        const newEl = arr[i];
        tempSum = tempSum - firstEl + newEl;
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null
//------------------
/*
Write a function called minSubArrayLen which accepts two parameters - 
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray 
of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.

Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

function minSubArrayLen(arr, minSum) {
    // pointers for window ends
    let windowStart = 0;
    let windowEnd = 0;

    // track the sum of the current window
    let windowSum = 0;

    // track the minWindowLength
    let minWindowLength = Infinity

    // error check - UPDATED in the while loop on return statement
    // const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
    // if (arrSum < minSum) {
    //     console.log('minSum not attainable')
    //     return 0
    // }

    // iterate over the array
    // 'grow' or 'shrink' the window each iteration
    // check windowSum each iteration
    while (windowStart < arr.length) {
        // "grow" a window by incrementing end
        //adding element value to windowSum
        if (windowSum < minSum && windowEnd < arr.length) {
            console.log('growing window')
            const endNum = arr[windowEnd];
            windowSum += endNum;
            windowEnd++
        }
        // "shrink" a window by incrementing start
        // subtracting element value from windowSum
        else if (windowSum >= minSum) {
            console.log('shrinking window')
            const startNum = arr[windowStart];
            windowSum -= startNum;
            windowStart++
        }

        // check if windowSum is larger than the goalSum
        // if so, calculate currentWindowLength
        // update minWindowLength if appropriate
        if (windowSum >= minSum) {
            console.log('checking window sum')
            const currWindowLength = windowEnd - windowStart
            minWindowLength = Math.min(minWindowLength, currWindowLength);
        } 

        // end loop condition
        if (windowSum < minSum && windowEnd >= arr.length) {
            console.log('the end')
            // return minWindowLength;
            return minWindowLength === Infinity ? 0 : minWindowLength;
        }
        // console.log('currWindow: ', arr.slice(start, end));
        // console.log('start: ', start)
        // console.log('end: ', end)
        // console.log('minLength: ', minLength)
        // console.log('tempSum: ', tempSum, '\n')
    }
}

// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

/*

[1,4,16,22,5,7,8,9,10],39  // return 3
 
[1, 4, 16, 22]
tempSum: 43
start: 0
end: 4
minLength: 4

[4, 16, 22]
tempSum: 42
start: 1
end: 4
minLength: 3

[16, 22]
tempSum: 38
start: 2
end: 4
minLength: 3

[16, 22, 5]
tempSum: 43
start: 2
end: 5
minLength: 3

[22, 5]
tempSum: 27
start: 3
end: 5
minLength: 3

[22, 5, 7]
tempSum: 34
start: 3
end: 6
minLength: 3

[22, 5, 7, 8]
tempSum: 42
start: 3
end: 7
minLength: 3

[5, 7, 8]
tempSum: 20
start: 4
end: 7
minLength: 3

[5, 7, 8, 9]
tempSum: 29
start: 4
end: 8
minLength: 3

[5, 7, 8, 9, 10]
tempSum: 39
start: 4
end: 9
minLength: 3

[7, 8, 9, 10]
tempSum: 34
start: 5
end: 9
minLength: 3

*/

//-------

/*
Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

// function findLongestSubstring(str) {
//     // character tracker
//     // stores a key/value pair of the char and it's index
//     // ex. a: 0, b: 1, c: 2
//     const seenChars = {};

//     let maxLength = 0;
//     let tempLength = 0;
//     let start = 0;

//     // iterate over each character of the string
//     // 'abcade' // 5 'bcade'
//     for (let i = 0; i < str.length; i++) {
//         const currChar = str[i];
//         console.log('index: ', i)
//         console.log('currEl: ', currChar)
//         console.log('charObj: ', seenChars)
//         // if currEl has already been found, 
//         if (seenChars[currEl]) {
//             start = Math.max(start, seenChars[currChar])
//         }

//     }
//     for (let i = 0; i < str.length; i++) {
//         // index - beginning of substring + 1 (to include current in count)
//         longest = Math.max(longest, i - start + 1);
//         // store the index of the next char so as to not double count
//         seen[char] = i + 1;
//       }
//       return longest;
//     }
// }

// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6

/*
abcade

start - 0
maxLength - 0
tempLength - 0
i - 0
currEl - 'a'
{
    a: 0
}
// current length of substring
i - start + 1 = 1

start - 0
maxLength - 1
tempLength - 1
i - 1
currEl - 'b'
{
    a: 0,
    b: 1
}

start - 0
maxLength - 2
tempLength - 2
i - 2
currEl - 'a'
{
    a: 0,
    b: 1
}



//-------------

/*

given an array of strings and a function, 
make an object that tracks all return value frequencies

TEST
======================
const arr = [1,10,20,30];
const callback = (num) => {
  return num > 20 ? 'over_20' : 'not_over_20';
}

console.log(yourFuncName(arr, callback)) -> returns { over_20: 1, not_over_20: 3 }
======================

There are many ways to do this, 
but you can probably refactor the first solution you come up with. I refactored mine 4 times!
*/

// function freqCounter(arr, callback) {
//     const counter = {};
//     for (const element of arr) {
//         const key = callback(element);
//         counter[key] = (counter[key] || 0) + 1;
//     }
//     return counter;
// }

// function freqCounter(arr, callback) {
//     return arr.reduce((acc, curr) => {
//         const key = callback(curr);
//         acc[key] = (acc[key] || 0) + 1;
//         return acc;
//     }, {})
// }

// const arr = [1,10,20,30];
// const callback = (num) => {
//   return num > 20 ? 'over_20' : 'not_over_20';
// }

// console.log(freqCounter(arr, callback)); //-> returns { over_20: 1, not_over_20: 3 }

//-------

/*
CSX Challenge `intersection` using reduce. I found this one to be quite difficult. 
(no posting answers until Sunday please!)

Construct a function intersection that compares input arrays and 
returns a new array with elements found in all of the inputs. BONUS - Use reduce!

hints:
You need to use reduce twice!
If you’re like me and start getting confused, un-confuse it with helper funcs
Think about how the 2nd arg of reduce, the init value works. 
When to use it, when to not use it
*/

// function intersection(arrOfArrs) {
//     // use reduce to compare two arrays (in arrOfArrs)
//     // resultArr = array of all common elements present in ALL arrays in arrOfArrs
//     // nextArr = the array we will check to see if it contains elements from resultArr
//     // initial = (none)
//     return arrOfArrs.reduce((resultArr, nextArr) => {
//         // use reduce to iterate over each element in resultArr
//         // commonElementsArr = array of all common elements in resultArr and nextArr
//         // currEl = current element in resultArr
//         // initial = empty array to declare datatype to return
//         return resultArr.reduce((commonElementsArr, currEl) => {
//             if (nextArr.includes(currEl)) {
//                 commonElementsArr.push(currEl);
//             }
//             return commonElementsArr;
//         }, [])
//     })
// }

// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

//--------------

// function rangeOfNumbers(startNum, endNum) {
//     console.log('pre-base-case:');
//     console.log('startNum: ', startNum, ' endNum: ', endNum);
//     if (endNum <= startNum) {
//       console.log('base case reached, returning arr populated with endNum')
//       return [endNum];
//     } else {
//       console.log('recursive call with decremented endNum: ', endNum - 1, '\n');
//       const numbers = rangeOfNumbers(startNum, endNum - 1);
//       console.log('post-base-case:');
//       console.log('prePushNumArr: ', numbers, 'endNum: ', endNum)
//       numbers.push(endNum);
//       console.log('postPushNumArr: ', numbers, '\n')
//       return numbers;
//     }
//   }

// console.log(rangeOfNumbers(1, 3));

//-------

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Input: numRows = 1
Output: [[1]]

*/

// const generate = function(numRows) {
//     const output = [];
//     for (let i = 1; i <= numRows; i++) {
//      output.push(generateRow(i));
//     }
//     return output;
    
//     function generateRow(rowNum) {
//         const outputRow = [];
//         if (rowNum === 1 ) {
//             return [1];
//         } else if (rowNum === 2) {
//             return [1, 1];
//         } else {
//             const prevRow = output[rowNum - 2];
//             outputRow.push(1);
//             for (let j = 0; j < prevRow.length - 1; j++) {
//                 const firstNum = prevRow[j];
//                 const secondNum = prevRow[j + 1]
//                 const tempSum = firstNum + secondNum;
//                 outputRow.push(tempSum);
//             }
//             outputRow.push(1);
//         }
//         return outputRow;
//     }
// };

/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

function reverse(str) {
    // base case
    if (str.length === 1 ) return str;
    // recursive case
    else {
        // remove one letter from the string
        const shortenedStr = str.slice(1, str.length);
        const charToAdd = str[0];
        return reverse(shortenedStr).concat(charToAdd);
    }
}

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'
//------------

/*
Write a recursive function called isPalindrome 
which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    const firstEl = str[0];
    const lastEl = str[str.length - 1];
    const shortenedStr = str.slice(1, str.length - 1)
    // base cases
    if (firstEl !== lastEl) return false;
    if (str.length <= 1) return true;
    // recursive case
    return isPalindrome(shortenedStr);
}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

//------

/*
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/

function someRecursive(arr, callback) {
    const currEl = arr[0];
    // base case
    if (callback(currEl)) return true;
    if (arr.length === 1) return false;
    //recursive
    return someRecursive(arr.slice(1), callback);
}

// // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

//-----------

/*
Write a recursive function called flatten 
which accepts an array of arrays and returns a new array with all values flattened.
*/

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

//-------------

/*
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.
*/

// iterate over arr, checking each element
// if current element is array, call flatten recursively on element
// if current element is not an array, push to resultArr
// return resultArr

// function flatten(arr, resultArr = []){
//     for (let i = 0; i < arr.length; i++) {
//         const currEl = arr[i];
//         if (Array.isArray(currEl)) {
//             flatten(currEl, resultArr);
//         } else {
//             resultArr.push(currEl);
//         }
//     }
//     return resultArr;
// }

function flatten(arr) {
    const resultArr = [];
    innerFlatten(arr);
    return resultArr;

    function innerFlatten(innerArr) {
        innerArr.forEach((element) => {
            Array.isArray(element) ? innerFlatten(element) : resultArr.push(element);
        })
    }
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


//--------------
/*
input: an array of full of any data type
output: an array of only even nums.  If no even nums present, empty array

*/

const evenNums = (arr) => {
    return arr.filter((element)=> {
        return typeof element === 'number' && element % 2 === 0;
    })
}

// console.log(evenNums([1,2,3,'elephant']));
// console.log(evenNums([1,3]));

//--------------

/*
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
*/

// function capitalizeFirst(arr) {
//     const resultArr = [];
//     innerCapitalize(0);
//     return resultArr;

//     function innerCapitalize(index) {
//         let currEl = arr[index];

//         // BASE CASE - stop recursion after array iteration is complete
//         if (index >= arr.length) return;

//         // RECURSIVE CASE
//         let capitalizedStr = currEl[0].toUpperCase() + currEl.slice(1);
//         resultArr.push(capitalizedStr);
//         innerCapitalize(index + 1);
//     }
// }

// function capitalizeFirst(array) {
//     console.log("arr is", array);
//     if (array.length === 1) {
//       console.log("if block for ", array);
//       return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     console.log("array is", array, "calling recursion with ", array.slice(0, -1));
//     const res = capitalizeFirst(array.slice(0, -1));
  
//     const string =
//       array.slice(array.length - 1)[0][0].toUpperCase() +
//       array.slice(array.length - 1)[0].substr(1);
//     console.log("array is", array, "building string", string);
//     res.push(string);
//     return res;
//   } 

function capitalizeFirst(arr) {
    console.log('calling capitalizeFirst')

    // Base Case - one element, capitalize & return it in an array
    if (arr.length === 1) {
          return [capitalizeString(arr[0])]
        }

    // Recursive Case - remove last element from array, call capitalizeFirst
    const resultArr = capitalizeFirst(arr.slice(0, -1))

    const currStr = arr.slice(arr.length - 1)[0];
    const capStr = capitalizeString(currStr);
    resultArr.push(capStr);
    return resultArr;

    function capitalizeString(str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}

// console.log(capitalizeFirst(['boo', 'poo', 'foo']));

//--------

/*
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.
*/

// function nestedEvenSum(obj) {
//     let sum = 0;
//     const valArr = Object.values(obj);
//     for (let i = 0; i < valArr.length; i++) {
//         const currEl = valArr[i];
//         if (typeof currEl === 'number' && currEl % 2 === 0) {
//             sum += currEl;
//         } else if (typeof currEl === 'object') {
//             sum += nestedEvenSum(currEl);
//         }
//     }
//     return sum;
// }

function nestedEvenSum(obj) {
    let sum = 0;
    const valueArr = Object.values(obj);
    valueArr.forEach((value) => {
        if (typeof value === 'number' && value % 2 === 0) {
            sum += value;
        } else if (typeof value === 'object') {
            sum += nestedEvenSum(value);
        }
    })
    return sum;
}

const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
//   console.log(nestedEvenSum(obj1)); // 6
//   console.log(nestedEvenSum(obj2)); // 10

//---------

/*
create an array of [1, 2, 3, 4, 5] using recursion in place of a for loop
for (let i =1, i < 6; i++)
*/

function makeArray(number) {
    // base case - reached the conditional for "for loop"
    if (number === 1) {
        return [number];
    } else {
        const tempArr = makeArray(number - 1);
        // console.log('number: ', number);
        // console.log('tempArr: ', tempArr)
        tempArr.push(number);
        return tempArr;
    }
}

console.log(makeArray(8));