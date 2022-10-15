/*
- start by picking the second element in the array
- now compare the second element with the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, 
  iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currEl = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currEl; j--) {
      const sortedEl = arr[j];
      arr[j + 1] = sortedEl;
      arr[j] = currEl;
    }
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]))


// [5, 3, 4, 1, 2]     1
// [5, 3, 4, 4, 2]     1
// [5, 3, 3, 4, 2]     1
// [5, 5, 3, 4, 2]     1
// [1, 5, 3, 4, 2]     1

