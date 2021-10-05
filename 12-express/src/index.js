const express = require("express");
const logger = require("./middleware/logger");
const indexRouter = require("./routes/index");

// This creates an Express application object - this includes an HTTP server
const app = express();

// middleware 1
app.use(logger);

// set up index router to take care of routing to home page
// middleware 2
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
