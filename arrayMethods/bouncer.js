/* Falsy Bouncer

function frankenSplice(arr1, arr2, n) {
  const outputArr = [];
  if (arr2.length === 0) return arr1;
  
  arr2.forEach((element, index) => {
    if (index === n) {
      outputArr.push(...arr1);
    }
    outputArr.push(element);
  })

  return outputArr;
}
*/

// function bouncer(arr) {
//   return arr.filter((element) => {
//     return element;
//   })
// }

const bouncer = (arr) => arr.filter((element) => element)

console.log(bouncer([7, "ate", "", false, 9]));