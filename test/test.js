var assert = require( 'chai' ).assert;

describe ('happy number', function(){
  it('should square each member digit and add them together', function(){
    var p = happyNum(19);
    assert.deepEqual(p, [1,9,82], 'it fails to add the squares');
  });
  it('should find 19 happy', function(){

  });
});
