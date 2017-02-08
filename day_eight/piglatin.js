function translatePigLatin(str) {
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    return str + 'way';

  } else {
    //Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    return str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
}

/* Example Output

translatePigLatin("california") should return "aliforniacay".

*/