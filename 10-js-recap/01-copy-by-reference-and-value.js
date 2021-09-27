let x = 1;

let y = x; // copy by value (primtives are copied by value) - x does not change
y++;
console.log(x); // not changed

let arrX = [1, 2, 3, 4];
let arrY = arrX; // copy by reference (non-primitives are copied by reference) - arrY and arrX refer to the same array in memory
arrY[0]++;
console.log(arrX); // changed

let objX = {
  name: "John",
  age: 32,
};
let objY = objX; // copy by reference (no new object is created and objX ad objY refer to the same object in memory)
objY.age++;
console.log(objX);

function increment(b) {
  b++;
  console.log("inside increment, b = ", b);
}

let a = 1;
increment(a); // b = a (copy by value)
console.log("a = ", a); // no change

function incrementAge(objB) {
  objB.age++;
  console.log("inside incrementAge, objB = ", objB);
}

let objA = {
  name: "John",
  age: 32,
};
incrementAge(objA); // objB = objA (copy by reference)
console.log("objA = ", objA);

// Object.entries(), Object.values() / for..in loop -> these are used to make proper copies of object
// Lodash -> deepClone
