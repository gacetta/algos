/*
1. start looping from the end of the array to the beginning. Use variable i.
2. start inner looping from beginning to i - 1.  Use variable j.
3. if arr[j] is greater than arr[j + 1], swap values
4. return sorted array
*/

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      const firstEl = arr[j];
      const secondEl = arr[j + 1]
      if (firstEl > secondEl) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
  // function swap(arr, index1, index2) {
  //   let temp = arr[index1];
  //   arr[index1] = arr[index2];
  //   arr[index2] = temp;
  //   noSwaps = false;
  // }

console.log(bubbleSort([8, 1, 2, 3, 4, 5])) 