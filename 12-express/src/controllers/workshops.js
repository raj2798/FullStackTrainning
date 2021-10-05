const workshops = require("../data/workshops.json");

const getWorkshops = (req, res, next) => {
  //   res.setHeader("Content-Type", "application/json");
  //   res.status(200);
  //   res.end(JSON.stringify(workshops));
  res.json(workshops);
};
module.exports = {
  getWorkshops,
};
