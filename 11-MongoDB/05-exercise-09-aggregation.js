// Using $match to get a collection with a filtered set of documents
// i) Find all shows that have Drama as a genre
db.shows.aggregate([
  {
    $match: {
      genres: "Drama",
    },
  },
]);

db.shows.aggregate([
  {
    $match: {
      "network.name": "HBO",
    },
  },
]);

// b) Using $group to group documents by field values and produce a new collection
// representing groups
// i) Group shows by the name of network they are running on, and also find the number
// of shows in each network
// $sum adds how much you specify (in this case 1) for every document in the group
db.shows.aggregate([
  {
    $group: {
      _id: "$network.name",
      numShows: {
        // $sum: 1
        $count: {},
      },
    },
  },
]);

// ii) Group shows by name of network and country they are running in, and also find the
// number of shows, and average runtime of shows in each group (network+country
// combination)
db.shows.aggregate([
  {
    $group: {
      _id: {
        name: "$network.name",
        countryCode: "$network.country.code",
      },
      numShows: {
        $count: {},
      },
      avgRuntime: {
        $avg: "$runtime",
      },
    },
  },
]);

// iii) Repeat the above query but create a new field called “stats” in the output
// documents. The “stats” field should have number of shows, and average runtime of
// shows for the group.
db.shows.aggregate([
  {
    $group: {
      _id: {
        name: "$network.name",
        countryCode: "$network.country.code",
      },

      numShows: {
        $count: {},
      },
      avgRuntime: {
        $avg: "$runtime",
      },
      showNames: {
        $push: "$name",
      },
    },
  },
]);

// iv) Just like we can transform document to form new fields with subdocuments while
// projecting, we can also create a new array. Using the $push operator in $group stage,
// we can create a new array with one item per document in the group! This is a special
// feature of MongoDB with no equivalent in SQL (you can calculate only aggregate
// values like sum, average etc. there). Repeat the above exercise, and create an
// additional field “names” that is an array of names of all shows in the group.
