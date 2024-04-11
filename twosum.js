/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 


  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

// const twoSum = (arr, target) => {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     const diff = target - arr[i];
//     if (obj[diff]) {
//       return true;
//     } else {
//       obj[arr[i]] = true;
//     }
//   }
//   console.log(obj);
//   return false;
// };

// console.log(twoSum([2, 5, 11, 15], 7)); // -> target = 7
// console.log(twoSum([2, 5, 0, 11, 15], 2)); // -> target = 7
// console.log(twoSum([3, 5, 11, 15, 5, 3], 7)); // -> target = 7

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => {};

console.log(threeSum([1, 2, 5, 3, 15], 6)); // -> true
console.log(threeSum([2, 5, 0, 11, 15], 2)); // -> false
console.log(threeSum([3, 5, 1, 15, 6, 7], 10)); // -> true

// module.exports = { twoSum, threeSum };
