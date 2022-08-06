/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
 let obj = {};                           // create new obj

 for (let i = 0; i < string.length; i++) {      // loop the strings paramenter
  let ele = string[i];                          // set varible for each index of the string

  if (obj[ele] === undefined) {               // if the ele is not defined create that element
    obj[ele] = 1                             // add the element into the object and return the value at 1
  }else {
    obj[ele]++                               // if that element is found again in the loop incrase the count value by 1
  }
 }return obj                               // return new obj
}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
