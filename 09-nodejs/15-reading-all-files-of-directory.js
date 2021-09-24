const fs = require("fs");
fs.readdir(__dirname, (error, files) => {
  if (error) {
    console.log(error.message);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
