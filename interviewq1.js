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

const array = ['a', 1, 'c', 'x'];
const array2 = ['c', 1, 'a'];

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
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true;
    }
  }
  // console.log(map);
  //  loop through second array and check if item in
  //  second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if(map[arr2[j]]) {
      return console.log('true');
    }
  }
  return console.log('false');
}


//O(a+b)

const containsCommonItem3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array, array2)