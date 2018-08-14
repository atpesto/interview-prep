const a = [1, 2, 3, 4, 4, 5, 4];

const removeKFromList = (l, k) => {
  let currentIndex = 0;
  while (currentIndex < l.length) {
    if (l[currentIndex] === k) {
      l.splice(currentIndex, 1);
    } else {
      currentIndex += 1;
    }
  }

  return l;
};

console.log(removeKFromList(a, 4));