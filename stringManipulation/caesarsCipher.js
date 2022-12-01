/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.

*/

// reduce
function rot13(str) {
  const strArr = str.split('');
  return strArr.reduce((acc, curr) => {
    let charCode = curr.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      charCode += charCode - 13 < 65 ? 13 : -13;
    }
    return acc + String.fromCharCode(charCode);
  }, '')
}

// map
// function rot13(str) {
//   const strArr = str.split('');
//   return strArr.map((char) => {
//     let charCode = char.charCodeAt(0);
//     if (charCode >= 65 && charCode <= 90) {
//       charCode += charCode - 13 < 65 ? 13 : -13;
//     }
//     return String.fromCharCode(charCode)
//   }).join('');
// }

// function rot13(str) {
//   let outputStr = '';
//   const strArr = str.split('');
//   // iterate over array
//   strArr.forEach((char) => {
//     // get char code
//     let charCode = char.charCodeAt(0);
//     // if char is A-Z . //A=65, Z=90.  64 should be 90.  90-64 = 26
//     if (charCode >= 65 && charCode <= 90) {
//       // decrement charCode by 13.
//       charCode -= 13;
//       // if result < 65.  add 90
//       if (charCode < 65) {
//         charCode += 26;
//       }
//     }
//     outputStr += String.fromCharCode(charCode)
//   })
//   return outputStr
// }

console.log(rot13("SERR PBQR PNZC")) // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")) // FREE PIZZA!
console.log(rot13("SERR YBIR?")) // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.