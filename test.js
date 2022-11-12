function loopTest4(obj) {
  for(let key in obj) {
      if (key === 'key1') {
          console.log('correct set up');
      } else if (key === 'key2') {
          return 'return breaks';
      }
  }
  return 'no break - iterated over the entire obj';
}

const obj = {
  key1: true,
  key2: false,
  key3: 'the end',
}

console.log(loopTest4(obj));