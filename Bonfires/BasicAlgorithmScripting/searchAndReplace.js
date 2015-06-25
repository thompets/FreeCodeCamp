// searchAndReplace.js

// Perform a search and replace on the sentence using
// the arguments provided and return the new sentence.

// before = word you will replace
// after = word you will replace before with
// Preserve Case of original word
function replace(str, before, after) {
    var wordArray = str.split(" ");

    var afterArray = [];
    var beforeArray = [];
    var newAfter = '';
    var newStr = '';

    for (var i = 0; i < wordArray.length; i++){
        if (wordArray[i] === before){
            // isolate each letter in string
            beforeArray = before.split('');

            // see if the first letter is capitalized
            if (beforeArray[0] === beforeArray[0].toUpperCase()){
                // do the same to the after param
                afterArray = after.split('');
                afterArray.splice(0, 1, afterArray[0].toUpperCase());
                newAfter = afterArray.join('');
            } else {
                newAfter = after;
            }

            newStr = before.replace(before, newAfter);
            wordArray.splice(i, 1, newStr);
        }
    }

    return wordArray.join(" ");
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");