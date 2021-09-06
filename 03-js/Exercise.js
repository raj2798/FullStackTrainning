// create a date object that represents your birthDate - check the day.
// setFullYear(2021) and check if birthday is falling on the right day.

const date = new Date();
date.setFullYear(1998, 5, 27);
const day_birth = date.getDay();
date.setFullYear(2021);
const day_now = date.getDay();
console.log(day_now);
if (day_birth === day_now) {
  console.log("same day ");
} else {
  console.log();
}
