//1. Question1
db.shows.find({
  runtime: {
    $lte: 60,
  },
});

//2. Question2
db.shows.find({
  runtime: {
    $lte: 60,
    $gt: 30,
  },
});

//3. Question3
db.shows.find({
  "rating.average": {
    $gte: 8,
  },
});
//4. Question4
db.shows.find({
  genres: "horror",
});

//5.Question5
db.shows.find({
  genres: ["Horror"],
});

//in oprator
db.shows.find({
  genres: {
    $in: ["Horror", "Drama"],
  },
});

db.shows.find({
  runtime: {
    $in: [45, 50],
  },
});

db.shows.find({
  type: {
    $in: ["Animation", "Reality"],
  },
});
//nin (not in)
db.shows.find({
  genres: {
    $nin: ["Drama", "Horror"],
  },
});
