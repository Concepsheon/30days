/*

Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.

*/

function addTogether() {
  var args = [...arguments];
  if (args.length > 1) {
    if(typeof args[0] !== "number" || typeof args[1] !== "number") {
      return undefined;
    }
    return args[0] + args[1];
  } 
  
  if(args.length === 1) {
    if(typeof args[0] !== "number") {
      return undefined;
    } else {
      return function(b) {
        if(typeof b === "number") {
          return args[0] + b;
        }
      };
    }
  }
  
}

/* Example

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.

*/
