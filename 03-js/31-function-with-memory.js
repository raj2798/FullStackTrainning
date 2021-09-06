// function configure(ipAddress, port) {
//   return "http://" + ipAddress + ":" + port;
// }
// console.log(configure("127.0.0.1", 3000));

// version 2 (Curried function)
function configure(ipAddress) {
  return function (port) {
    return "http://" + ipAddress + ":" + port;
  };
}
let f = configure("127.0.0.1");
console.log(f(1000));
console.log(f(2000));
console.log(f(3000));
console.log("-----------------------");

let f1 = configure("123.43.21.0");
console.log(f1(7000));
console.log(f1(8000));
console.log(f1(9000));
