const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "package.json"));
//chunk size  (by default 64kb ) is  limit on the maximum memory required

rs.on("data", (chunk) => {
  process.stdout.write(chunk);
});

rs.on("end", () => {
  console.log("file has been read");
});

rs.on("error", (error) => {
  console.log(error.message);
});
//start reading the file
rs.read();
