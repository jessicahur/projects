// var assert = require( 'chai' ).assert;
var assert = require( 'assert' );
var pets = require( '../pets' );
var fs = require( 'fs' );
// describe('a suite of tests that do x', function(){
  describe ('pets', function(){
  it('should have no dog by default', function(){
    // var sum = 2+2;
    // assert(sum===4, 'sum is not correct');
    // assert.equal( sum, 4, 'sum is not correct');
    var p = pets.getPets({allowDogs: false});
    assert.equal(p.length, 3, 'wrong num of animals');
  });
  // it( 'array compares', function(){
  //   var a = ['red', 'blue', 'green'];
  //   var b = ['red', 'blue', 'green'];
  //   assert.deepEqual( a, b, 'arrays are same' );
  // })
  it( 'should include dogs when allowDogs is true', function(){
    var p = pets.getPets({allowDogs: true});
    assert.equal(p.length, 6, 'fail');
  });
  it('should write a file', function(done){
    fs.writeFile( 'mytest.text', '123', function(err){
      assert( !err );
      var result = fs.readFileSync('mytest.text');
      assert(result, '123');
      done();
    });
  });
});
