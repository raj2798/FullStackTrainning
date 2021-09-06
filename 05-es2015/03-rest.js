function sumAll(...restOfArgs) {
  console.log(restOfArgs);
}

sumAll(1, 2, 3);

// array destructuring
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const [first, second, ...restOfDays] = days;
console.log(restOfDays);

// object destructuring
let john = {
  "first name": "John",
  age: 32,
  emails: [
    {
      email: "john@gmail.com",
      type: "personal",
    },
    {
      email: "john@example.com",
      type: "work",
    },
  ],
  address: {
    city: "Bangalore",
    pinCode: 560101,
  },
};
const {
  "first name": firstName,
  address: { city, ...restOfAddress },
  ...restOfJohnDetails
} = john;
console.log(restOfJohnDetails, restOfAddress);
