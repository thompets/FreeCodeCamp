// diffTwoArrays.js

// compare two arrays and return new array
// of values not found in both arrays
function diff(arr1, arr2) {
    // create a newArray to be returned
    var newArray = [];

    // determine the largest array
    var largeArray;
    var smallArray;

    // find the largest array
    if (arr1.length > arr2.length){
        largeArray = arr1;
        smallArray = arr2;
    } else{
        largeArray = arr2;
        smallArray = arr1;
    }

    for (var index = 0; index < largeArray.length; index++){
        // array.indexOf(searchElement)
        if (smallArray.indexOf(largeArray[index]) === -1) {
            newArray.push(largeArray[index]);
        }

        // what happens when smallArray[index] cannot be found?
        if (largeArray.indexOf(smallArray[index]) === -1 && smallArray[index] !== undefined){
            newArray.push(smallArray[index]);
        }
    }

    return newArray;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);