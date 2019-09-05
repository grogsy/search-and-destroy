'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  if (!array.length) return false;
  console.log(array);
  const mid = Math.floor(array.length / 2);

  console.log(array[mid]);
  if (array[mid] === target) {
    return true;
  } else if (array[mid] > target) {
    return binarySearch(array.slice(0, mid), target);
  } else {
    return binarySearch(array.slice(mid + 1), target);
  }
};

// does not work
// const binarySearch = (array, target, low, high) => {
//   if (low === undefined) low = 0;
//   if (high === undefined) high = array.length;
//   if (!array.length) return false;
//   const mid = Math.floor((high - low) / 2);

//   console.log(array[mid]);
//   console.log(array.slice(low, high));
//   if (array[mid] === target) {
//     return true;
//   } else if (high - low <= 0 || low - high > 0) {
//     return false;
//   } else if (array[mid] > target) {
//     return binarySearch(array, target, low, mid - 1);
//   } else {
//     return binarySearch(array, target, mid + 1, high);
//   }
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
