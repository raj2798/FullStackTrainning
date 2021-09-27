const ee = require("./19-event-emitter-emitter");

// ...in another place in you application
ee.on("update", (result) => {
  console.log(result.progress);
});

// ...in yet another place in you application
ee.on("update", (result) => {
  console.log(`Progress so far is ${result.progress}%`);
});
