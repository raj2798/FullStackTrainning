const EventEmitter = require("events");

class Countdown {
  constructor(startTime) {
    this.startTime = startTime;
    this.ee = new EventEmitter();
  }

  start() {
    let currentTime = this.startTime;

    this.id = setInterval(() => {
      currentTime++;

      if (currentTime >= 100) {
        clearInterval(this.id);
      }

      if (currentTime % 10 === 0) {
        this.ee.emit("multiple_10", {
          currentTime: currentTime,
        });
      }
    }, 100);

    this.ee.emit("started", {
      a: 10,
    });
  }

  stop() {
    clearInterval(this.id);
  }
}

module.exports = Countdown;
