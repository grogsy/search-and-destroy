'use strict';

//Complete this algo
// const isLoop = linkedlist => {
//   if (linkedlist.head === null) return false;

//   let testObj = {};

//   let count = 0;

//   let node = linkedlist.head;
//   while (node.next) {
//     if (testObj[node.value]) {
//       return true;
//     } else {
//       testObj[node.value] = count;
//       count++;
//     }

//     node = node.next;
//   }

//   return false;
// };

const isLoop = linkedlist => {
  if (linkedlist.head === null) return false;

  let count = 0;

  let fast = linkedlist.head;
  let slow = linkedlist.head;

  while (fast.next) {
    fast = fast.next;
    if (fast === slow) {
      return true;
    }

    count++;
    if (count % 2 === 0) {
      slow = slow.next;
    }
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
