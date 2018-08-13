const makeArrayConsecutive2 = (statues) => {
  const sortedStatues = statues.sort((a, b) => (a - b));

  let sum = 0;

  let index = 0;
  while (index < (sortedStatues.length - 1)) {
    const diff = sortedStatues[index + 1] - sortedStatues[index]
    if (diff > 1) {
      sum += (diff - 1);
    }
    index += 1;
  }

  return sum;
};

console.log(makeArrayConsecutive2([6, 2, 3, 8]));