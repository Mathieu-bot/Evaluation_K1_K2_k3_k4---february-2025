export const underscoreToSpace = (string) => string ? string.replaceAll("_", " ") : '';

export const mergeAndSortUnique = (...arr) =>
  [...new Set(arr.reduce((acc, curr) => acc.concat(curr), []))].sort(
    (a, b) => a - b
  );
