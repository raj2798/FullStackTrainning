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

// async function ALWAYS returns a Promise object
async function calculateSums() {
  console.log("started calculateSums");

  let result;

  try {
    result = await sum(12, 13);
    console.log("result = ", result);

    result = await sum(result, 14);
    console.log("result = ", result);

    result = await sum(result, 15);
    console.log("result = ", result);
  } catch (error) {
    console.log(error.message);
  }

  return result;
}

calculateSums()
  .then((finalResult) => console.log("The final result is ", finalResult))
  .catch((error) => error.message);

console.log("after call to calculateSums");

for (let i = 0; i < 1e6; i++) {
  for (let j = 0; j < 5e3; j++) {}
}
