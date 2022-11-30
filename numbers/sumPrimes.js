/* Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 
1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2.
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

// function sumPrimes(num) {
//   const primeArray = getPrimeArr(num);
//   return primeArray.reduce((acc, curr) => acc + curr);

//   // input: num
//   // output: arr of primes from 2 up to and including num
//   function getPrimeArr(num) {
//     const outputArr = [];
//     for (let i = 2; i <= num; i++) {
//       if (isPrime(i)) outputArr.push(i);
//     }
//     return outputArr;
//   }
  
//   // function isPrime()
//   // input: num
//   // output: boolean
//   function isPrime(num) {
//     if (num < 2) return false;
//     // check if number is divisble by any number other than 1 and itself
//     // if num % numCheck === 0 - then num is divisible by a number other than 1.
//     // loop from min to max divisors
//     // determine range for numCheck
//     // min = 2 (since 1 is a divisor of a prime number)
//     // max = sqrt of num
//     const maxCheck = Math.floor(Math.sqrt(num));

//     for (let i = 2; i <= maxCheck; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

// }

function sumPrimes(num) {
  const primeArray = getPrimeArr(num);
  return primeArray.reduce((acc, curr) => acc + curr);

  function getPrimeArr(num) {
    const outputArr = [];
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) outputArr.push(i);
    }
    return outputArr;
  }
  

  function isPrime(num) {
    if (num < 2) return false;

    const maxCheck = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= maxCheck; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

}

console.log(sumPrimes(10)) // 17.
console.log(sumPrimes(977)) // 73156.