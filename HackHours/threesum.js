/*
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

// const threeSum = (arr, target) => {
//   const inputArray = arr;
//   const pointers = {
//     first: inputArray[0],
//     second: inputArray[1],
//     third: inputArray[2],
//     pointerFirst: 0,
//     pointerSecond: 1,
//     pointerThird: 2,
//   };

//   console.log(pointers.pointerFirst);

//   for (let i = pointers.pointerFirst; i < inputArray.length; i++) {
//     console.log(inputArray[i]);
//     if (i < inputArray.length - 1) {
//       pointers.pointerFirst++;
//     }

//     for (let j = pointers.pointerSecond; j < inputArray.length; j++) {
//       console.log(inputArray[j]);
//       if (j < inputArray.length - 1) {
//         pointers.pointerSecond++;
//       }

//       for (let k = pointers.pointerThird; k < inputArray.length; k++) {
//         console.log(inputArray[k]);
//         if (inputArray[k] !== undefined) {
//           pointers.pointerThird++;
//         }
//         // console.log(
//         //   `P1${pointers.pointerFirst}, P2${pointers.pointerSecond}, P3${pointers.pointerThird}`
//         // );
//       }
//     }
//   }
// };

// console.log(threeSum([1, 2, 5, 3, 15], 6)); // -> true
// console.log(threeSum([2, 5, 0, 11, 15], 2)); // -> false
// console.log(threeSum([3, 5, 1, 15, 6, 7], 10)); // -> true

// module.exports = { twoSum, threeSum };

/*
{}
[]


*/

// --------> O(n) ---> using Splice ----> Paloma is a rockstar

// function threeSum(array, target) {
//   const result = {};

//   for (let i = 0; i < array.length; i++) {
//     const diff = target - array[i]; //6 - 1 = 5
//     console.log('first', array[i]);

//     array.splice(i, 1);
//     // console.log('new array --->', array[i], array);

//     for (let j = 0; j < array.length; j++) {
//       const newTarget = diff - array[j]; // 5 - 2 =  3
//       if (result[newTarget]) {
//         console.log('you found it! ----->', array[j], newTarget);
//         return true;
//       } else {
//         result[array[j]] = newTarget;
//       }
//       // console.log('newTarget -->', newTarget, array[j], result);
//     }
//   }
//   return false;
// }

// console.log(threeSum([10, 2, 5, 3, 15], 18)); // -> true
// console.log(threeSum([2, 5, 0, 11, 15], 2)); // -> false
// console.log(threeSum([3, 5, 1, 15, 6, 7], 10)); // -> true
//  array = [10, 20, 30, 40, 50];
// let i = 0; // This acts like a "pointer" to the current index of the array.

// // Moving the "pointer" to the next element
// i++;
// console.log(array[i]); // Accessing the element at the new "pointer" location. Output: 20

// // You can also "move" the pointer in a loop to iterate through the array
// for (i = 0; i < array.length; i++) {
//   console.log(array[i]); // This "moves" the pointer from the start of the array to the end, one element at a time.
// }

// */

function hasThreeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order [1,2,3,4,6]

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; //
    let right = arr.length - 1;

    // 1, 2, 6321, 2, 4 3
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      console.log(arr[i], arr[left], arr[right]);
      if (sum === target) {
        return true; // Found three elements whose sum equals the target
      } else if (sum < target) {
        // Increment left pointer if the sum is less than the target
        left++;
      } else {
        // Decrement right pointer if the sum is greater than the target
        right--;
      }
    }
  }

  return false; // No three elements sum up to the target
}

// Example usag5:
const arr = [1, 4, 2, 6, 3];
const target = 5;
console.log(hasThreeSum(arr, target)); // Output: true (because 1 + 2 + 6 = 9)
