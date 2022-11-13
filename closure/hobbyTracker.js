 // function hobbyTracker
 // input: arr
 // creates a cache obj
 // out: function

// returned func
// input: string hobby, integer numb of hours
// when invoked - update cache.  add the hours to the corresponding property.
// if no args, reset all values to 0, return 'tracker has been reset!'

function hobbyTracker(hobbies) {
  const cache = {};
  hobbies.forEach((hobby) => {
    cache[hobby] = 0;
  })

  return (hobby, hours) => {
    if (typeof hobby !== 'string') {
      for (const key in cache) {
        cache[key] = 0;
      }
      return 'tracker has been reset!'
    } else if (typeof hours !== 'number' ) {
      return '2 arguments of proper datatype required';
    } else {
      cache[hobby] ? cache[hobby] += hours : cache[hobby] = hours;  //upsert key-value
      return cache;
    }
  }
}

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}