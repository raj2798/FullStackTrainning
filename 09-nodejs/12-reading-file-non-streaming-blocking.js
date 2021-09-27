const fs = require("fs");
const path = require("path"); // takes care of OS differences when constructing file paths

// folder path of this .js file, and path of this .js file
// console.log( __dirname );
// console.log( __filename );

const packageFilePath = path.join(__dirname, "package.json");

// console.log( packageFilePath );

try {
  // fs.readFileSync() is a blocking function
  // Never use sync functions - they block execution of rest of script
  const contents = fs.readFileSync(packageFilePath, "utf-8");
  console.log(contents);
} catch (error) {
  console.error(error.message);
}

console.log("after call to fs.readFile");
