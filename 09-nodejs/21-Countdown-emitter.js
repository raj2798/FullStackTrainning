const EventEmitter = require("events");

class Countdown {
  constructor(startTime) {
    this.startTime = startTime;
    this.ee = new EventEmitter();
  }

  start() {
    let currentTime = this.startTime;

    this.id = setInterval(() => {
      currentTime--;

      if (currentTime <= 0) {
        clearInterval(this.id);
      }

      if (currentTime % 5 === 0) {
        this.ee.emit("multiple_5", {
          currentTime: currentTime,
        });
      }
    }, 100);

    this.ee.emit("started");
  }

  stop() {
    clearInterval(this.id);
  }
}

module.exports = Countdown;
