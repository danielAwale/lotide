const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

  const without = function(source, itemsToRemove){
    let resultArr = [];
    for (let i = 0; i < source.length; i++){
      let inArray = false;
      for (let j = 0; j <itemsToRemove.length; j++){
        if(source[i] === itemsToRemove[j]){
          inArray = true;
        }
      }
      if(inArray === false){
        resultArr.push(source[i])
      }
    }
    return resultArr;
  }

  console.log(without([1, 2, 3], [3, 1]));
  console.log(without(["1", "2", "3"], [1, 2, "3"]));
  