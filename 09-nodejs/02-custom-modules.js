// import http from 'http';
const http = require("http");
const greeting = require("./response-helpers/greeting");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.headers);
  const hour = new Date().getHours();

  if (hour <= 11) {
    greeting.goodMorning(res);
  } else if (hour <= 4) {
    greeting.goodAfternoon(res);
  } else if (hour < 7) {
    greeting.ge(res);
  } else {
    greeting.gn(res);
  }
});

// (till 1024 port is reserved for standard services) - 65535
server.listen(3000);
