const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')


const middle = function(array) {
  let result = Math.floor(array.length / 2);
  let emptyArray = [];
  if (array.length <= 2) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    return [array[result - 1], array[result]];
  }
  return [array[result]];
};

// console.log(middle([1,2,3,4,5]));
// console.log(middle([1,2,3,4,5,6]));
// console.log(middle([1]));

module.exports = middle;