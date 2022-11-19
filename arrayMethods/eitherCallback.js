const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;

function eitherCallback(callback1, callback2) {
  // return a function that returns boolean
  // returns true if callback 1 || calback 2 is true
  return (num) => (callback1(num) || callback2(num));
}

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}

const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]



// function eitherCallback(callback1, callback2) {
//   // output: function
//   // return true if either cb1 or cb2 evaluate to true
// 	return function eitherReturn(num) {
//     return (callback1(num) || callback2(num));
//   }
// }

// // Uncomment these to check your work!
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) newArray.push(array[i]);
//   }
//   return newArray;
// }
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]