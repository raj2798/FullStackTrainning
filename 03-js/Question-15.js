function find(arr, op) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += op(arr[i]);
  }
  return res;
}

let a = [1, 2, 3];

console.log(
  find(a, function (x) {
    return x * x;
  })
);
console.log(
  find(a, function (x) {
    return x * x * x;
  })
);
