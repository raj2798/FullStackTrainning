const fs = require("fs");
const path = require("path");

const ws = fs.createWriteStream(path.join(__dirname, "25-user-inputs.txt"));

//standard input/ standard output, standard error (terminal)
process.stdin.on("data", (chunk) => {
  ws.write(chunk);
});

process.stdin.on("end", () => {
  ws.end();
});
process.stdin.read();
