// import http from 'http';
const http = require("http");

process.on("exit", () => {
  console.log("process is exiting");

  // you can close DB connection etc.
});

// This is a VERY bad practice - let the errors be thrown - we can always fix the bugs
process.on("uncaughtException", (error) => {
  console.log(error.message);
});

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Hello, world. This is result: " + result);
});

// (till 1024 port is reserved for standard services) - 65535
server.listen(3000);

console.log("end of script");

// const foo = () => {
//     return 100;
// }

let result = foo(); // throws an error - we are calling a function that is not defined
