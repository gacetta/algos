// function: subtractTwo
// input: num
// output: num - 2

function subtractTwo(num) {
  return num - 2;
}

// function: map
// inputs: arr of num, callback
// output: new array fill with numbers from callback

//don't use map or forEach method

function map(arr, callback) {
  const outputArr = [];

  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
   const currEl = arr[i];
   // invoke callback on each element
   const evaluatedResult = callback(currEl); 
   // store the evaluate result in outputArr
   outputArr.push(evaluatedResult);
  }

  return outputArr;
}

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]