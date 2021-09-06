const numbers = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];
const ascArr = numbers.sort(function (x, y) {
  return x - y;
});
console.log("Ascending array: ", ascArr);
const DescArr = numbers.sort(function (x, y) {
  return y - x;
});

console.log("Descending array: ", DescArr);
numbers.push(37);
console.log("after adding 37 to last: ", numbers);

const num = numbers;
num.pop();
num.pop();
console.log("After removing last 2 elements: ", num);

numbers.splice(3, 1, "Seven", "Eleven");
console.log(numbers);

console.log(numbers.indexOf(23));
console.log(numbers.indexOf(41));
