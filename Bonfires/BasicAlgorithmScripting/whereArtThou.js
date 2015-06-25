// whereArtThou.js

// Make a function that looks through a list (first argument)
// and returns an array of all objects that have equivalent
// property values (second argument).

function where(collection, source) {
    var newArray = [];

    for (var i = 0; i < collection.length; i++){
        for (var key in source){ // find source property
            if (collection[i].hasOwnProperty(key)){

                // check values for matched property
                if (collection[i][key] === source[key]){
                    newArray.push(collection[i]);
                }
            }
        }
    }

    return newArray;
}

where([{ first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
