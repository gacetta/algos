/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  if (/<>/.test(str)) return str.replaceAll("<>", '&lt;&gt;')
  if (/'/.test(str)) return str.replaceAll("'", '&apos;')
  if (/&/.test(str)) return str.replaceAll("&", '&amp;')
  if (/</.test(str)) return str.replaceAll("<", '&lt;')
  if (/>/.test(str)) return str.replaceAll(">", '&gt;')
  if (/"/.test(str)) return str.replaceAll('"', '&quot;')
  return str;
}

// from FCC
// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };
//   //Use map function to return a filtered str with all entities changed automatically.
//   return str
//     .split("")
//     .map(entity => htmlEntities[entity] || entity)
//     .join("");
// }

console.log(convertHTML("Dolce & Gabbana")) // Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")) // Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')) // Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")) // Schindler&apos;s List.
console.log(convertHTML("<>")) // &lt;&gt;.
console.log(convertHTML("abc")) // abc.