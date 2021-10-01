db.shows.updateMany(
  {
    language: "English",
    "network.country.code": "US",
  },
  {
    $set: {
      language: "English (US)",
      locale: "enUS",
    },
  }
);

db.shows.updateOne(
  {
    weight: {
      $lt: 40,
    },
    "rating.average": {
      $gt: 7,
    },
  },
  {
    $inc: {
      weight: 10,
    },
  }
);

db.shows.updateOne(
  {
    weight: {
      $gt: 80,
    },
    "rating.average": {
      $lt: 6,
    },
  },
  {
    $inc: {
      weight: -10,
    },
  }
);

db.shows.updateMany(
  {
    weight: {
      $lt: 50,
    },
    "rating.average": {
      $gt: 7,
    },
  },
  {
    $max: {
      weight: 50,
    },
  }
);
