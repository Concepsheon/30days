//Check if a string (first argument, str) ends with the given target string (second argument, target)


function confirmEnding(str, target) {
  var endWord = str.lastIndexOf(target);
  var ending = str.substr(endWord);
  if(ending === target) {
    return true;
  } else {
    return false;
  }
}

/* Example

confirmEnding("Bastian", "n"); should return true
confirmEnding("Open sesame", "same"); should return true

*/