const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
  }

};

const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] && arr1.length !== arr2.length)
      console.log(`🔥🔥🔥Assertion Failed: ${arr1} !== ${arr2}`);
  }
  console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
};





// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.



const takeUntil = function(array, callback) {
  // make a new array
  const newArray = [];
  // creating a loop
  for (const inputs of array) {
    // finding the value. conditionals
    if (callback(inputs)) {
      return newArray;
    } else {
      newArray.push(inputs);
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2);
