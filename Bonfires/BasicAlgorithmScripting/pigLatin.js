// pigLatin.js

// translate provided string to pig latin.
function translate(str) {
    // take first consonant or consonant cluster and move to end followed by 'ay'
    // if starts with vowel, end way at the end of the word
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var normalEnding = 'ay';
    var vowelEnding = 'way';
    var strArray = str.split("");

    for (var i = 0; i < strArray.length; i++){
        var index = strArray.indexOf(vowels[i]);
        if (index === 0){
            str += vowelEnding;
            break;
        }

        // vowel in second position
        if (index === 1){
            var newTr = strArray[0];
            strArray.splice(0, 1);
            strArray.push(newTr + normalEnding);
            str = strArray.join('');
            break;
        }

        // vowel present after first 2 positions
        if (index === 2){
            var firstElement = strArray[0];
            var secondElement = strArray[1];
            strArray.splice(0, 2);
            strArray.push(firstElement + secondElement + normalEnding);
            str = strArray.join('');
        }
    }

    return str;
}

translate("other");