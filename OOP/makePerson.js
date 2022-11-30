/* Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
  let fullName = firstAndLast
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };

  this.getLastName = function() {
    return fullName.split(' ')[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(firstName) {
    fullName = firstName + ' ' + fullName.split(' ')[1];
  };

  this.setLastName = function(lastName) {
    fullName = fullName.split(' ')[0] + ' ' + lastName;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
bob.setLastName('disaskell')
bob.setFullName('Ben Dover')

// No properties should be added. 
console.log(Object.keys(bob).length) //  6.
console.log(bob instanceof Person) // true.
console.log(bob.firstName) // undefined.
console.log(bob.lastName) // undefined.
console.log(bob.getFirstName()) // the string Bob.
console.log(bob.getLastName()) // the string Ross.
console.log(bob.getFullName()) // the string Bob Ross.
console.log(bob.getFullName()) // the string Haskell Ross after bob.setFirstName("Haskell").
console.log(bob.getFullName()) // the string Haskell Curry after bob.setLastName("Curry").
console.log(bob.getFullName()) // the string Haskell Curry after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()) // the string Haskell after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()) // the string Curry after bob.setFullName("Haskell Curry").