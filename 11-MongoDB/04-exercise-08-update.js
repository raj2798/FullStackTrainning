// Field update operators - $inc, $min, $max, $mul, $rename, $set, $unset
// i. Find all shows that are in English and have network -> country code as US, and set
// the language as English (US) instead. Also add a new field locale and set it to “enUS”
// $set is used to change the value of a field / create a new field
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

// ii. Find the first show that has a weight of less than 40 and rating more than 7 and
// increase weight by 10. Also set a new field “criticsChoice” to true.
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

// iii. Find the first show that has a weight of more than 80 and rating less than 6 and
// decrease weight by 10. Also set a new field “criticsChoice” to false.
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
    $set: {
      criticsChoice: false,
    },
  }
);

// iv. Find all shows that have a weight of less than 50 and rating more 7 and increase
// weight to maximum( 50, current value ).
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

// v. Find all shows that have a weight of less than 60 and rating more 8 and multiply the
// weight by 1.333333
// $mul operator

// vi. Rename criticsChoice field as cc in all documents
db.shows.updateMany(
  {
    criticsChoice: {
      $exists: true,
    },
  },
  {
    $rename: {
      criticsChoice: "cc",
    },
  }
);

// vii. Remove field cc (criticsChoice) from all documents
db.shows.updateMany(
  {},
  {
    $unset: {
      cc: true,
    },
  }
);

// viii. Try finding a document with a show name that does not exist (also use language :
// “English” while finding). Set the rating and genres for it. Use the upsert option and check that
//the upserted documented has fields that are part of the filter clause, as
// well as the update clause
