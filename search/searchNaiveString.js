/*
function searchString(longStr, targetStr)
1. loop over longer string
2. loop over shorter string
3. if characters don't match, break out of inner loop
4. if characters do match, move to next character
5. if you finish short string, increment count
6. return count
*/

// function searchString(str, targetStr) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let longPoint = i;
//     for (let j = 0; j < targetStr.length; j++) {
//       const longChar = str[longPoint]
//       const targetChar = targetStr[j];
//       if (j === targetStr.length - 1 && longChar === targetChar) count++;
//       else if (longChar === targetChar) longPoint++;
//       else break;
//     }
//   }
//   return count;
// }

function searchString(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      const targetChar = target[j];
      const strChar = str[i + j]
      if (strChar !== targetChar) break
      if (j === target.length - 1) count++;
    }
  }
  return count;
}

console.log(searchString('wowomgzomg', 'omg')) //2