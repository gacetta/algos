/* Sorted Union
Write a function that takes two or more arrays and returns a new array of 
unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in 
their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final 
array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

// function uniteUnique(arr) {
//   // create Cache Map object to keep count of key/values
//   const Cache = new Map();
//     for (const array in arguments) {
//       const currArr = arguments[array];
//       currArr.forEach((element) => {
//         Cache.has(element) ? Cache.set(element, Cache.get(element) + 1) :Cache.set(element, 1);
//         console.log(Cache);
//       })
//     }
//     return [...Cache.keys()];
// }

function uniteUnique(...args) {
  const Cache = new Map();
  args.forEach((array) => {
    array.forEach((element) => {
        Cache.has(element) ? Cache.set(element, Cache.get(element) + 1) :Cache.set(element, 1);
        console.log(Cache);
      });
    })
  return [...Cache.keys()];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) // [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) // [1, 2, 3, 5, 4, 6, 7, 8].
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])) // [1, 3, 2, 5, 4, 6].
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])) // [1, 3, 2, 5, 4].