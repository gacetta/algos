// function: intersection
// input: arr of arrs
// output: an arr containing elements found in ALL input arrs
// use REDUCE

const arr1 = [5, 10, 15, 20];  //acc
const arr2 = [15, 88, 1, 5, 7]; //curr
const arr3 = [1, 10, 15, 5, 20];

function intersection(arr) {
  // iterate over the arr using reduce
  return arr.reduce((acc, curr) => {
    const outputArr = [];
    
    // iterate over currArr and grab each element
    curr.forEach((element) => {
      // if acc.includes the element, push to outputArr
      if (acc.includes(element)) outputArr.push(element);
    })
    return outputArr;
  })
}

console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]