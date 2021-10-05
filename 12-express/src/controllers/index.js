const home = (req, res) => {
  res.write("Hello, Express");
  res.end("That is all for now");
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
