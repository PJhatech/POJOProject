/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
restSum(0); // => 0
***********************************************************************/

// you'll need to change the parameters!
function restSum(...nums) {       // used rest method
 let sum = 0          // make a sum varible to store total
  nums.forEach(function (rest) {         // loop the parameter and set varible
    sum += rest                          // add the element in the loop to the sum varible
  })
  return sum
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
