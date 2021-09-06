class Movie {
  constructor(name, cast, yearOfRelease, boxOfficeCollection) {
    this.name = name;
    this.cast = cast;
    this.yearOfRelease = yearOfRelease;
    this.boxOfficeCollection = boxOfficeCollection;
  }
  addTocast(new_cast) {
    this.cast.push(new_cast);
  }
  addToCollection(new_collection) {
    this.boxOfficeCollection += new_collection;
  }
}

const three_idiots = new Movie("3 idiots", ["abc", "xyz", "pqr"], 2010, 4000);
three_idiots.addTocast("mno");
three_idiots.addToCollection(100);
console.log(three_idiots);

const abc = new Movie("abc", ["hhh", "aaa", "sss"], 2000, 400);
abc.addTocast("kkk");
abc.addToCollection(1000);
console.log(abc);
