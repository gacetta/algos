/* Find Longest Substring
Write a function called findLongestSubstring, which 
accepts a string and returns the length of the longest 
substring with all distinct characters.

Time complexity O(n)
*/

// refactored and cleaned
function findLongestSubstring(str) {
  let startIdx = 0;
  let endIdx = 0;
  let foundIdx;
  let maxStr = 0;
  let tempStr = 0;
  const cache = {};

  while (endIdx < str.length) {
    const curr = str[endIdx];

    if (!(curr in cache)) {
      cache[curr] = endIdx;
      tempStr++
    } else {
      maxStr = Math.max(maxStr, tempStr);
      foundIdx = cache[curr];
      startIdx = foundIdx + 1;
      
      for (const letter in cache) {
        if (cache[letter] < foundIdx) {
          tempStr--;
          delete cache[letter];
        } else if (cache[letter] === foundIdx) {
          cache[letter] = endIdx;
        }
      }
    }
    endIdx++
  }
  return Math.max(maxStr, tempStr);
}

// function findLongestSubstring(str) {
//   // create pointers for start and end of subString
//   let startIdx = 0;
//   let endIdx = 0;
//   // create pointer for index of duplicate char
//   let foundIdx;

//   // create variables for maxStr length and tempStr length
//   let maxStr = 0;
//   let tempStr = 0;

//   // create cache object to store all found char and their indices
//   const cache = {};

//   // iterate over string (endIdx is always moving++)
//   while (endIdx < str.length) {
//     const curr = str[endIdx];
//     console.log(`STARTING WHILE LOOP for ${str}`)
//     console.log(`startIdx: ${startIdx}, endIdx: ${endIdx}, curr: ${curr}`, `max: ${maxStr}, temp: ${tempStr}`)
//     console.log(cache)
//     // check if cache has curr char (cache(char))
//     if (cache[curr] === undefined) {
//       console.log(`**\nunique item, adding to cache, incrementing tempStr\n**`)
//       cache[curr] = endIdx;
//       tempStr++
//     } else {
//       console.log(`**\nduplicate foundIdx. updating cache\n**`)
//       maxStr = Math.max(maxStr, tempStr);
//       foundIdx = cache[curr];
//       startIdx = foundIdx + 1;
      
//       // iterate through obj
//       for (const letter in cache) {
//         if (cache[letter] < foundIdx) {
//           tempStr--;
//           delete cache[letter];
//         } else if (cache[letter] === foundIdx) {
//           cache[letter] = endIdx;
//         }
//       }
//     }
//     console.log(`END OF WHILE LOOP, maxStr: ${maxStr}, temp: ${tempStr}`);
//     console.log(cache, `\n`)
//     endIdx++
//   }
//   return Math.max(maxStr, tempStr);
// }


// console.log(`str: ${str}`)
//     console.log(`startIdx: ${startIdx}, endIdx: ${endIdx}, curr: ${curr}`)
//     console.log(cache)
/*
|
wretched
      | 

w: 0,   1   0
r: 1,   2   0
e: 2,   3   0
t: 3,   4   0
c: 4,   5   0
h: 5,   6   0
e --- already found   cache[e] !== undefined

maxStr = 6

|
wretched
      | 

w: 0,   1   0   // want to delete, tempStr--
r: 1,   2   0   // want to delete, tempStr--
e: 2,   3   0   // want to update with end index
t: 3,   4   0   // want start here (index of e: + 1)
c: 4,   5   0
h: 5,   6   6   end = 6, start 0, duplicateIdx = 2

// iterate through obj
  // if property[char] < duplicateIdx
    // delete property, tempStr--
  // if property[char] === duplicateIdx
    // property[char] = end


   |
wretched
       | 

e: 6,   4   6 
t: 3,   4   6 
c: 4,   4   6
h: 5,   4   6

stop iterating when end is outside of string
*/

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
console.log(findLongestSubstring('wretched')) // 6

