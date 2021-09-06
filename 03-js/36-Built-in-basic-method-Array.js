const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.slice(1, 4)); //slice 1 start index and 4 excluding index(4-1=3)
numbers.push(7);
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.unshift(0);
numbers.unshift(-1);
numbers.unshift(-2);
console.log(numbers);

console.log(numbers.shift());

console.log("--------------------");

//splice()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// removing 4 5 6 and inser 14,15,16
arr.splice(3, 3, 14, 15, 16);
console.log(arr);

console.log("--------------------");

const names = ["Raj", "Akshay", "Omkar", "Sai"];
console.log(names.sort());

console.log(names.includes("Raj"));
console.log(names.includes("RAJ"));
console.log(names.includes("Pink"));

console.log("--------------------");
console.log("Sorting arr");
arr.sort(function (x, y) {
  //   if (x < y) {
  //     return -1;
  //   }
  //   if (x > y) {
  //     return 1;
  //   }
  //   if (x === y) {
  //     return 0;
  //   }
  return x - y;
});
console.log(arr);
