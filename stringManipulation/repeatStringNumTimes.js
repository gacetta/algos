// function repeatStringNumTimes(str, num) {
//   let outputStr = '';
//   if (num <= 0) return outputStr
//   for (let i = 0; i < num; i++) {
//     outputStr += str;
//   }
//   return outputStr;
// }

function repeatStringNumTimes(str, num) {
  let outputStr = '';
  if (num <= 0) return outputStr
  while (num > 0) {
    outputStr += str;
    num--;
  }
  return outputStr;
}

console.log(repeatStringNumTimes("abc", 1)) //abcabcabc