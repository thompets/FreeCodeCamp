// findLongestWord.js

// Check string for longest word
// return as number
function findLongestWord(str){
    var separator = " ";
    var arrayOfStrings = str.split(separator);
    var longest = 0;
    var word;

    for(var i = 0; i < arrayOfStrings.length; i++){
        if (longest < arrayOfStrings[i].length){
            longest = arrayOfStrings[i].length;
            word = arrayOfStrings[i];
        }
    }

    return word.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");