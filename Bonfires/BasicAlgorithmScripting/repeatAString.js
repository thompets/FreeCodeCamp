// repeatAString.js

// repeat a given string (str) a given number of times (num)
function repeat(str, num) {

    if (num < 1) return ''; // negative and 0 as num should return empty string
    var result = '';
    while(num > 1){
        if (num && 1) result += str;
        num >>= 1, str += str; // right shifts a signed number of bits
    }

    return result + str;
}

repeat('abc', 3);