const home = (req, res) => {
  res.write("Hello, Express");
  res.end("That is all for now");
};

const meetings = (req, res) => {
  res.write("Hello, Express on Meetings(controllers)\n");
  res.end("That is all for now for home");
};

module.exports = {
  home,
  meetings,
};
