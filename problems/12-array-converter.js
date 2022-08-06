/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

// function arrayConverter(array) {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//       let keys = array[i];
//       if (obj[keys] === undefined) {
//         obj[keys] = 1;
//       }else {
//         obj[keys]++
//       }
//   }return obj
// }

function arrayConverter(array) {
  let obj = {};       // create new object

  array.forEach((key)=>{      //loop the array to find the key
    if (obj[key] === undefined) {   // if the key is not in the object
      obj[key] = 1;                 // set that key and return 1 as a value
    }else {
      obj[key]++                 // if the key is name is found increase the value count
    }
  })
  return obj                     // return the new object
}
console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
// console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
