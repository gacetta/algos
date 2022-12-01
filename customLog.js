/* 
# create a function called customLog which behaves similarly to console.log
  1. customLog('hi'); -> should just call console.log(‘hi’)
  2. add a 2nd arg to this function that takes a boolean. if true, capitalize the first letter in the log
  3. add a 3rd arg to this function that takes a boolean. if true, capitalize ALL letters in the log
  4. test
  5. Think about the usability of this function. If this was in your code, is it easy to understand what 
  you’re calling and what the expected behavior is? If not, try implementing some solutions before moving on
  6. The majority use case of this function is probably just using the log normally without any capitalizations. 
  The first step might be to make your logic such that customLog(‘hi’, false false); can behave the same as customLog(‘hi’);, 
  meaning the user doesn’t have to call the 2nd and 3rd args at all
  7. refactor the function so that it takes in 2 args total. The first is the required field, 
  and the 2nd is an options object. Think about how you would implement this for 5 minutes before reading on.
  8. the 1st arg should be the string, and your function should have error handling 
  (throw an error) if the first arg doesn’t exist. The 2nd arg should looke like
  {
    capitalizeFirst: <boolean>
    capitalizeAll: <boolean>
  }
  9. since the most default behavior should be “assume false if not true”, the user should be able to call this function like
  customLog(‘hi’, {capitalizeFirst: true}) -> ‘Hi’
  customLog(‘hello’, {capitalizeAll: true}) -> “HELLO”
  customLog(’hi there”) -> “hi there”
  Note how using an object makes the function logic a tiny bit more complicated, but gives the ability 
  for all consumers of the function to label the option that they are turning on or off!
*/

// function customLog(str, capitalizeFirst, capitalizeAll) {
//   const output = str.split('');
//   if (capitalizeFirst) {
//     output[0] = output[0].toUpperCase();
//   }
//   if (capitalizeAll) {
//     output.forEach((char, index) => output[index] = char.toUpperCase())
//   }
//   console.log(output.join(''));
// }

// using OptionsObj
// {
  // capitalizeFirst: true,
  // capitalizeAll: true
// }
function customLog(str, options) {
  // ERROR CHECK - if no arguments provided, or first arg isn't typeof string
  if (typeof str !== 'string') throw new Error('arguments: string(REQUIRED), optionsObject {capitalizeFirst: <bool>, capitalizeAll: <bool>')

  // OPTIONS CHECK - set values for 
  const capitalizeFirst = options && options.hasOwnProperty('capitalizeFirst') && options.capitalizeFirst;
  const capitalizeAll = options && options.hasOwnProperty('capitalizeAll') && options.capitalizeAll

  const output = str.split('');
  if (capitalizeFirst) {
    console.log('capitalize first')
    output[0] = output[0].toUpperCase();
  }
  if (capitalizeAll) {
    console.log('capitalize all')
    output.forEach((char, index) => output[index] = char.toUpperCase())
  }
  console.log(output.join(''));
}

customLog('hi'); //'hi'
customLog('hi', {capitalizeFirst: true}); //'Hi'
customLog('hi', {capitalizeAll: true}); //'HI'
customLog(); //error