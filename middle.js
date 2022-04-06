const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
  }

};

const middle = function(array) {
  let result = Math.floor(array.length / 2);
  let emptyArray = [];
  if (array.length <= 2) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    return [array[result - 1], array[result]];
  }
  return array[result];
};

console.log(middle([1,1,1,2,2,2]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2]));
console.log(middle([0]));
