//Flatten a nested array

function steamrollArray(arr) {
  var flattenArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flattenArr = flattenArr.concat(steamrollArray(arr[i]));
        } else {
            flattenArr.push(arr[i]);
        }
    }
    return flattenArr;
}

/* Example

steamrollArray([1, [2], [3, [[4]]]]); should return [1, 2, 3, 4]

*/