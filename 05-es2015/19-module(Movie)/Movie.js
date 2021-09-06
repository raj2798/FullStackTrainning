class Movie {
  constructor(name, cast, yearOfRelease, boxOfficeCollection) {
    this.name = name;
    this.cast = cast;
    this.yearOfRelease = yearOfRelease;
    this.boxOfficeCollection = boxOfficeCollection;
  }
  addToCast(cast) {
    this.cast.push(cast);
  }
  addToCollection(new_collection) {
    this.boxOfficeCollection += new_collection;
  }
}

export { Movie };
9;
