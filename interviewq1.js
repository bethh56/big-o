// Given 2 arrays, create a function that
// let's a user know (t/f) whether these 2 arrays
// contain any common items
// For Example
// const array = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ---------------
// const array = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return t or f

// O(n^2) nested for loop would be a solution but not the best
 
// const containsCommonItem = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) {
//         console.log('true');
//       }
//     }
//   }
//   console.log('false');
// }

// containsCommonItem(array, array2);

const array = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// array ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }
// array2[index] === obj.properties

const containsCommonItem = (arr1, arr2) => {
  // loop through first array and create object 
  // where properties === items in the array
  // loop through second array and check if item in
  // second array exists on created object
}

//O(a+b)