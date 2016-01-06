var assert = require( 'chai' ).assert;
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
  // it('should write a file', function(done){
  //   fs.writeFile( 'mytest.text', '123', function(err){
  //     assert( !err );
  //     var result = fs.readFileSync('mytest.text');
  //     assert(result, '123');
  //     done();
  //   });
  // });
});




//   // describe('fizzbuzz', function(){
//   //   it('should count to 2', ()=>{

//   //   })
//   // });
// describe('fizzbuzz', function(){
//   it('counts to 1', function(){
//     assert.deepEqual( fbCount(1), [1]);
//   });
//   it('counts to 2', function(){
//     assert.deepEqual(fbCount(2), [1,2]);
//   });
//   it('returns "fizz" for divisible by 3', function(){
//     assert.deepEqual(fbCount(3), [1,2,'fizz']);
//   });
//   it('returns correct sequence', function(){
//     assert.deepEqual(fbCount(16), [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16]);
//   });
// });
// function fbCount(count){
//   // var result = new Array(count);
//   // for ( var n = 1; n < count + 1; n++){
//   //   var value = '';
//   //   if (n % 3 === 0) value = 'fizz';
//   //   if (n % 5 === 0) value += 'buzz';
//   //   result[n-1] = value || n;
//   // }
//   // return result;
//   return [...Array(count)].map((x, n) => {
//     console.log(x);
//     n++;
//     var value = '';
//     if ( n % 3 === 0 ) value = 'fizz';
//     if ( n % 5 === 0 ) value += 'buzz';
//     return value || n;
//   });
// }
