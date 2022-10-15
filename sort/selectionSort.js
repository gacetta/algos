/*
- store the first element as the smallest value you've seen so far.
- compare this item to the next item in the array until you find a smaller number.
- if a smaller number is found, designate that smaller number to beh the new 'min' and continue to end of array
- if "min" is not the value (index) you initially began with, swap the two values.
- repeat this with the next element until the array is sorted.
*/


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      const minVal = arr[min];
      const currVal = arr[j];
      if (currVal < minVal) min = j;
    }
    if (min !== i) swap(arr, i, min)
  }
  return arr;

  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
  }
}

console.log(selectionSort([10, 5, 8, 2, 7, 1]))