const isOdd = (n) => {
  if ((n % 2) !== 0) {
    return true;
  }
  return false;
}

const isLucky = (n) => {
  const stringNum = `${n}`;

  const stringLength = stringNum.length;
  if (isOdd(stringLength)) {
    return false;
  }

  const firstHalf = stringNum.slice(0, stringLength / 2);
  const secondHalf = stringNum.slice(stringLength / 2, stringLength);

  let firstHalfSum = 0;

  for (const char of firstHalf) {
    const numChar = +char;
    firstHalfSum += numChar;
  }

  let secondHalfSum = 0;
  for (const char of secondHalf) {
    const numChar = +char;
    secondHalfSum += numChar;
  }

  if (firstHalfSum === secondHalfSum) {
    return true;
  }
  return false;
};



console.log(isLucky(239017));