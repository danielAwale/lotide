const assertArraysEqual = function(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i] && arr1.length !== arr2.length)
    console.log(`🔥🔥🔥Assertion Failed: ${arr1} !== ${arr2}`);
    }
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }

  const eqArrays = function(arr1, arr2){
    if(arr1.length !== arr2.length){
      return false;
    } 
    for (let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i])
          return false;
      }
      return true;
    }

    ////////////////////////////////////////////////////////////////////////

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);
  console.log(results1);

const movies = ["Thor", "Morbius", "Memento"];
  const results2 = map(movies, movie => movie[0]);
  console.log(results2);


  assertArraysEqual(words, results1);
  assertArraysEqual(movies,results2);