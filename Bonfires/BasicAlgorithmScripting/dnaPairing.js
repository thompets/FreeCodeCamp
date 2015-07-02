// dnaPairing.js

// The DNA strand is missing the pairing element.
// Match each character with the missing element
// and return the results as a 2d array.


// Base pairs are a pair of AT and CG.
// Match the missing element to the provided character.
// Return the provided character as the first element in each array.
function pair(str){
  var dnaPairs = [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C'], ['A', 'T']];
  var strArray = str.split('');
  var newArray = [];

  for (var i = 0; i < strArray.length; i++){
    switch (strArray[i]) {
      case 'A':
        newArray.push([strArray[i], 'T']);
        break;
      case 'T':
        newArray.push([strArray[i], 'A']);
        break;
      case 'C':
        newArray.push([strArray[i], 'G']);
        break;
      case 'G':
        newArray.push([strArray[i], 'C']);
        break;
    }
  }

  return newArray;
}

pair("GCG");
