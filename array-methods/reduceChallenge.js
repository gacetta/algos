// make 3 versions of a function that takes in [10, 100, 1000] and calls a reduce method 

// version 1 - the reduce method should return an empty array
// version 2 - the reduce method should return true
// version 3 - the reduce method should return an empty object

// hint: focus ONLY on the 2nd arg of the reduce method

// all of these should just have 1 statement in the function that starts with return reduce(yourInputVariable)
// when completed, console.log various things to see the iteration cycle

// const testArr = [10, 100, 1000];

function version1(arr) {
  return arr.reduce((acc, curr) => {
    return acc;
  }, [])
}

function version2(arr) {
  return arr.reduce((acc, curr) => {
    return acc;
  }, true)
}

function version3(arr) {
  return arr.reduce((acc, curr) => {
    return acc;
  }, {})
}

// console.log(version1(testArr)); //[]
// console.log(version2(testArr)); //true
// console.log(version3(testArr)); //{}

//--------------
/* create a function that takes an array and returns an object
 the output object should look like:
{
  indexNum: arrItem at this index,
  nextIndexNum: arrItem at this index,
}

ex input [100, true, "hi"]
output {0: 100, 1: true, 2: "hi"}

do this as one reduce statement 
like the one above, this is a knowledge check algo. If you know the trick, it shouldn't take more than 10 min 
*/

// const testArr = [100, true, "hi"];

function reduceToObj(arr) {
  return arr.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {})
}
// console.log(reduceToObj(testArr)); //{0: 100, 1: true, 2: "hi"}


//---------------

/*create a function where it takes in 1 input, an array of objects and outputs an object
use reduce

ex. input [{a: 'hi', b: 'bye'}, {bla: 34}, {ohio: true, ny: "cheesecake"}]
output {a: 'hi', b: 'bye', bla: 34, ohio: true, ny: "cheesecake"}   ANY ORDER
you can assume keys in all objects are unique
try to do this as one reduce statement
*/

const testArr = [{a: 'hi', b: 'bye'}, {bla: 34}, {ohio: true, ny: "cheesecake"}];
const badTest = 4;

function reduceObjects(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, curr) => {
    for (const key in curr) {
      acc[key] = curr[key]
    }
    return acc;
  }, {})
}

console.log(reduceObjects(testArr)); //{a: 'hi', b: 'bye', bla: 34, ohio: true, ny: "cheesecake"} 
console.log(reduceObjects(badTest)); //null
//----------------

// write a function that takes in an array of numbers eg - [1,2,3]
// and returns a single item array with the total output - [6]

// const testArr = [1, 2, 3];

function reduceArrToSingleNum(arr) {
  return arr.reduce((acc, curr) => {
    const sum = acc.pop() + curr;
    acc.push(sum);
    return acc;
  }, [0])
}

// console.log(reduceArrToSingleNum(testArr)); //[6]


//-----------------

// twistedReduce:
// write a function that takes in an array
// return an array of only even numbers
// use reduce

// const testArr = [1, 2, 3,4 ,5 ,6];

function twistedReduce(arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 2 === 0) acc.push(curr);
    return acc;
  }, [])
}

// console.log(twistedReduce(testArr)) // 2, 4, 6]

// ---------------

/*

refactor this function so it doesn’t use a counter variable or a for loop or a while loop
hint: you can do this as one statement
function countEvens(arr) {
  let counter = 0;
  for (const num of arr) {
    if (num % 2 === 0) counter++;
  }
  return counter
}
Hints
figure out the 1 statement
refactor with ternary
refactor again with implicit return
++i
*/

// const testArr = [1, 2, 3, 4, 5, 6];

const countEvens = (arr) => arr.reduce((acc, curr) => curr % 2 === 0 ? ++acc : acc, 0);

// console.log(countEvens(testArr)); // 3


//-----------------------
/*
CSX Challenge `intersection` using reduce. I found this one to be quite difficult. 
(no posting answers until Sunday please!)

Construct a function intersection that compares input arrays and 
returns a new array with elements found in all of the inputs. BONUS - Use reduce!

hints:
You need to use reduce twice!
If you’re like me and start getting confused, un-confuse it with helper funcs
Think about how the 2nd arg of reduce, the init value works. 
When to use it, when to not use it
*/