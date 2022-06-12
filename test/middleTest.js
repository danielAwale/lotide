const { assert } = require('chai');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("returns [1,2] for [1,1,1,2,2,2]", () => {
    assert.deepEqual(middle([1,1,1,2,2,2]), [1,2])
  });
});

// assertArraysEqual(middle([1,1,1,2,2,2]), [1,2]);
// assertArraysEqual(middle([1,2,3,4,5]), [3]);