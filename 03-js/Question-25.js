const phone = [
  {
    name: "Samsung Galaxy S10+",
    price: 620,
    type: "refurbished",
    manufacturer: "Samsung",
  },
  {
    name: "Apple iPhone 7 Plus",
    price: 620,
    type: "refurbished",
    manufacturer: "Apple",
  },
  { name: "One plus 6", price: 430, type: "new", manufacturer: "OnePlus" },
  { name: "Apple iPhone Xs", price: 910, type: "new", manufacturer: "Apple" },
  {
    name: "One Plus 7",
    price: 430,
    type: "refurbished",
    manufacturer: "OnePlus",
  },
  {
    name: "Apple iPhone 8 Plus",
    price: 610,
    type: "new",
    manufacturer: "Apple",
  },
];

const namesOfPhones = [];

phone.forEach(function (item) {
  namesOfPhones.push(item.name);
});
console.log("Phone Names: ", namesOfPhones); // phone names(1)

const newPhone = [];
newPhone.push(
  phone.filter(function (item) {
    if (item.type === "new") {
      return item;
    }
  })
);

console.log("New Phones: ", newPhone); // new phones(2)

const lessPricePhone = [];
lessPricePhone.push(
  phone.filter(function (item) {
    if (item.price < 440) {
      return item;
    }
  })
);
console.log("Phones below 440: ", lessPricePhone); // less Price Phone(3)
