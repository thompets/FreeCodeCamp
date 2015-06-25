// slasherFlick.js

// return remaining elements of an array after chopping off
// n elements form the head
function slasher(arr, howMany){
    if (howMany < 1) {
        return arr;
    } else if (howMany >= arr.length){
        return [];
    }

    return arr.splice(arr.length - 1, howMany);
}

slasher([1, 2, 3], 2);