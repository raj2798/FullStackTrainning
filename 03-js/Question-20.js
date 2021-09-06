let movie = {
  name: "3 Idiots",
  cast: [
    "Amir Khan",
    "Kareena Kapoor",
    "Boman Irani",
    "R Madhvan",
    "Sharman Joshi",
  ],
  yearOfRelease: 2009,
  boxOfficeCollection: 4600000000,
};

movie.addToCast = function (cast) {
  this.cast = cast;
};
console.log(movie);
