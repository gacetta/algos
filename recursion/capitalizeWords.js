/* 
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords (arr) {
  // BASE CASE - when arr.length === 1 return an array containing capitalized word
  if (arr.length === 1) {
    return [capitalize(arr[0])];
  }

  // RECURSIVE CASE - remove last element and call capitalizeWords - leads to base case
  const capitalizedArr = capitalizeWords(arr.slice(0, -1));  // eventually will return ['FIRSTWORD']

  // Console log for understanding (helped me figure out the next step easily)
  console.log('arr is: ', arr, 'result is: ', capitalizedArr);
  
  // grab last element in arr, capitalize it, and add to capitalizedArr
  const lastEl = arr[arr.length - 1];
  const lastElCapitalized = capitalize(lastEl);
  capitalizedArr.push(lastElCapitalized);
  
  // Console log for testing
  console.log('capitalized last word and pushed to capitalizedArr: ', capitalizedArr);

  return capitalizedArr;

  // helper function - capitalize
  function capitalize(str) {
    let resultStr = '';
    for (let i = 0; i < str.length; i++) {
      resultStr += str[i].toUpperCase();
    }
    return resultStr;
  }
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']