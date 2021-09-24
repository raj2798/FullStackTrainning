const fs = require("fs");

const path = require("path");

const newFilePath = path.join(__dirname, "hello.html");
const contents = `
<!doctype html>
<html>
    <head>
        <title>Hello</title>
    </head>
    <body>
        <h1>Hello world</h1>
        <hr />
        hello, world. how is the day?
    </body>
</html>
`;

fs.writeFile(newFilePath, contents, (error) => {
  if (error) {
    console.error("Error occured when trying to write ro file hello.txt");
    console.error(error.message);
    return;
  }
  console.log("Successfully created hrllo.html");
});
console.log("last line of our script");
