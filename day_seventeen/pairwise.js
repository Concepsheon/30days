//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
//Once an element has been used, it cannot be reused to pair with another.

function pairwise(arr, arg) {
  var pairsArr = [];
  arr.forEach(function(curr, currIndex) {
    arr.forEach(function(ele, index) {
      if(curr + ele === arg && index > currIndex && pairsArr.indexOf(currIndex) < 0 && pairsArr.indexOf(index) < 0) {
        pairsArr.push(currIndex, index);
      }
    });
  });
  
  
  return pairsArr.reduce(function(a, b) {
    return a + b;
  }, 0);
}

/*Example
pairwise([1,4,2,3,0,5], 7); should return 11
pairwise([], 100) should return 0
*/
