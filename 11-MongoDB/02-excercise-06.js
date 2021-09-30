// For this exercise, you will need to import the shows collection into some DB first. Then try
// the following.
// a) Comparison (i.e. relational) operators (including equality, i.e. exact match)
// i. Find shows that are less than one hour duration
db.shows.find({
  runtime: {
    $lt: 60,
  },
});

// ii. Find shows with runtime between 30 and 60 minutes
db.shows.find({
  runtime: {
    $lt: 60,
    $gt: 30,
  },
});

// iii. Find shows with average rating at least 8
db.shows.find({
  "rating.average": {
    $gte: 8,
  },
});

// iv. Find shows with rating between 8 and 9
db.shows.find({
  "rating.average": {
    $gte: 8,
    $lte: 9,
  },
});

// v. Find shows in horror genre (array of string, but query is written like genres field is a string)
// genres: 'Horror' (one of the genres is 'Horror')
db.shows.find({
  genres: "Horror",
});

// vi. Find shows which have ONLY horror as their genre
// genres: [ 'Drama', 'Fantasy', 'Horror' ] (genres shhould have exctly these items in this order)
db.shows.find({
  genres: ["Drama", "Fantasy", "Horror"],
});

// Special comparison operators that match within a list of values - $in, $nin (use these operators in your solution)
// i) Find shows that have one of Drama or Horror as genres in them
db.shows.find({
  genres: {
    $in: ["Horror", "Drama"],
  },
});

// Extra query: Find shows with runtime either 45 or 50 minutes
db.shows.find({
  runtime: {
    $in: [45, 50],
  },
});

// ii) Find shows that are of type Animation or Reality
// $in -> one of the mentioned values
db.shows.find({
  type: {
    $in: ["Animation", "Reality"],
  },
});

// iii) Find shows that have neither Drama nor Horror as genres in them
// $nin -> none of the mentioned values
db.shows.find({
  genres: {
    $nin: ["Drama", "Horror"],
  },
});

// iv) Find shows that are neither of type Animation, nor Reality
db.shows.find({
  type: {
    $nin: ["Animation", "Reality"],
  },
});

// v) Find shows that are not running on the network HBO, nor FOX
db.shows.find({
  "network.name": {
    $nin: ["HBO", "FOX"],
  },
});

// Logical operators

// i) Find shows that have one of Drama or Horror as genres in them (try this
// without using $in)
// ( genres === 'Drama' ) || ( genres === 'Horror' )
db.shows.find({
  $or: [
    {
      genres: "Drama",
    },
    {
      genres: "Horror",
    },
  ],
});

// ii) Find shows that have neither Drama nor Horror as genres in them (try this with
// $not and $in ("none of these" ($nin) is same as "not one of these" ($not, $in))
db.shows.find({
  genres: {
    $not: {
      $in: ["Drama", "Horror"],
    },
  },
});

// iii) Find shows that have BOTH Drama and Horror as their genre
// ( genres === 'Drama' ) && ( genres === 'Horror' )
db.shows.find({
  $and: [
    {
      genres: "Drama",
    },
    {
      genres: "Horror",
    },
  ],
});

// this will end up giving the documents with genre Horror (Drama is ignored)
// db.shows.find(
//     {
//         genres: 'Drama',
//         genres: 'Horror'
//     }
// );

// can this query be simplified? - yes
db.shows.find({
  $and: [
    {
      genres: "Drama",
    },
    {
      runtime: 45,
    },
  ],
});

// this is simple
db.shows.find({
  genres: "Drama",
  runtime: 45,
});

// iv) Find shows that have genre Drama but not Horror. Again, find shows that have
// genre Horror but not Drama.
// Assignment

// v) Find shows that do not have at least one of Drama or Horror as their genre
// (i.e. show could have Drama but not Horror, Horror but not Drama, or neither
// Drama not Horror)
// Assignment
