const fs = require("fs");
const path = require("path");

const ws = fs.createWriteStream(path.join(__dirname, "26-user-inputs.txt"));
const rs = fs.createWriteStream(path.join(__dirname, "26-user-inputs.txt"));

rs.on("error", (error) => {
  console.error("error reading the input file");
  console.error(error.message);
});

ws.on("error", (error) => {
  console.error("error writing to the output file");
  console.error(error.message);
});
// standard input / standard output, standard error (terminal)
process.stdin.on("data", (chunk) => {
  ws.write(chunk);
});

process.stdin.on("end", () => {
  rs.pipe(ws);
  ws.end();
});

process.stdin.read();
