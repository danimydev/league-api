const getNormalizedChampionName = (input: string) => {
  return input
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(
      /\s+/g,
      "",
    );
};

export default {
  getNormalizedChampionName,
};
