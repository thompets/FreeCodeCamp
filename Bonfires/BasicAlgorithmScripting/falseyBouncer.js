// falseyBouncer.js

// Remove all falsey values from array
// falsey values are:
//        false, null, 0, '', undefined, and NaN
function bouncer(arr) {
    var newArray = [];

    newArray = arr.filter(function(x){ // filter will create a new array
        return (x !== false && x !== '' && x !== undefined && x !== null && x !== 0);
    });

    console.log(newArray);
    return newArray;
}
bouncer([7, 'ate', '', false, 9]);