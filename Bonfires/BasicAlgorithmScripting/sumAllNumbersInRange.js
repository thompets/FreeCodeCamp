// sumAllNumbersInRange.js

// Return sum of two numbers, from array
// and all numbers between them
function sumAll(arr) {
    // apply method calls function with
    // 2 parameters (this, [argsArray]
    var maxNum = Math.max.apply(null, arr);
    var minNum = Math.min.apply(null, arr);
    var sumOfArray = 0;

    // without using arr.reduce()
    for (var i = minNum; i <= maxNum; i++){
        sumOfArray += i;
    }

    // using arr.reduce()
    var newArr = [];
    for (var j = minNum; j <=maxNum; j++){
        newArr.push(j);
    }

    var sumOfNewArr = newArr.reduce(function(total, num){
        return total + num;
    });

    return(sumOfNewArr);
}

sumAll([1, 4]);