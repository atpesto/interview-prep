const array = [1, 1, 2, 2, 1];

const firstDuplicate = (array) => {
  const map = new Map();

  array.forEach((number, currentIndex) => {
    const index = map.get(number);
    if (index === undefined) {
      map.set(number, -1);
    } else if (index === -1) {
      map.set(number, currentIndex);
    }
  });

  let minIndex = Number.POSITIVE_INFINITY;
  let number = -1;
  for (const [currentNumber, currentIndex] of map) {
    if ((currentIndex !== -1) && (currentIndex < minIndex)) {
      minIndex = currentIndex;
      number = currentNumber;
    }
  }

  return number;
};

console.log(firstDuplicate(array));