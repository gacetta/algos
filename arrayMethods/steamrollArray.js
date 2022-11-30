/* Steamroller
Flatten a nested array. You must account for varying levels of nesting.

solution should not use Array.flat() or Array.flatMap()
no global variables should be used
*/

function steamrollArray(arr) {
  
}

console.log(steamrollArray([[["a"]], [["b"]]])) // ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // [1, {}, 3, 4].