const assertArraysEqual = function(arr1, arr2){
  if(!eqArrays(arr1, arr2)){
    console.log(`🔥🔥🔥Assertion Failed: [${arr1}] !== [${arr2}]`);
    } else {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
    }
  }
 
  const eqArrays = function(arr1, arr2){
    if(arr1.length !== arr2.length){ // to check whether the lengths of the arrays are the same
      return false;
    } 
    for (let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]) // loop will go through every value stored in the index of array 1 and array 2 and see if they are equal.
          return false;
      }
      return true;
    }

    const flatten = function(nestedArr) {
      let newArr = [].concat.apply([], nestedArr); // defined a new variable with 2 methods to join the nestedArr to one!
      return newArr
    }
      console.log(flatten([1,2,[3,4]]));
  

module.exports = flatten
  