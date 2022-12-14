/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array.



Examples:
spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => 14;
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];
***********************************************************************/

function spreadItOut(array1, array2) {
    return arr = [...array1, ...array2];          // taking the arrays and spreading them to put them together and return one array
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;
