//Remove all elements from the initial array that are of the same value as the arguments
function destroyer(arr) {
 var args = [].slice.call(arguments);
  var argsArr = args.slice(1);
  return arr.filter(function(ele){
    //filter out numbers not in arguments array
    return argsArr.indexOf(ele) === -1;
  });
}

/* Example

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]

*/