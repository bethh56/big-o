// O(n) - linear time
// const nemo = ['nemo']
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100).fill('nemo');

// const findNemo = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!')
//     }
//   }
// }

// findNemo(large);

// const findNemo2 = array => {
//   array.forEach((fish) => {
//     if(fish === 'nemo') {
//       console.log('Found Nemo!')
//     }
//   });
// }

// const findNemo3 = array => {
//   for(let fish of array) {
//     if(fish === 'nemo') {
//       console.log('Found Nemo!')
//     }
//   }
// }


// O(1) - constant time
// no matter the size of the array and if it increases, it will always run the same
// const boxes = [0, 1, 2, 3, 4, 5]

// const logFirstTwoBoxes = (boxes) => {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes); // 0(2)

// // challenge
// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) { // O(n) or O(input)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; //O(1)
// }

// 3 + n + n + n + n
// BIG O(3 + 4n)

// function anotherFunChallenge(input) {
//   let a = 5; //O(1)
//   let b = 10; //O(1)
//   let c = 50; //O(1)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; //O(n)
//     let y = i + 2; //O(n)
//     let z = i + 3; //O(n)

//   }
//   for (let j = 0; j < input; j++) { 
//     let p = j * 2; //O(n)
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
// }

// Big O(4 + 5n) or // Big O(4 + 7n) if including for loops


// Rule Book
// 1: Worst Case
// const nemo = ['nemo']
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const findNemo = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!')
//       break;
//     }
//   }
// }

// findNemo(everyone);

// 2: Remove Constants


// 3: Different terms for inputs
// const compressBoxesTwice = (boxes, boxes2) => {
//   boxes.forEach((boxes) => {
//     console.log(boxes);
//   });

//   boxes2.forEach((boxes) => {
//     console.log(boxes);
//   });
// }
// O(a + b)

// Log all pairs of array
// const boxes = ['a', 'b', 'c', 'd', 'e'];
// // you would log 1,1; 1,2; 1,3; 1,4 and so on
// const logAllPairsOfArray = (array) => {
//   for (let i = 0; i < array.length; i++) {
//      for (let j = 0; j < array.length; j++) {
//        console.log(array[i], array[j])
//      }
//   }
// }
// logAllPairsOfArray(boxes);
// O(n^2)

// const printAllNumbersThenAllPairSums = numbers => {
//   console.log('these are the numbers;');
//   numbers.forEach((number) => {
//     console.log(number);
//   });

//   console.log('and these are their sums;');
//   numbers.forEach((firstNumber) => {
//     numbers.forEach((secondNumber) => {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])
// 0(n^2)


// const booooo = n => {
//   for (let i = 0; i < array.length; i++) {
//     console.log('booooo!');
//   }
// }

// booooo([1, 2, 3, 4, 5]); //O(n) space complexity O(1)

// const arrayOfHiNTimes = n => {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = 'hi';
//   }
//   console.log(hiArray);
// }

// arrayOfHiNTimes(6) //O(n) 


//Twitter example
// Find 1st, Find Nth
// const array = [{
//   tweet: 'hi',
//   date: 2012
//   }, {
//   tweet: 'my',
//   date: 2014
//   }, {
//   tweet: 'teddy',
//   date: 2018
//   }];
// comparing tweets and dates, would need to nest loops so O(n^2)


// 'jiasjflsjaljlll'.length // O notation would be different for different languages -- O(1) in js

