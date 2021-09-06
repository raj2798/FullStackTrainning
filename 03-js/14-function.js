//2 syntax in old js

//1--Function declaration syntax
/*function sum(x, y) {
  let res = x + y;
  return res;
}
console.log(sum(10, 30));*/

function sum_square(arr) {
  res = 0;
  for (i = 0; i < arr.length; i++) {
    num = arr[i] * arr[i];
    res = res + num;
  }
  return res;
}

console.log(sum_square([1, 2, 3, 4]));

//2. Function Expression Syntax
let sum = function (arr) {
  res = 0;
  for (i = 0; i < arr.length; i++) {
    num = arr[i] * arr[i];
    res = res + num;
  }
  return res;
};
console.log(sum([1, 3, 5, 7]));

let array = function (arr) {
  let new_arr = new Array();
  for (i = 0; i < arr.length; i++) {
    new_arr[i] = arr[i] * arr[i];
  }
  return new_arr;
};
console.log(array([1, 2, 3, 4]));

//1 syntax in new js {ES2015} - arrow function
