//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
//Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the 
//new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.


function updateInventory(arr1, arr2) {
    var found = false;
    arr2.forEach(function(item) {
      found = false;
      arr1.forEach(function(newItem){
       if(newItem[1] === item[1]) {
         newItem[0] += item[0];
         found = true;
       }
      });
      if(!found) {
        arr1.push(item);
      }
    });
    
    return arr1.sort(function(a, b){
      return a[1] > b[1] ? 1 : -1;
    });
}

/* Example

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); 
should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

*/
