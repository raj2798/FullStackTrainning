function exponentFactory(n) {
  if (n === 2) {
    function square(x) {
      return x * x;
    }
    return square;
  } else if (n === 3) {
    function cube(x) {
      return x * x * x;
    }
    return cube;
  } else {
    return function (x) {
      return x;
    };
  }
}
let toPower2 = exponentFactory(2);
console.log(toPower2(12));

let toPower3 = exponentFactory(3);
console.log(toPower3(12));

let identity = exponentFactory(100);
console.log(identity(4));
