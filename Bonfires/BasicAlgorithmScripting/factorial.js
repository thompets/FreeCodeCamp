// factorial.js

// Factorialize a number
function factorialize(num){
    if (num === 0){
        return 1;
    }

    return num * factorialize(num - 1);
}

factorialize(5); // should equal 120