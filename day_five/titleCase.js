//Return the provided string with the first letter of each word capitalized
function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  var newStr = [];
  for(var i = 0; i < arr.length; i++) {
    var upperCase = arr[i][0].toUpperCase();
    var replaced = arr[i].replace(arr[i][0], upperCase);
    newStr.push(replaced);
  }
  return newStr.join(" ");
}

/*
Example Output

titleCase("sHoRt AnD sToUt") should return "Short And Stout"

*/
