const almostIncreasingSequence = (sequence) => {
  const increasingArray = [];
  const sequenceLength = sequence.length;

  let index = 0;
  while (index < sequenceLength) {
    let subIndex = 0;
    let FLAG = true;
    while (subIndex < sequenceLength - 1) {
      const stopIndex = index;

      let currentIndex = subIndex;

      if (currentIndex === stopIndex) {
        currentIndex += 1;
      }

      let nextIndex = currentIndex + 1;

      if (nextIndex === stopIndex) {
        nextIndex += 1;
      }

      if (sequence[currentIndex] >= sequence[nextIndex]) {
        FLAG = false;
      }

      subIndex += 1;
    }

    if (FLAG === true) {
      return true;
    }
    index += 1;
  }
  return false;
};

console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));