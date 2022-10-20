/*
FUNCTION: PIVOT
- it will help to accept three arguments: array, and start and end indexes (default to 0 and the arr length - 1)
- Grab the pivot from the start of the array
- store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
  - if the pivot is greater than the current element, increment the pivot index variable and 
    then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- return pivot index
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotEl = arr[start];
  let swapIndex = 0;
  for (let i = start + 1; i <= end; i++) {
    const currEl = arr[i];
    if (pivotEl > currEl) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  console.log(arr)
  return swapIndex;
  
  function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    noSwaps = false;
  }
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
