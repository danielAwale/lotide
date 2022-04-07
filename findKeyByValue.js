const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(objects, value) {
  let result = '';
  for (let object in objects) {
    if (objects[object] === value) {
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

assertEqual(findKeyByValue(bestMovies, "The Dark Knight"));