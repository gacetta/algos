/*
FUNCTION MERGESORT
- Break up the array into halves until you have arrays that are empty or have one element (slice)
  - Call mergeSort recursively.  
  - Base Case, arr.length <= 1
- With smaller sorted arrays, merge arrays with other sorted arrays until you are back to full length of array
- Once the array has been merged back together, return the merged (and sorted) array


HELPER FUNCTION MERGE
Create an empty array, take a look at the smallest values in each input array
Use two pointers, i=0 and j=0, and while loops
While there are still values we haven't looked at...
  - If the value in the first array is smalller than the value in the second array,
    push the value in the first array into our results and move to the next value in the first array
  - If the value in the 1st array is larger than value in 2nd array, push value in 2nd array into results
    and move to next value in 2nd array.
  - Once we exhaust one array, push in all remaining values from other array
*/

function mergeSort(arr) {
  // BASE CASE - check if length is 1 or less
  if (arr.length <= 1) return arr;

  // RECURSIVE CASE - split then merge
  // split into two arrays
  const splitPoint = Math.floor(arr.length / 2);
  // 1st half - slice, then mergeSort
  const arr1 = mergeSort(arr.slice(0, splitPoint));
  // 2nd half - slice, then mergeSort
  const arr2 = mergeSort(arr.slice(splitPoint));
  // merge two sorted arrays
  return merge(arr1, arr2);

  function merge(arr1, arr2) {
    const outputArr = [];
    let arr1Point = 0;
    let arr2Point = 0;
    while (arr1Point < arr1.length && arr2Point < arr2.length) {
      const arr1El = arr1[arr1Point]; 
      const arr2El = arr2[arr2Point];
      if (arr1El < arr2El) {
        outputArr.push(arr1El);
        arr1Point++;
      } else {
        outputArr.push(arr2El);
        arr2Point++;
      }
    }
  
    arr1Point === arr1.length ? outputArr.push(...arr2.slice(arr2Point)) : outputArr.push(...arr1.slice(arr1Point))
    return outputArr;
  }
}

console.log(mergeSort([4, 3, 2, 1]));
