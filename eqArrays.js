const assertEqual = require('./assertEqual');


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

module.exports = eqArrays;