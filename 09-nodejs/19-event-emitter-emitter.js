//EventEmitter provides a means for communication between pieces of your code
//The object of Event Emitter class can be used for communication
const EventEmitter = require("events");

const ee = new EventEmitter();

//one who wants to send message will do some operation and send this from one place in the application...

process.nextTick(() => {
  ee.emit("update", {
    progress: 40,
  });
});

module.exports = ee;
