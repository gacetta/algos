function findLongestWordLength(str) {
  let longestWordLength = 0;
  const wordArr = str.split(' ');
  wordArr.forEach((word) => {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  })
  return longestWordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6