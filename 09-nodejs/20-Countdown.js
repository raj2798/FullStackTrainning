class Countdown {
  constructor(startTime) {
    this.startTime = startTime;
  }
  start() {
    const id = setInterval(() => {
      this.startTime--;
      console.log(this.startTime);

      if (this.startTime <= 0) {
        clearInterval(id);
      }
    }, 1000);
  }
}
let c = new Countdown(10);
console.log(c);
c.start();
