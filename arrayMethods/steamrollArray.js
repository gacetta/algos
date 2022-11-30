/* Steamroller
Flatten a nested array. You must account for varying levels of nesting.

solution should not use Array.flat() or Array.flatMap()
no global variables should be used
*/

// recursive?
function steamrollArray(arr) {
  const outputArr = [];
  // BASE CASE
  // if arr is not an array, return the element
  if (!Array.isArray(arr)) return [arr];

  // RECURSIVE CASE
  // iterate over array
  // if element is not array, add it to outputArr
  // if element IS array, call steamrollArray on element
  arr.forEach((element) => {
    if (!Array.isArray(element)) {
      outputArr.push(element);
    } else {
      const flatArr = steamrollArray(element);
      outputArr.push(...flatArr);
    }
  })
  return outputArr;
}

// console.log(steamrollArray([[["a"]], [["b"]]])) // ["a", "b"].
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // [1, {}, 3, 4].