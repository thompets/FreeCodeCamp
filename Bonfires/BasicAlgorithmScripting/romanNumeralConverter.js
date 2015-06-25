// romanNumeralConverter.js

// Convert the given number into a roman numeral (in UPPERCASE)
function convert(num) {
    var numToConvert = num; // prevent modifying parameter
    var romanNum = '';  // create a new string to represent roman numerals

    // break down roman numerals into categories
    var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // create numbers to coincide with romanNumerals
    var numbers =       [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var i = 0; i < romanNumerals.length; i++){
        //
        while (numToConvert >= numbers[i]){
            numToConvert -= numbers[i];
            romanNum += romanNumerals[i];
        }
    }

    return romanNum.toUpperCase();
}

convert(36);