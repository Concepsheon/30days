//Given an array of integers, calculate which fraction of its elements are positive, 
//which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. 
//Print the decimal value of each fraction on a new line.

function averages(size, arr){
	var denom = size;
	var positives = 0;
	var negatives = 0;
	var zeros = 0;
	var average = "";
	
	
	for(i = 0; i < size; i++){
		if(arr[i] > 0){
			positives++;
		}
		else if(arr[i] < 0){
			negatives++;
		}
		else if(arr[i] === 0){
			zeros++;
		}
	}
	
	var positive = positives / denom;
	var negative = negatives / denom;
	var zero = zeros / denom;
	
	average += positive + "\n" + negative + "\n" + zero;
	
	return average;
	
}

/* Example

averages(6, [-4 3 -9 0 4 1]) should return

0.500000
0.333333
0.166667

*/
