console.log(Math.max(12, 32, 1, 3, 4, 11, 100));

const arr = [12, 32, 1, 30];
console.log(Math.max(...arr)); //(...) <-- Spread oprator
console.log(Math.floor(2.09));
console.log(Math.ceil(2.09));
console.log(Math.round(2.09));
console.log(Math.sqrt(9));
console.log(9 ** 0.5);
console.log(Math.random());

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(100, 200));
