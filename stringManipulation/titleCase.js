/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

// function titleCase(str) {
//   const wordArr = str.split(' ');
//   let outputStr = '';
//   wordArr.forEach((word) => {
//     outputStr += word[0].toUpperCase();
//     for (let i = 1; i < word.length; i++) {
//       outputStr += word[i].toLowerCase();
//     }
//     outputStr += ' '
//   })
//   return outputStr.substring(0, outputStr.length - 1);
// }

console.log(titleCase("I'm a little tea pot"))

// split str into array of words
// for each word, iterate over char, create proper word, store in outputArr
// return outputArr.join

function titleCase(str) {
  const wordArr = str.split(' ');
  const outputArr = [];
  wordArr.forEach((word) => {
    let outputWord = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      outputWord += word[i].toLowerCase();
    }
    outputArr.push(outputWord);
  })
  return outputArr.join(' ');
}