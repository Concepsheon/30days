//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { 
  return str.split("").map(function(char){
    var currChar = char.charCodeAt(0);
    if(currChar < 65 || currChar > 90) {
      return String.fromCharCode(currChar);
    } else if(currChar < 78) {
      return String.fromCharCode(currChar + 13);
    } 
    return String.fromCharCode(currChar - 13);
  }).join("");
}

/* Example

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

*/
