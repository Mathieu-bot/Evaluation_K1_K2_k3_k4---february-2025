export const makeSpeechFunnier = (string) => string.replaceAll(".", " xD");

export const countDuplicate = (arr) => {
  let elements = [...new Set(arr)];  
  let res = 0;
  for (let v of elements) {
    if (arr.filter(e => v == e ).length > 1) res++;
  }
  return res;
};
