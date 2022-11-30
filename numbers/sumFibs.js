/* Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd 
Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all 
odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

// input: number
// output: number - sum of all ODD fibonacci numbers

// have to gather all fibonacci numbers**
// filter odd ones
// filter only numbers less than number
// reduce to sum those

// GATHER FIB NUMBERS

// 1 1 2 3 5 8 13
// 0 1 2 3 4 5 6

function sumFibs(num) {
  
  // const fibArr = createFibArray(num);
  // const oddFibArr = fibArr.filter((number) => number % 2 !== 0);
  // return oddFibArr.reduce((acc, curr) => {
  //   return acc + curr;
  // })

  return createFibArray(num).reduce((acc, curr) => curr %2 !== 0 ? acc + curr : acc);


  function createFibArray(num) {
    // create all fib numbers upto and including num
    const outputArr =[1, 1];
    // loop until arr[arr.length -1] >= num
    while (outputArr[outputArr.length - 1] < num) {
      const penultimateFibNum = outputArr[outputArr.length - 2]
      const lastFibNum = outputArr[outputArr.length - 1]
      const nextFibNum = penultimateFibNum + lastFibNum;
      outputArr.push(nextFibNum);
    }
    if (outputArr[outputArr.length - 1] > num) {
      outputArr.pop();
    }
    return outputArr
  }
}

console.log(sumFibs(4)) // 5
console.log(sumFibs(1000)) // 1785.
console.log(sumFibs(4000000)) // 4613732.
console.log(sumFibs(75024)) // 60696.
console.log(sumFibs(75025)) // 135721.