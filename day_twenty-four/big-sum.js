//Given an array of integers of size N, print the sum of the elements in the array

function sum(arr){
    return arr.reduce((prev,curr) => prev + curr);
}

/* Example

sum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]); should return 5000000015

*/
