//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities

function convertHTML(str) {
  var htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">" :"&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  };
  
  var keys = Object.keys(htmlEntities);
  
  return str.split("").map(function(ele) {
    if(keys.indexOf(ele) !== -1) {
      return htmlEntities[ele];
    } else {
      return ele;
    }
  }).join("");
}

/* Example

convertHTML("Dolce & Gabbana"); should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos

*/
