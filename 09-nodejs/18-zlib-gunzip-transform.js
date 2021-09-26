// Exercise: Copy a file (say, package.json) using the streaming approach (chunks are written as and when they are read)

// IMPORTANT: DO NOT USE the readFile(), writeFile()
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const rs = fs.createReadStream(path.join(__dirname, "hello-stream.html.gzip"));
const ws = fs.createWriteStream(path.join(__dirname, "unzip-Hello.html"));
const gs = zlib.createGunzip();

// start reading the read stream (rs), when a chunk is read it automatically writes to the write stream (ws), and it closes the write stream when the read stream ends.
rs.pipe(gs).pipe(ws);

rs.on("error", (error) => {
  console.error("error reading the input file (.gzip.pdf)");
  console.error(error.message);
});

gs.on("error", (error) => {
  console.error("error unzipping the file");
  console.error(error.message);
});

ws.on("error", (error) => {
  console.error("error writing to the output file (.unzipped.pdf)");
  console.error(error.message);
});
