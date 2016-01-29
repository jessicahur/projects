function A() {
  this.foo = function(){
    console.log('foo');
  };
}

var a1 = new A();
var a2 = new A();
