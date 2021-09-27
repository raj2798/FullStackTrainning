const Countdown = require("./21-Countdown-emitter");

const c = new Countdown(100);

c.ee.on("started", () => {
  console.log("started");
});

c.ee.on("multiple_5", (event) => {
  console.log(event.currentTime);
});

c.start();
