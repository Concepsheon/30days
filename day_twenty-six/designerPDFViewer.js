/*In this type of PDF viewer, the width of the rectangular selection area is equal to the number of letters in the word times the width 
of a letter, and the height is the maximum height of any letter in the word.

Consider a word consisting of lowercase English alphabetic letters, where each letter is 1mm wide. Given the height of each letter in 
millimeter find the total area that will be highlighted by blue rectangle in mm when the given word is selected in our new PDF viewer.

Input Format
The first line contains 26 space-separated integers describing the respective heights of each consecutive lowercase English letter. 
The second line contains a single word, consisting of lowercase English alphabetic letters.

*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine(),
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  letterWidths = {},
  max_height,
  heights = [],
  area;
  
  //make an object matching letters and their respective heights
  letters.forEach(function(letter, i) {
    letterWidths[letter] = h[i];
  });
  
  for(var i = 0; i < word.length; i++) {
    heights.push(letterWidths[word[i]]);
  }
  
  //find max letter height in string
  max_height = Math.max(...heights);
  
  area = word.length * 1 * max_height;
  
  console.log(area);
    
}


/* Example

"abc" should return 9;

*/

