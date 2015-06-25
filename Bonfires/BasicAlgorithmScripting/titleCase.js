// titleCase.js

// Title case a Sentence
// First letter of every word should be capitalized.
function titleCase(str){
    var lowerStr = str.toLowerCase();
    var arrayOfStr = lowerStr.split(" "); // build array from sentence

    for (var i = 0; i < arrayOfStr.length; i++){
        arrayOfStr[i] = arrayOfStr[i].charAt(0).toUpperCase() + arrayOfStr[i].substr(1);
    }

    return arrayOfStr.join(" ");
}

titleCase("I'm a little tea pot");