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

const countLetter = function(countString) {
  let obj = {}
  let newstrng = countString.toLowerCase().replace(/\s/g, '').split("");
  // split() will change the strings in countString to an array
  for (char of newstrng) {
      if(obj[char]){
        obj[char] += 1;
      } else {
        obj[char] = 1;
    } 
    
  }
    return obj;
}

countLetter("This is a string");