function max(arr, comparator) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (comparator(arr[i], result)) {
      result = arr[i];
    }
  }

  return result;
}

// console.log( max( [ 23, 56, 45, 21 ],  ) );

let persons = [
  { name: "John", age: 32, children: 2 },
  { name: "Jane", age: 28, children: 2 },
  { name: "Mark", age: 44, children: 1 },
  { name: "Mary", age: 30, children: 4 },
];

function compareByAge(currentItem, currentMaximumItem) {
  return currentItem.age > currentMaximumItem.age;
}

// function compareByChildren( x, y ) {
//     return x.children > y.children;
// }

console.log(max(persons, compareByAge));
// console.log( max( persons, compareByChildren ) );
