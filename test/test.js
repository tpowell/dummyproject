var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

// figure out how to import this properly or use spec file
function isItOdd(num) {
  if (typeof num !== "number")
    return false;

  if ((num % 2) == 0)
   return false;
  else 
   return true;
}

describe('isItOdd', function() {
  
  it('should return true when passsed 1', function () {
     assert.equal(isItOdd(1),true);
  });

  it('should return false when passsed 2', function () {
    assert.equal(isItOdd(2),false);
  });

  it('should return false when passsed "foo"', function () {
    assert.equal(isItOdd('foo'),false);
  });


})
