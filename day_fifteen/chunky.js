// split an array (first argument) into groups the length of size (second argument) and return them as a two-dimensional array


function chunkArrayInGroups(arr, size) {
  var arr2 =[],
      i=0;
 while( i< arr.length){
  arr2.push(arr.slice(i,i+=size));
 }
 return arr2;
}


/* Example 

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

*/