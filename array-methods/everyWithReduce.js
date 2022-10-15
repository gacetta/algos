/*
var isOdd = function(num) { return num % 2 !== 0; };
expect(every([1, 3, 5], isOdd)).to.be(true);
expect(every([1, 4, 5], isOdd)).to.be(false);
*/

// function: everyWithReduce
// input: array, callback
// output: boolean.  True if callback is true for every element of array

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const currEl = arr[i];
    if (!callback(currEl)) return false;
  }
  return true;
}

function everyWithoutReduce(arr, callback) {
  return arr.every((element) => {
    return callback(element);
  })
}

function everyWithReduce(arr, callback) {
  return arr.reduce((acc, curr) => {
    return acc && callback(curr) ? true : false;
  }, true)
}

function isOdd(num) {
  return num % 2 !== 0;
}

// console.log(every([1, 3, 5], isOdd)) // true
// console.log(every([1, 4, 5], isOdd)) // false
console.log(everyWithReduce([1, 3, 5], isOdd)) // true
console.log(everyWithReduce([1, 4, 5], isOdd)) // false