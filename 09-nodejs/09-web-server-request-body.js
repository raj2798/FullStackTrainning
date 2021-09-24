// import http from 'http';
const http = require("http");
const url = require("url");

const server = http.createServer();

server.on("request", (req, res) => {
  const parts = url.parse(req.url, true);
  console.log(parts.pathname);

  let buffer = "";
  let person = null;

  // non-blocking
  req.on("data", (chunk) => {
    console.log("data");
    buffer += chunk.toString("utf-8");
  });

  // non-blocking
  req.on("end", () => {
    console.log("end");
    const person = JSON.parse(buffer);

    const responseData = {
      message: `Hi ${person.name}! How is the weather in ${person.city}?`,
      status: "success",
    };

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(responseData));
  });
});

server.on("error", (error) => {
  console.error(error.message);
});

server.listen(3000);
