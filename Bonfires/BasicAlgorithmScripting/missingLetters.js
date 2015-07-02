// missingLetter.js

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str){
  var strArray = str.split('');
  var num = 0;
  var numArray = [];

  // create number array from str
  for(var i = 0; i < strArray.length; i++){
    numArray.push(str.charCodeAt(i));
  }

  num = numArray[0];

  for (var j = 0; j < numArray.length; j++){
    // will return undefined if statement is not hit
    if ((numArray[j] - j) !== num){
      return String.fromCharCode(numArray[j] - 1);
    }
  }
}

fearNotLetter('abce');
