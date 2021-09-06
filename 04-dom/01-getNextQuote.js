function getNextQuote(idx) {
  const quotes = [
    {
      text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
      name: "Albert Camus",
    },
    {
      text: "A free society is a society where it is safe to be unpopular.",
      name: "Adlai Stevenson",
    },
    {
      text: "Free speech carries with it some freedom to listen.",
      name: "Warren E. Burger",
    },
  ];

  return function () {
    return quotes[idx++ % 3];
  };
}
