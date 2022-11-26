/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  let outputStr = '';
  const capitalCheck = new RegExp('[a-zA-Z]');
  const nonLetterCheck = new RegExp('[^a-zA-Z]');
  // iterate over each char of the string
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    // console.log(currentChar, capitalCheck.test(currentChar),nonLetterCheck.test(currentChar));
    if (capitalCheck.test(currentChar)) {
      outputStr += currentChar.toLowerCase()
    } else if (nonLetterCheck.test(currentChar)) {
      outputStr += '-';
    }
  }
  return outputStr;
}

console.log(spinalCase('This Is Spinal Tap')) //this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")) //the-andy-griffith-show