/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, 
move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

//input: string - lowercase english word
// output: string in piglatin
// if first char is a vowel, add `way` to the end
/// if first char is consonant, move first consonant or consonant cluster to the end and add `ay` to it.

function translatePigLatin(str) {
  const isConsonant = /[^aeiou]/;
  const firstLetter = str[0];

  // if first letter is vowel
  if (!isConsonant.test(firstLetter)) return str + 'way';

  // if first letter is consonant
  for (let i = 0; i < str.length; i++) {
    if (!isConsonant.test(str[i])) {
      const endStr = str.slice(0, i) + 'ay';
      return str.slice(i) + endStr;
    }
  }
  return str + 'ay'
}

console.log(translatePigLatin("california")) //aliforniacay.
console.log(translatePigLatin("paragraphs")) //aragraphspay.
console.log(translatePigLatin("glove")) //oveglay.
console.log(translatePigLatin("algorithm")) //algorithmway.
console.log(translatePigLatin("eight")) //eightway.
console.log(translatePigLatin("schwartz")) //artzschway.
console.log(translatePigLatin("rhythm")) //rhythmay.