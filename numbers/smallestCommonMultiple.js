/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will not 
necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple 
of both 1 and 3 that is also evenly divisible by all numbers 
between 1 and 3. The answer here would be 6.

*/

//function smallestCommons
// input: arr of two numbers
// output: number - smallest number can equally be divided by both, 
// and ALL numbers in the range between

function smallestCommons(arr) {
  const numMin = Math.min(...arr);
  const numMax = Math.max(...arr);
  const step = getStepValue(numMin, numMax);
  let testNum = step;
  let foundPrime = false;
  let loopCount = 0;

  while (!foundPrime) {
    loopCount++;
    // console.log(`WHILE LOOP: iteration #${loopCount}`);
    // loop over all numbers between (non-inclusive) numMin, numMax
    // console.log(`step: ${step}, test: ${testNum}, found: ${foundPrime}`)
    for (let i = numMin + 1; i < numMax; i++) {
      // console.log(`FOR LOOP i: ${i}`)
      if (testNum % i !== 0) {
        foundPrime = false;
        testNum += step;
        // console.log(`not evenly divislbe. found: ${foundPrime}, test: ${testNum}`)
        break;
      } else {
        foundPrime = true;
      }
    }
  }
  return testNum
  // find step value
  function getStepValue(num1, num2) {
    return num2 % num1 === 0 ? num2 : num1 * num2;
  }
}

// console.log(smallestCommons([1, 5])) //60.
// console.log(smallestCommons([5, 1])) //60.
// console.log(smallestCommons([2, 10])) //2520.
console.log(smallestCommons([1, 13])) //360360.`
console.log(smallestCommons([23, 18])) //6056820.