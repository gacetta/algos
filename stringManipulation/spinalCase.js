/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  let outputStr = '';
  const capitalCheck = new RegExp('[A-Z]');
  const letterCheck = new RegExp('[a-zA-Z]');
  const nonLetterCheck = new RegExp('[^a-zA-Z]');
  // iterate over each char of the string
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    // CASE: preceeding char is a letter, current char is a capital
    if (capitalCheck.test(currChar)) {
      if (i > 0 && letterCheck.test(outputStr[outputStr.length - 1])) {
        // console.log('idx: ', i, 'char: ', currChar, 'previous letter: ', outputStr[outputStr.length - 1]);
        // console.log('cap: ', capitalCheck.test(currChar), 'let: ', letterCheck.test(currChar), 'nonLet: ', nonLetterCheck.test(currChar));
        // console.log('prevLetCheck :', letterCheck.test(outputStr[i - 1]))
        // console.log('adding hyphen');
        outputStr += '-';
      }
      outputStr += currChar.toLowerCase()
    } else if (letterCheck.test(currChar)) {
      outputStr += currChar.toLowerCase();
    } 
    if (nonLetterCheck.test(currChar)) {
      outputStr += '-';
    }
    console.log(outputStr, '\n')
  }
  return outputStr;
}

// console.log(spinalCase('This Is Spinal Tap')) //this-is-spinal-tap
// console.log(spinalCase("The_Andy_Griffith_Show")) //the-andy-griffith-show
// console.log(spinalCase("thisIsSpinalTap")) // this-is-spinal-tap.
console.log(spinalCase("AllThe-small Things")) // all-the-small-things