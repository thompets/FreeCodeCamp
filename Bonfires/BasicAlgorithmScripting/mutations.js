// mutations.js

// Return true if the string in the first element of the
// array contains all of the letters of the string in the
// second element of the array
function mutation(arr) {
    var firstElement = arr[0].toLowerCase();
    var secondElement = arr[1].toLowerCase();

    for (var i = 0; i < secondElement.length; i++){
        if (firstElement.indexOf(secondElement[i]) === -1){
            return false;
        }
    }
    return true;
}

(mutation(['hello', 'hey']));