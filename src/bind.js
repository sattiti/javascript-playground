var m = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var x1 = m.getX;
console.log(x1()); // The function gets invoked at the global scope
// expected output: undefined

var x2 = x1.bind(m);
console.log(x2());
// expected output: 42
