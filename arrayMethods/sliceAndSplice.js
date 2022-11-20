/* Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

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

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)) // [4, 1, 2, 3, 5, 6]