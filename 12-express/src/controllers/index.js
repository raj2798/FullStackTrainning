const home = (req, res) => {
  //sets the response header - 'Content-Type': 'text/html' (res.end() does not do so)
  res.send(
    `
        <!doctype html>
                <html>
                    <head>
                        <title>Workshops app</title>
                    </head>
                    <body>
                        <h1>Workshops app</h1>
                        <hr />
                        <p>
                            You can view/update workshops, session here, and also add new ones.
                        </p>
                    </body>
                </html>
    
          `
  );
};

const meetings = (req, res) => {
  res.write("Hello, Express on Meetings(controllers)\n");
  res.end("That is all for now for home");
};
const postMessage = (req, res) => {
  console.log(req.body);
  res.end("I have noted your message");
};
module.exports = {
  home,
  meetings,
  postMessage,
};
