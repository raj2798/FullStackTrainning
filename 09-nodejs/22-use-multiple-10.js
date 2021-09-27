const Countdown = require("./22-multiple-10");

const c = new Countdown(0);

c.ee.on("started", (event) => {
  console.log(event.a);
});

c.ee.on("multiple_10", (event) => {
  //console.log(event.currentTime);
  process.stdout.write(`${event.currentTime} `); //in single line output
});

c.start();
