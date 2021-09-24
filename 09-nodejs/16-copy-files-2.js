// // Exercise: Copy a file (say, package.json) using the streaming approach (chunks are written as and when they are read)

// // IMPORTANT: DO NOT USE the readFile(), writeFile()
// const fs = require("fs");
// const path = require("path");

// const rs = fs.createReadStream(path.join(__dirname, "hello-stream.html"));
// const ws = fs.createWriteStream(path.join(__dirname, "hello-stream-1.html"));

// // start reading the read stream (rs), when a chunk is read it automatically writes to the write stream (ws), and it closes the write stream when the read stream ends.
// rs.pipe(ws);

// rs.on("error", (error) => {
//   console.error("error reading the input file");
//   console.error(error.message);
// });

// ws.on("error", (error) => {
//   console.error("error writing to the output file");
//   console.error(error.message);
// });
const fs = require("fs");

// File destination.txt will be created or overwritten by default.
fs.copyFile("hello-stream.html", "hello-stream2.html", (err) => {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
});
