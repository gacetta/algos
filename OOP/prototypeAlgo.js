String.prototype.announceFirstChar = function() {
  console.log(this)
  console.log(typeof this)
  console.log(`The first character of this string is ${this.toString()[0]}`);
  console.log(`The first character of this string is ${this[0]}`);
}

const test = "Michael";
test.announceFirstChar();