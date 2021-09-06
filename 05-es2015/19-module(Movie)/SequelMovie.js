import Movie from "./Movie.js";
class SequelMovie {
  constructor(name, cast, yearOfRelease, boxOfficeCollection, earlierMovies) {
    super(name, cast, yearOfRelease, boxOfficeCollection);
    this.earlier = earlierMovies;
  }
  getLifeTimeEarnings() {
    const sum = this.boxOfficeCollection;
    console.log(sum);
  }
}
