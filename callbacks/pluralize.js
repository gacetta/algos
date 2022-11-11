// function: plurarlize
// input: arr of strings
// output: array of strings with an 's' added to each element

// for loop

const animals = ["dog", "cat", "tree frog"];

function pluralize(arr) {
  const outputArr = [];
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    let currEl = arr[i];
    // add an 's' to each element
    currEl += 's';
    // add that element to the output array
    outputArr.push(currEl);
  }
  // return outputArray  
  return outputArr
}

console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]