class Movie {
  constructor(name, cast, yearOfRelease, boxOfficeCollection) {
    this.name = name;
    this.cast = cast;
    this.yearOfRelease = yearOfRelease;
    this.boxOfficeCollection = boxOfficeCollection;
  }
  addToCollection(new_collection) {
    this.boxOfficeCollection += new_collection;
  }
}
class SequelMovie extends Movie {
  constructor(name, cast, yearOfRelease, boxOfficeCollection, earlierMovies) {
    super(name, cast, yearOfRelease, boxOfficeCollection);
    this.earlier = earlierMovies;
  }
  getLifeTimeEarnings() {
    const sum = this.boxOfficeCollection;
    console.log(sum);
  }
}

const sq = new SequelMovie("ABCD", ["abc", "xyz", "pqr"], 2016, 200, [
  "I",
  "AAA",
  "CCC",
]);
console.log(sq.getLifeTimeEarnings());
