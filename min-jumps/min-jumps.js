'use strict';

// Complete this algo
const minJumps = arr => {
  let index = 0;
  if (index + arr[index] >= arr.length - 1) return 1;

  let argList = [];

  for (let count = 1; count <= arr[index]; count++) {
    argList.push(1 + minJumps(arr.slice(index + count)));
  }

  //console.log(argList);

  return Math.min(...argList);
};

module.exports = minJumps;
