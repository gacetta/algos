// function cycleIterator
// inputL array
// output: function

// return function
// input: none
// first invokation, returns first element of array
// second - returns second element
// etc.
// after last element, the next invocation will return first element, and so on

function cycleIterator(arr) {
  let callCount = 0;
  return () => {
    if (callCount === arr.length) {
      callCount = 0
    }
    return arr[callCount++]
  }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'