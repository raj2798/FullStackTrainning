const path = require("path");
const fs = require("fs");
const rs = fs.createReadStream(path.join(__dirname, "hello-stream.html"));
const ws = fs.createWriteStream(
  path.join(__dirname, "hello-stream-copy-1.html")
);
//chunk size  (by default 64kb ) is  limit on the maximum memory required

rs.on("data", (chunk) => {
  process.stdout.write("chunks were being read\n");
  ws.write(chunk);
});

rs.on("end", () => {
  ws.end();
  console.log("file has been copied");
});

rs.on("error", (error) => {
  console.log(error.message);
});

rs.read();
