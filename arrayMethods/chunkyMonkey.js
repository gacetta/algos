/* Chunky Monkey
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and 
returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  const outputArr = [];
  let index = 0;
  while(index < arr.length) {
    const smallArr = []
    let smallIndex = 0;
    while (smallIndex < size && index < arr.length) {
      const currEl = arr[index];
      smallArr.push(currEl);
      smallIndex++;
      index++;
    }
    outputArr.push(smallArr);
  }
  return outputArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //[["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //[[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //[[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //[[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]