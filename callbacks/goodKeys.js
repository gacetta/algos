// function goodKeys
// input: obj, callback
// iterate thorugh the obj, perform callback on each value
// output: arr of only keys whose associated values yieled `true` from the callback

const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };

function goodKeys(obj, callback) {
  const outputArr = [];
  // iterate over obj
  for (const key in obj) {
    const value = obj[key];
    // invoke callback on each value
    if(callback(value)) outputArr.push(key);
  }
  // if callback evaluates to true, store the key in the outputArr
  return outputArr;
}

console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']