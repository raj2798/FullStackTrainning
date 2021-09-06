//forEach() -- when you want to iterate through each items and do something with each item(for loop)
//map() -- [1,2,3] -->[1,4,9]
//find() -- find the first item that satiesfies the given condition
//filter() --  find all the first item that satiesfies the given condition and it always return array
//reduce() -- generate a single value from the items in the array

//explore: some(), every()

const numbers = [14, 23, 65, 11, 34, 80];
numbers.forEach(function (item, idx) {
  //like a for loop
  console.log(idx, item);
});

const squaresOfNumbers = numbers.map(function (item, idx) {
  return item * item;
});
console.log(squaresOfNumbers);

const numberGreaterThan30 = numbers.find(function (item) {
  return item > 30;
});
console.log(numberGreaterThan30);

const allNumberGreaterThan30 = numbers.filter(function (item) {
  return item > 30;
});
console.log(allNumberGreaterThan30);

const numberOdds = numbers.reduce(function (acc, item, idx) {
  return acc + item;
}, 0);

console.log(numberOdds);

//typically way of working with array iterators (Sunctional style)
const squareOfOdds = numbers
  .filter(function (item) {
    return item % 2 === 1;
  })
  .map(function (item) {
    // return item * item;
    return Math.pow(item, 2);
  });
console.log(squareOfOdds);
