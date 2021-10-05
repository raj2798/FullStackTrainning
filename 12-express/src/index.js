const express = require("express");

const indexRouter = require("./routes/index");

// This creates an Express application object - this includes an HTTP server
const app = express();

app.use((req, res, next) => {
  console.log("Request has been received");
  next();
});

app.use(indexRouter);

// NODE_ENV is an environment variable generally setup to indicate which environment you are working on
// NODE_ENV=development
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(`Check http://localhost:${PORT}`);
});
