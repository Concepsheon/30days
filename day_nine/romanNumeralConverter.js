function convertToRoman(num) {
 var romanNumerals = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1},
    
  roman = '',
  numeral;
  
  //loop through each value in romanNumerals    
  for ( numeral in romanNumerals ) {
    //if int is greater than current value add value to roman and subtract value from int
    while ( num >= romanNumerals[numeral] ) {
      roman += numeral;
      num -= romanNumerals[numeral];
    }
  }
  return roman;
}

/* Example

convertToRoman(16) should return "XVI"

*/