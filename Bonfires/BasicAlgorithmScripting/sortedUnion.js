// sortedUnion.js

// Write a function that takes two or more arrays and returns a new array of
// unique values in the order of the original provided arrays.

// All values present from all arrays should be included in their original order,
// but with no duplicates in the final array.

function unite(arr1, arr2, arr3){
    // combine all arrays into single array
    var combinedArr = arr1.concat(arr2).concat(arr3);

    // a new array will be returned by filter
    return combinedArr.filter(function(value, index){
        return combinedArr.indexOf(value) === index;
    });
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);