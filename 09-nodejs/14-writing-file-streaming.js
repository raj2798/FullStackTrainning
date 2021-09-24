const fs = require("fs");
const path = require("path");
const start = `
<!doctype html>
<html>`;
const head = `
    <head>
        <title>Hello</title>
    </head>`;
const body = `
    <body>
        <h1>Hello world</h1>
        <hr />
        hello, world. how is the day?
    </body>`;
const end = `
</html>
`;

const ws = fs.createWriteStream(path.join(__dirname, "hello-stream.html"));
ws.write(start);
ws.write(head);
ws.write(body);
ws.write(end);

ws.end();
