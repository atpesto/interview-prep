const calcDigitRoot = (num) => {
  const numAsString = String(num);
  let sum = 0;
  for (const char of numAsString) {
    sum += Number(char);
  }
  return sum;
}

const digitRootSort = (arr) => {
  const digitRootSortFn = (a, b) => {
    const firstDigitRoot = calcDigitRoot(a);
    const secondDigitRoot = calcDigitRoot(b);

    if ((firstDigitRoot - secondDigitRoot) > 0) {
      return 1;
    } else if ((firstDigitRoot - secondDigitRoot) === 0) {
      if ((a - b) > 0) {
        return 1;
      } else {
        return -1;
      }
    }
    return -1;
  };
  const sortedArr = arr.sort(digitRootSortFn);
  return sortedArr;
};

console.log(digitRootSort([13, 20, 7, 4]));

