// dynamically typed
var x = 1.5; // number
console.log(typeof x); // number
console.log(x);

x = "hello";
console.log(typeof x); // string
console.log(x);

if (true) {
  var y = 100; // not block scoped
  let z = 100; // ES2015 way - z is block-scoped
}

console.log(y);
// console.log( z ); // error

var x = 2.5; // ok - ignores var and reassigns x variable
console.log(x);
