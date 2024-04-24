/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:


maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/

const maxDepth = (
  arr,
  counters = Array(arr.length).fill(0),
  counterTrack = arr.length - 1
) => {
  console.log(counters);
  console.log(arr[arr.length - 1]);

  if (arr[arr.length - 1] === undefined) return Math.max(...counter);
  if (Array.isArray(arr[arr.length - 1])) {
    counters[counterTrack]++;
    maxDepth(arr[arr.length - 1], counters, counterTrack);
  } else {
    arr.pop();
    counterTrack--;
  }
  console.log(counters);
  return Math.max(...counters);
};

console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]])); // [1, 4, 1, 1, 1, 2]
// console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]));
// console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]));

// module.exports = { maxDepth };

// ChatGPT Solution ----->
// function maxDepth(arr) {
//   // Helper function to compute depth
//   function computeDepth(array, currentDepth) {
//     if (!Array.isArray(array)) {
//       return currentDepth;
//     }
//     let max = currentDepth;
//     for (let element of array) {
//       max = Math.max(max, computeDepth(element, currentDepth + 1));
//     }
//     return max;
//   }

//   // Start recursion from depth 1
//   return computeDepth(arr, 1);
// }
