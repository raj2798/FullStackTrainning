const fs = require("fs");
const path = require("path");

// write stream
const ws = fs.createWriteStream(path.join(__dirname, "27-user-inputs.txt"));

// read stream
// process.stdin

process.stdin.pipe(ws);
