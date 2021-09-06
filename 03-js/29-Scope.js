let x = 1; //global variable
let x2 = 10;

function outer() {
  let x = 2; // not same as global x
  let y = 100;
  console.log("outer ", x); //local x
  console.log(x2);
  //   inner function can acces
  // 1.local variable
  //   2. variables in the scope they are declared in
  function inner() {
    let x = 3;
    console.log("inner", x);
    console.log("y inner", y);
  }
  inner();
}
outer();
console.log(x);
