function sum(x, y) {
  const promise = new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject(new Error("arguments are not numbers"));
      return;
    }

    setTimeout(() => {
      const result = x + y;
      resolve(result);
    }, 2000);
  });

  return promise;
}

// simplified code
const calculateSums = async () => {
  console.log(2);
  let result;
  try {
    result = await sum(12, 13);
    console.log(4);
    console.log(result);

    result = await sum(result, 14);
    console.log(5);
    console.log(result);

    result = await sum(result, 15);
    console.log(6);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};

console.log(1);
calculateSums();
console.log(3);
