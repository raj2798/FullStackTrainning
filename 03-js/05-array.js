// let emptyArray = [];
// emptyArray[0] = 1;
// emptyArray[1] = 2;

let primes = [2, 3, 5, 7, 11, 13];
console.log(primes[0]); // 2
console.log(primes[5]); // 13
console.log(primes[6]); // undefined
// primes[primes.length - 1]

console.log(primes.length); // 6

primes[2] = "Five"; // arrays can have values of different data types
console.log(primes);

primes[6] = 17;
primes[8] = 23;
console.log(primes);

for (let idx = 0; idx < 5; idx = idx + 1) {
  console.log(idx);
}
