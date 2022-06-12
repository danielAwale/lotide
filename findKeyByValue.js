const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(objects, value) {
  let result = '';
  for (let object in objects) { // looping through the object
    if (objects[object] === value) { // if the values of the actual objects and the value of the parameter are the same it will return the key. 
      return object;
    }
  }

  return result;
};


const bestMovies = {
  comedy : "The Hangover",
  superhero : "The Dark Knight",
  horror : "The Conjouring"
};

console.log((findKeyByValue(bestMovies, "The Dark Knight")));

module.exports = findKeyByValue;