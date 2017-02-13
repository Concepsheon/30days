//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending


function truncateString(str, num) {
  var strLen = str.length;
  var truncated;
  if(num <= 3) {
    truncated = str.slice(0, num);
    return truncated + "...";
  } else if(strLen > num) {
    //subtract 3 dots added to length of str
    truncated = str.slice(0,num - 3);
    return truncated + "..."; 
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

/* Example

truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".

*/