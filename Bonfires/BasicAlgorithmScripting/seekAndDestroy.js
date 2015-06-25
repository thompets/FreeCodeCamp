// seekAndDestroy.js

// Remove all elements from the initial
// array that are of the same value as these arguments.

function destroyer(arr) {
    var currentArgument;
    var newArray = arr;

    for (var i = 1; i < arguments.length; i++){
        currentArgument = arguments[i];
        newArray = newArray.filter(isNotArg);
    }

    // check for current argument value in arr
    // return only values not equal to argument
    function isNotArg(value){
        return value !== currentArgument;
    }

    return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);