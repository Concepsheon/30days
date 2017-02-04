function palindrome(str) {
  //strip punctuation, spaces and symbols from and lowercase str
  str = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  //reverse str to compare with original str stripped of punctuation, spaces and symbols
  var compareStr = str.split("").reverse().join("");
  if(compareStr === str){
    return true;
  } else {
    return false;
  }
}



palindrome("eye");
