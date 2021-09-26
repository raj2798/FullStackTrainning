const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (req, res) => {
  const rs = fs.createReadStream(path.join(__dirname, "index.html"));
  const ws = fs.createWriteStream(path.join(__dirname, "index.data"));

  rs.pipe(ws);

  //   req.on("end", () => {
  //     const responseData = {
  //       status: "success",
  //       message: "data is saved",
  //     };

  //     res.setHeader("Content-Type", "application/json");
  //     res.end(JSON.stringify(responseData));
  //});
});
server.on("error", (error) => {
  console.error(error.message);
});

server.listen(3000);
