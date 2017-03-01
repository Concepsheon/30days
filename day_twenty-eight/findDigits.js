//Given an integer, N, traverse its digits and determine how many digits evenly divide into N
//Each digit is considered to be unique, so each occurrence of the same evenly divisible digit should be counted

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
    var t = parseInt(readLine());
    var divisibleNums = 0;
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var digits = n.toString().split("");
        
        digits.forEach(function(digit) {
            if(n % digit === 0) {
                divisibleNums++;
            }
        });
        console.log(divisibleNums);
        divisibleNums = 0;
    }
    
}
