/*
Write a function called stringifyNumbers which takes in an object 
and finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
*/

function stringifyNumbers(obj)  {
  const resultObj = {};
  for (const key in obj) {
    const value = obj[key];
    resultObj[key] = value;
    // BASE CASE
    // if value is a number - convert to string and update key/value pair
    if (typeof value === 'number') {
      resultObj[key] = value.toString();
    }

    // RECURSIVE CASE
    // if value is an object, call stringifyNumbers on the value
    if (typeof value === 'object' && !Array.isArray(value)) {
      resultObj[key] = stringifyNumbers(value);
    }
  }
  return resultObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/