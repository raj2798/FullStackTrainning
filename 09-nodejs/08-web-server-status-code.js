// import http from 'http';
const http = require("http");
const url = require("url");

const server = http.createServer();

server.on("request", (req, res) => {
  // if we mention true as the second parameter, we get the parts of the query string as well
  console.log(req.url);
  const parts = url.parse(req.url, true);
  // pathname - just the path (/home), query is an object with the query string parameters - eg. { name: 'John Doe' }

  console.log(parts);

  let x = parts.query.name;
  console.log(x);

  res.statusCode = 400; // bad request (defaults to 200)
  res.end(
    `You requested for ${parts.pathname}. The name is ${parts.query.name} and age is ${parts.query.age}`
  );
});

server.on("error", (error) => {
  console.error(error.message);
});

server.listen(3000);
