const numbers = [10, 50, 40, 10];
console.log(Math.max(numbers)); //NaN;
console.log(Math.max(...numbers)); //50

const numCopy = [...numbers];

const a = [1, 2, 3],
  b = [4, 5, 6];

const c = [...a, ...b];
console.log(c);
