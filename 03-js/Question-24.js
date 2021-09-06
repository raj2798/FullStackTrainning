const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];

days.forEach(function (item, idx) {
  console.log(idx, item);
});

const daysCharacters = [];
daysCharacters.push(
  days.map(function (item) {
    return item.length;
  })
);
console.log("No of characters: ", daysCharacters);

const firstCharSandT = [];
firstCharSandT.push(
  days.filter(function (item) {
    if (item[0] === "S" || item[0] === "T") {
      return item;
    }
  })
);
console.log("Days start with letter S and T", firstCharSandT);

const exactlySix = [];
exactlySix.push(
  days.filter(function (item) {
    if (item.length === 6) {
      return item;
    }
  })
);
console.log("Days having exactly 6 letters ", exactlySix);
