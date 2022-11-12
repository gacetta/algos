// function censor
// input: none
// ouput: function

// returned function
// input: 1 or 2 strings
// ouput: given 2 strings - none
//        given 1 string - replace pairs of words and return updated string

function censor() {
  const cacheObj = {};
  return (...args) => {
    if (args.length === 1) {
      for(const word in cacheObj) {
        args[0] = args[0].replaceAll(word, cacheObj[word]);
      }
      return args[0];
    } else {
      // store pairs of variables in an obj
      cacheObj[args[0]] = args[1];
    }
  }
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
// should log: 'The slow, brown fox jumps over the lazy cats.'