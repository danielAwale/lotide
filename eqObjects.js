const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if(obj1.length !== obj2.length) {
    return false;
  }

  for (let key in object1){
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      for (let i = 0; i < object1[key].length; i++){
        if(object1[key][i] !== object2[key][i]){
          return false;
          
        }
      } 
      // we finished the loop at this point
    } else {
        // if one is a primitive type and the other an array/object will be false
      // if primitive types not same it will be false
          return object1[key] === object2[key];
    }
      

    
  }
  return true;
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 

const cd = { d: "1", c: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), false); 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); 


module.exports = eqObjects;