//John Watson performs an operation called a right circular rotation on an array of integers. Watson performs this operation k times. 
//To test Sherlock's ability to identify the current element at a particular position in the rotated array, Watson asks q queries, 
//where each query consists of a single integer, m , for which you must print the element at index m in the rotated array.

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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    
    for(var i = 0; i < k; i++) {
        var shiftedEle = a.pop();
        a.unshift(shiftedEle);
    }
    
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[m]);
    }
}
