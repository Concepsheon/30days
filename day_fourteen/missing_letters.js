//Find the missing letter in the passed letter range and return it

function fearNotLetter(str) {
  var missingLetter;
  for(var i = 0; i < str.length; i++) {
    var currLetter = i;
    var nextLetter = i + 1;
    if(str.charCodeAt(nextLetter) - str.charCodeAt(currLetter) > 1) {
      currLetter = str.charCodeAt(currLetter);
      missingLetter = String.fromCharCode(currLetter + 1);
    }
  }
  return missingLetter;
}

/* Example

fearNotLetter("abce"); should return "d"
fearNotLetter("bcd") should return undefined

*/