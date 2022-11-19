function largestOfFour(arr) {
  const outputArr = [];
  arr.forEach((subArr) => {
    outputArr.push(subArr.reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    }));
  })
  return outputArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));