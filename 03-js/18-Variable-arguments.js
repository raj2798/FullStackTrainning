let sum = function (x, y, ...nums) {
  let sum = x + y;
  var a = nums;
  console.log(a);
  for (i = 0; i < nums.length; i++) {
    sum += a[i];
  }
  return sum;
};

console.log(sum(1, 2, 3, 4));
