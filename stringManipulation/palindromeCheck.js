/* Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way 
both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, 
spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

// input: str
// output: boolean

function palindrome(str) {
  const regex = /[^a-zA-Z\d]/ig;
  const cleanStrArr = str.replaceAll(regex, '').toLowerCase().split('');
  const length = cleanStrArr.length;
  const mid = length % 2 === 0 ? (length / 2) - 1 : Math.floor(length / 2);
  
  // iterate from beginning and end to meet in the middle
  for (let i = 0; i <= mid; i++) {
    const startPoint = i;
    const endPoint = length - 1 - i;
    // console.log('start: ', cleanStrArr[startPoint])
    // console.log('end: ', cleanStrArr[endPoint])
    if (cleanStrArr[startPoint] !== cleanStrArr[endPoint]) return false;
  }
  return true;
}

console.log(palindrome('eye')) // true.
console.log(palindrome("_eye")) // true.
console.log(palindrome("race car")) // true.
console.log(palindrome("not a palindrome")) // false.
console.log(palindrome("A man, a plan, a canal. Panama")) // true.
console.log(palindrome("never odd or even")) // true.
console.log(palindrome("nope")) // false.
console.log(palindrome("almostomla")) // false.
console.log(palindrome("My age is 0, 0 si ega ym.")) // true.
console.log(palindrome("1 eye for of 1 eye.")) // false.
console.log(palindrome("0_0 (: /-\ :) 0-0")) // true.
console.log(palindrome("five|\_/|four")) // false.