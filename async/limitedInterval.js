/* limitedInterval

Write a function called limitedInterval that accepts 
as arguments in this order -

callback function
wait time in milliseconds
limit time in milliseconds.

limitedInterval should run the callback once every 
wait milliseconds, up to limit milliseconds, and then stop.
*/

//input: callback, wait in ms, limit, in ms

function limitedInterval(callback, wait, limit) {
  for (let i = wait; i <= limit; i += wait) {
    console.log(`setting timeout for ${i}ms`)
    setTimeout(callback, i);
  }
}

limitedInterval(() => console.log('repeating'), 100, 550);