const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2,3,4,5,6,7,8,9] for [1,2,3,4,5,6,7,8,9]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6,7,8,9]), [2,3,4,5,6,7,8,9])
  });
});

 
