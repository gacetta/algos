/* Diff Two Arrays
Compare two arrays and return a new array with any items 
only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

// O(n^2)
// function diffArray(arr1, arr2) {
//   const outputArr = [];
//   arr1.forEach((element) => {
//     if (!arr2.includes(element)) {
//       outputArr.push(element);
//     }
//   })
//   arr2.forEach((element) => {
//     if (!arr1.includes(element)) {
//       outputArr.push(element);
//     }
//   })
//   return outputArr;
// }

// using cache object - ISSUE: returning numbers as strings
// function diffArray(arr1, arr2) {
//   const cache = {};
//   arr1.forEach((element) => {
//     cache[element] = cache[element] ? 2 : 1;
//   })
//   arr2.forEach((element) => {
//     cache[element] = cache[element] ? 2 : 1;
//   })

//   const outputArr = [];
//   for(const property in cache) {
//     if (cache[property] === 1) {
//       outputArr.push(property);
//     }
//   }
//   return outputArr;
// }


// // using cache object and creative typeof storage ISSUE: messy
// function diffArray(arr1, arr2) {
//   const cache = {};
//   arr1.forEach((element) => {
//     const storeValue = typeof element === 'number' ? 'num' : 'str';
//     cache[element] = cache[element] ? 2 : storeValue(element);
//   })
//   arr2.forEach((element) => {
//     const storeValue = typeof element === 'number' ? 'num' : 'str';
//     cache[element] = cache[element] ? 2 : storeValue(element);
//   })

//   const outputArr = [];
//   for(const property in cache) {
//     if (typeof cache[property] === 'string') {
//       const outputValue = cache[property] === 'num' ? Number(property) : property;
//       outputArr.push(outputValue);
//     }
//   }
//   return outputArr;

//   function storeValue(element) {
//     return typeof element === 'number' ? 'num' : 'str';
//   }
// }


// REFACTOR: using cache object and creative typeof storage 
function diffArray(arr1, arr2) {
  // Build cache object to keep track of all seen elements
  // The first time an element is saved to the cache, its value is a string (`typeof`)
  // If an element is found a second time, its value is updated to the number 2
  const cache = {};
  arr1.forEach((element) => {
    cache[element] = cache[element] ? 2 : typeof element;
  })
  arr2.forEach((element) => {
    cache[element] = cache[element] ? 2 : typeof element;
  })

  // check cache for unique elements and push them to outputArr
  const outputArr = [];
  for(const property in cache) {
    if (typeof cache[property] === 'string') {
      const outputValue = cache[property] === 'number' ? Number(property) : property;
      outputArr.push(outputValue);
    }
  }
  return outputArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
                      ["diorite", "andesite", "grass", "dirt", "dead shrub"])) // ["pink wool"].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "dead shrub"], 
                      ["diorite", "andesite", "grass", "dirt", "dead shrub"])) // [].
console.log(diffArray(["diorite", "andesite", 4, "dirt", "dead shrub"], 
                      ["diorite", "andesite", 'grass', "dirt", "dead shrub"])) // [4, 'grass'].