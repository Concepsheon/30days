//Given S, print the number of words in S on a new line.

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
    var s = readLine();
    var reg = /(?=[A-Z][^A-Z])/g;
    console.log(s.split(reg).length);

}

/* Example

saveChangesInTheEditor should return 5

*/
