// /*

// Given an arbitrarily nested array of strings, and a target keyword string,
// return the number of times a keyword appears in a nested array of arrays.

// keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
// keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
// keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

// */
// const keywordCount0 = (array, keyword, counter = 0) => {
//   const newArray = array.flat(Infinity);
//   console.log('newArray', newArray);

//   newArray.forEach((element) => {
//     if (element === keyword) {
//       counter++;
//     }
//   });

//   return counter;
// };

// console.log(keywordCount0(['bye', 'hi', ['cool', 'hi']], 'hi')); // -> 2 because 'hi' appears twice
// // console.log(keywordCount0(['x', 'y', ['x', 'x'], 'a'], 'x')); // -> 3
// // console.log(
// //   keywordCount0(['blah', 'key', ['inside', ['really inside']]], 'lol')
// // ); //-> 0

// function keywordCount1(array, keyword, counter = 0) {
//   if (array.length === 0) return counter;

//   let firstElement = array.shift();
//   console.log(firstElement, counter);
//   if (Array.isArray(firstElement)) {
//     counter = keywordCount1(firstElement, keyword, counter);
//     counter = keywordCount1(array, keyword, counter);
//   } else {
//     if (firstElement === keyword) {
//       counter++;
//     } else {
//       counter = keywordCount1(array, keyword, counter);
//     }
//   }
//   return keywordCount1(array, keyword, counter);
// }
// console.log(keywordCount1(['bye', 'hi', ['cool', 'hi']], 'hi'));
// console.log(keywordCount1(['x', 'y', ['x', 'x'], 'a'], 'x')); // -> 3
// console.log(
//   keywordCount1(['blah', 'key', ['inside', ['really inside']]], 'lol')
// );

// function keywordCount2(array, keyword, counter = 0) {
//   console.log('counter', counter, 'ARRAY', array);
//   if (array.length === 0) return counter;

//   array.forEach((element) => {
//     if (Array.isArray(element)) {
//       console.log(element);
//       counter = keywordCount2(element, keyword, counter);
//       // return = keywordCount2(array.slice(1), keyword, counter);
//     } else {
//       console.log('ELEMENT', element);
//       if (element === keyword) {
//         counter++;
//       }
//     }
//     // console.log(array.slice(1));
//     // return keywordCount2(array.slice(1), keyword, counter);
//   });
//   return counter;
//if arrray call recursion
// }
// console.log(keywordCount2(['bye', 'hi', ['cool', 'hi'], 'hi'], 'hi'));
// console.log(keywordCount1(['x', 'y', ['x', 'x'], 'a'], 'x')); // -> 3
// console.log(
//   keywordCount1(['blah', 'key', ['inside', ['really inside']]], 'lol')
// );
/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = (array, histogram = {}) => {
  // looping through
  //first element is cars
  // on first element
  //
  console.log('HIST---', histogram);
  console.log(array);
  array.forEach((element) => {
    // console.log('CURRENT ELEMENT', element);
    if (Array.isArray(element)) {
      keywordMode(element, histogram);
    } else {
      console.log('CURRENT ELEMENT', element);
      if (!histogram[element]) {
        histogram[element] = 1;
      } else {
        histogram[element]++;
      }
    }
  });
  console.log('HISTOGRAM', histogram);
  const maxValue = Math.max(...Object.values(histogram));
  //   console.log('maxValue', maxValue, 'histogram', histogram);
  const output = [];
  Object.keys(histogram).forEach((element) => {
    if (histogram[element] == maxValue) {
      output.push(element);
    }
  });
  console.log('OUTPUT', output.sort());

  return output.sort();
};
// console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])); // -> ['bat', 'cars']
console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool'])); // -> ['cool']
// module.exports = { keywordCount, keywordMode };

//
