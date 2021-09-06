/*
    number (no int, no float)
    string
    boolean
*/
let x = 1.5;
let greeting1 = "Hello",
  greeting2 = 'H"ello"';
console.log(greeting1);
console.log(greeting2);

console.log(greeting1.length);
console.log(greeting1[0]); // "H"
console.log(greeting1[1]); // "e"
console.log(greeting1[4]); // "o"
console.log(greeting1[5]); // undefined

greeting1[0] = "I"; // does not work - string is immutable
console.log(greeting1);

let isSunny = true;
console.log(typeof isSunny);
