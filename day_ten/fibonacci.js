//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num
function sumFibs(num) {
  var prevFib = 1, currFib = 1, nextFib = 0, sum = 2;
  for(var i = 0; i < num; i++) {
    nextFib = prevFib + currFib;
    prevFib = currFib;
    currFib = nextFib;
    if(currFib <= num && currFib % 2 !== 0) {
      sum += currFib;
    }
  }
  return sum;
}

/* Example

sumFibs(4); should return 5

*/