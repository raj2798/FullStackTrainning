const date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toUTCString());

const aug15 = new Date(2021, 7 /*jan -0 dec-11*/, 15);
console.log(aug15);

console.log(date.getMonth()); //7
console.log(date.getDay()); //0-6 (4)
console.log(date.getDate());
console.log(date.getFullYear());

console.log(date.getHours());

date.setMonth(9);
console.log(date);
console.log(date.getDay());

const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
console.log(oneWeekFromNow);
