/*
write a function accepts a sorted array and a value
Create a left pointer at the start of the array and a right pointer at the end of the array
while the left pointer comes before the right pointer:
- create a pointer in the middle
- if you find the value you want, return the index
- if the value is too small, move the left pointer up
- if the value is too big, move the right pointer down
if you never find the value return -1
*/

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor((left + right)/ 2);

//   while (left <= right) {
//     console.log('while loop. LP: ', left, 'MP: ', mid, 'RP: ', right)
//     if (arr[mid] === target) {
//       return mid;
//     } else {
//       target < arr[mid] ? right = mid -1 : left = mid + 1
//     }
//     mid = Math.floor((left + right)/ 2);
//   }
//   return -1;
// }

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right)/ 2);

  while (arr[mid] !== target && left <= right) {
    console.log('while loop. LP: ', left, 'MP: ', mid, 'RP: ', right)
    if (target < arr[mid]) right = mid -1;
    else left = mid + 1
    mid = Math.floor((left + right)/ 2);
  }
  return arr[mid] === target ? mid : -1;
}

console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1