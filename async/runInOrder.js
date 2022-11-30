/* runInOrder

Write a function called runInOrder that accepts as arguments in this order -

an array of functions
an array of numbers representing times in milliseconds
runInOrder should execute the functions in order, 
with the corresponding numbers in milliseconds being the 
time to wait from the previous invocation. For example -

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
/* should log: 
'hi' (after 300 ms) 
'bye' (600 ms after 'hi') 
'howdy' (200 ms after 'bye') */


// // recursive didn't pass check
// function runInOrder(funcArr, numArr) {
//   //Base Case
//   if (funcArr.length === 0) return;
  
//   //Recursive Case
//   const callback = funcArr[0];
//   const waitTime = numArr[0];
//   const newFuncArr = funcArr.slice(1);
//   const newNumArr = numArr.slice(1);
    
//   setTimeout(() => {
//     callback();
// 		runInOrder(newFuncArr, newNumArr)
//   }, waitTime)
// }

// non recursive
function runInOrder(funcArr, waitArr) {
  let waitTime = 0;
  funcArr.forEach((callback, index) => {
    waitTime += waitArr[index];
    setTimeout(() => callback, waitTime)
  })
}

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [500, 2000, 0]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
