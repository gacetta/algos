/* Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

// function binaryAgent(str) {
//   // separate long string into binary strings
//   return str.split(' ').map((string) => String.fromCharCode(parseInt(string, 2))).join('');
//   // const numberArr = binaryStringArr.map((string) => {
//   //   const charCode = parseInt(string, 2);
//   //   return String.fromCharCode(charCode);
//   // })
//   // console.log(numberArr)
//   return numberArr.join('');
//   // convert each binary string to a number (parseInt(string, base))
//   // convert each number to a character (fromCharCode())
//   // store each char in array
//   // join array and return
// }

const binaryAgent = (str) => str.split(' ').map((string) => String.fromCharCode(parseInt(string, 2))).join('');


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")) // Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")) // I love FreeCodeCamp!