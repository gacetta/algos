/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
//input: string
//output: a string (letter) or undefined (if all letters are present);

function fearNotLetter(str) {
  // iterate over each char in the string
    // check if it is equal to the expected letter, start at g, next letter should be h...
    // find starting letter ascii value, use that for loop
    // find each char value from ascii value
  let expectedValue = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== expectedValue) {
      return String.fromCharCode(expectedValue);
    }
    expectedValue++;
  }

  return undefined;
}

console.log(fearNotLetter("abce")) // d.
console.log(fearNotLetter("abcdefghjklmno")) // i.
console.log(fearNotLetter("stvwx")) // u.
console.log(fearNotLetter("bcdf")) // e.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // undefined.