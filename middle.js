const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  } 
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i])
        return false;
    }
  }


const middle = function(array) {
  let result = Math.floor(array.length / 2);
  let emptyArray = [];
  if (array.length <= 2) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    return [array[result - 1], array[result]];
  }
  return array[result];
};

equalArrays((middle([1,1,1,2,2,2])));
equalArrays((middle([1,2,3,4,5])));
equalArrays((middle([1,2])));
equalArrays((middle([0])));

module.exports = middle;