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
  // console.log(obj1,obj2)
  if(obj1.length !== obj2.length) {
    return false;
  }

  for (let obj in object1){
    // console.log(object1[obj], object2[obj])
    if(Array.isArray(object1[obj]) && Array.isArray(object2[obj])) {
      for (let i = 0; i < object1[obj].length; i++){
        if(object1[obj][i] !== object2[obj][i]){
          // console.log(object1[obj][i])
          // console.log(object2[obj][i])
          return false;
          
        }
      } 
      // we finished the loop at this point
    } else {
        // if one is a primitive type and the other an array/object will be false
      // if primitive types not same it will be false
          return object1[obj] === object2[obj];
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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); 

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); 

// const cd = { d: "1", c: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); 

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); 

// const testOne = {
//   a: [1, 2, 3, 4, 5],
//   b: false
// }

// const testTwo = {
//   a: [undefined, null, 3, 4, 5],
//   b: true
// }

// console.log(eqObjects(testOne, testTwo));

const testThree = {
  b: true,
  a: [2, 3, 4, 5]
}

const testFour = {
  b: true,
  a: [1, 2, 3, 4, 5],
}

console.log(eqObjects(testThree, testFour));
