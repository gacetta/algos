/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
  const replaceStr = matchCase(before, after);
  return str.replaceAll(before, replaceStr);

  function matchCase(str1, str2) {
    const firstLetter = str1[0];
    const isCapitalized = firstLetter === firstLetter.toUpperCase();
    return isCapitalized ? str2[0].toUpperCase() + str2.slice(1) : str2[0].toLowerCase() + str2.slice(1);
  }
}

console.log(myReplace("Let us go to the store", "store", "mall")) //Let us go to the mall.
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) //He is Sitting on the couch.
console.log(myReplace("I think we should look up there", "up", "Down")) //I think we should look down there.
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) //This has a spelling error.
console.log(myReplace("His name is Tom", "Tom", "john")) //His name is John.
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) //Let us get back to more Algorithms.