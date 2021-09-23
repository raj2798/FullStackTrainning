const setAsHtml = (res) => {
  res.setHeader("Content-Type", "text/html");
};

const gm = (res) => {
  setAsHtml(res);
  res.end("<strong>Good morning!</strong>");
};

const ga = (res) => {
  setAsHtml(res);
  res.end("<i>Good afternoon!</i>");
};

const ge = (res) => {
  setAsHtml(res);
  res.end("<strong>Good evening!</strong>");
};

const gn = (res) => {
  setAsHtml(res);
  res.end("<i>Good night!</i>");
};

// whatever is set on module.exports is available in another file when this is imported
module.exports = {
  goodMorning: gm,
  goodAfternoon: ga,
  ge, // ge: ge
  gn,
};
