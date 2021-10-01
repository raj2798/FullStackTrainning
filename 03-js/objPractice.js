var a = {
  id: 101,
  name: "Raj Kshirsagar",
  age: 23,
  address: {
    village: "Riswadi",
    post: "Mohopada",
    tel: "Khalapur",
    dist: "Raigad",
    code: {
      pinCode: 410222,
      zipCode: 333021,
    },
  },
};
console.log(a.id);
console.log(a.name);
console.log(a.address.village);
console.log(a.address.code.pinCode);
