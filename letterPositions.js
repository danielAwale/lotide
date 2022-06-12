const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function (sentence){
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if(!results[sentence[i]]){
      const array = [];
      array.push(i);
      if(sentence[i] !== " "){
        results[sentence[i]] = array;
       } 
    } else {
      if(sentence[i] !== " "){
        results[sentence[i]].push(i);
      }
    }
    }
      return results;
  }  


console.log(letterPositions("Hello World"));

module.exports = letterPositions;







