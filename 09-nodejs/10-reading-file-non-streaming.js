const fs = require("fs");
const path = require("path"); // takes care of OS differences when constructing file paths

// folder path of this .js file, and path of this .js file
// console.log( __dirname );
// console.log( __filename );

const packageFilePath = path.join(__dirname, "package.json");

// console.log( packageFilePath );

// fs.readFile() is a non-blocking function
fs.readFile(packageFilePath, "utf-8", (error, contents) => {
  console.log("after file has been read");

  if (error) {
    console.error(error.message);
    return; // VERY VERY VERY VERY IMPORTANT: Make sure to END EXECUTION OF THE FUNCTION
  }

  console.log(contents);
});

console.log("after call to fs.readFile");
