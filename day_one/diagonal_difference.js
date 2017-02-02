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

function diagnolDiff(size, arr){
	var length = size - 1;
	var diagnol1 = 0;
	var diagnol2 = 0;
	
	for(i = 0; i < size; i ++){
		diagnol1 += arr[i][i];
		diagnol2 += arr[i][length - i];
	}
	
	var diff = Math.abs(diagnol1 - diagnol2);
	
	return diff;
}


function main() {
    var n = parseInt(readLine(), 10);
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var res = diagnolDiff(n,a);
    return console.log(res);
}