// take two or more arrays and return a new array of unique values in the order of the original provided arrays.
//all values present from all arrays should be included in their original order, but with no duplicates in the final array.

function uniteUnique(arr) {
  var args = [...arguments];
  args = args.reduce(function(curr, next) {
    return curr.concat(next);
  }, []);
  
  var newArr = [];
  
  args.map(function(curr){
    if(!newArr.includes(curr)) {
      newArr.push(curr);
    } 
  });
  
  return newArr;
}

/* Example

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); should return [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]

*/