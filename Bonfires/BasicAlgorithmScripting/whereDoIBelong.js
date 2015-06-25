// whereDoIBelong.js

// Return the lowest index at which a value
// (second argument) should be inserted into a
// sorted array (first argument)

function where(arr, num) {
    // Find my place in this sorted array.
    var index;
    arr.sort();

    // compare the values in the arr to num

    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= num){
            index = i;
            return index;
        }
    }
}

where([40, 60], 50);