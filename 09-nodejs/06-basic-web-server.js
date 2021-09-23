// import http from 'http';
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.headers);
  res.write("Hello, world!\n");
  res.end("Ok, ttyl");
});

server.on("error", (error) => {
  console.error(error.message);

  // EXERCISE: generalize this to find the current port being tried and try the next port (eg. if 4500 is being tried, use 4501 instead)
  server.listen(3001);
});

// alternatively...
// const server = http.createServer(( req, res ) => {
//     console.log( req.headers );
//     res.write( 'Hello, world\n' );
//     res.end( 'Ok, ttyl' );
// });

// (till 1024 port is reserved for standard services) - 65535
server.listen(3000);
