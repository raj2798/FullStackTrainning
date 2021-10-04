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
// “English” while finding). Set the rating and genres for it. Use the upsert option and check that the upserted documented has fields that are part of the filter clause, as
// well as the update clause
db.shows.updateOne(
  {
    name: "Kapil Sharma Show",
    language: "English",
  },
  {
    $set: {
      "rating.average": 9,
      genres: ["Comedy", "Drama"],
    },
  },
  {
    upsert: true,
  }
);

// Array update operators - $, $push, $each, $sort, $slice, $pull, $pop, $addToSet
// i) Update all shows that have a scheduled screening on “Monday”, and replace the
// item “Monday” with “monday” (lowercase). Hint: Use $ operator.

// Here $ refers to the matched index -
// {
//     name: 'Show 1',
//     schedule: {
//         days: [
//             'Sunday',
//             'Monday'
//         ]
//     }
// },
// {
//     name: 'Show 2',
//     schedule: {
//         days: [
//             'Tuesday',
//             'Monday'
//         ]
//     }
// }

db.shows.updateMany(
  {
    "schedule.days": "Monday",
  },
  {
    $set: {
      "schedule.days.$": "monday",
    },
  }
);

// ii) Update all shows with genre “Horror” by adding another genre “Supernatural”
db.shows.updateMany(
  {
    genres: "Horror",
  },
  {
    $push: {
      genres: "Supernatural",
    },
  }
);

// iii) Update all shows with genre “Horror” by adding 2 other genres “Supernatural” and
// “Spook” (you will need to use $each). Also explore how $sort and $slice can be used
// in this case.
db.shows.updateMany(
  {
    genres: "Horror",
  },
  {
    $push: {
      genres: {
        $each: ["Supernatural", "Spook"],
      },
    },
  }
);

// iv) Remove the genre Supernatural from the first matching document
db.shows.updateOne(
  {
    genres: "Supernatural",
  },
  {
    $pull: {
      genres: "Supernatural",
    },
  }
);

// v) Remove the last genre from every document
db.shows.updateMany(
  {}, // no filtering
  {
    $pop: {
      genres: 1,
    },
  }
);

// vi) Add genre Supernatural to all documents of genre Horror. However the
// Supernatural genre should not be added if it already exists as a genre in the
// document.
db.shows.updateMany(
  {
    genres: "Horror",
  },
  {
    $addToSet: {
      genres: {
        $each: ["Horror"],
      },
    },
  }
);
