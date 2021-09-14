const dateFilter = (isoDate, format) => {
  const d = new Date(isoDate);
  if (format === "local") {
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  } else {
    return d.toDateString();
  }
};

export default dateFilter;
