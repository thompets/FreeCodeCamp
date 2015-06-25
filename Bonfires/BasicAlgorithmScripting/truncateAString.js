// truncateAString.js

// take str and truncate by num.
// finish str off with '...'
function truncate(str, num){
    var newStr = '';
    if (str.length > num){ // ensure str is longer that num
        newStr = str.slice(0, (num - 3));
        return newStr += "...";
    } else  {
        return str;
    }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);