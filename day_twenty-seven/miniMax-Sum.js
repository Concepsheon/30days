/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Input Format
A single line of five space-separated integers.

Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated 
by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)

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
    var a_temp = readLine().split(' ');
    var arr = a_temp.map(Number),
    temp = arr,
    sumArr = [];
    
    arr.forEach(function(ele, i) {
        temp = arr.slice();
        temp.splice(i,1);
        sumArr.push(temp.reduce(function(curr, next) {
            return curr + next;
        }));
    });
    
    console.log(Math.min(...sumArr), Math.max(...sumArr));
}

/* Example

1 2 3 4 5 should return 10 14

*/

