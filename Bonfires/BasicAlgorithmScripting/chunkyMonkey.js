// chunkyMonkey.js

// write a function that splits an array (arr)
// into groups (size) and returns them as a
// multi-dimensional array
function chunk(arr, size){
    var newArray = [];

    for (var i = 0; i < arr.length; i += size){
        var test = arr.slice(i, size + i); // slice has a start and end index
        newArray.push(test);
    }

    return newArray;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));