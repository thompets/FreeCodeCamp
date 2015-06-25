// palindrome.js

// Check for palindromes
// this passes all tests, but does not look pretty,
// can be simplified some way.
function isPalindrome(str){
    var noPuncStr = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var newStr = noPuncStr.toLowerCase().replace(/ /g, '');
    var reverseStr = newStr.split('').reverse().join('');

    if (newStr === reverseStr){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('eye'));