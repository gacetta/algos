// function once
// input: callback
// output: function

// first time called, call the callback and return that output
// subsequent calls: return output value from first time

function once(callback) {
  let hasBeenCalled = false;
  let callbackResult;
  return (input) => {
    if (!hasBeenCalled) {
      callbackResult = callback(input);
      hasBeenCalled = true;
    }
    return callbackResult;
  }
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7


// function once(callback) {
//   let alreadyRun = false;
//   let output;
//   return function(...args) {
//     if (!alreadyRun) {
//       alreadyRun = true;
//     	output = callback(...args)
//     }
//     return output;
//   }
// }