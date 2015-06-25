// confirmTheEnding.js

// Check if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
    // use the length of second variable as the substr value
    // compare substr to the target param
    return (str.substr(-(target.length)) === target);
}

end('Bastian', 'n');