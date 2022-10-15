/*
Write a function called collectStrings which accepts an object 
and returns an array of all the values in the object that have a typeof string
*/

// input: object
// output: array containing all the values that have typeof string

function collectStrings(obj) {
  const outputArr = [];
  const valueArr = Object.values(obj);
  valueArr.forEach((element) => {
    // BASE CASE 
    // if element typeof 'string', store it in outputArr
    if (typeof element === 'string') {
      outputArr.push(element);
    }
    // RECURSIVE CASE
    // if value is typeof 'object' and not array, call collectStrings on that value
    else if (typeof element === 'object' && !Array.isArray(element)) {
      outputArr.push(...collectStrings(element));
    }
  })

  return outputArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])