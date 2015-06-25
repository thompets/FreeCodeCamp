// largestNumbersInArray.js

// Return an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr) {
    var newArray = [];

    for (var j = 0; j < arr.length; j++){
        // sort values from high to low
        arr[j].sort(function(a, b){
            return a-b;
        });

        newArray.push(arr[j][0]); // pick the first item in array
    }

    return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);