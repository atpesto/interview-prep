// knapsack

// value = [60, 100, 120];
// weight = [10, 20, 30];
// W = 50;

// Solution: 220

const max = (a, b) => (((a - b) > 0) ? a : b);

const knapsackAlgo = (remainingWeight, [headValue, ...tailValue], [headWeight, ...tailWeight]) => {
  if (remainingWeight === 0) {
    return 0;
  }
  if ((headValue === undefined) && (headWeight === undefined)) {
    return 0;
  }

  if (headWeight > remainingWeight) {
    return knapsackAlgo(remainingWeight, tailValue, tailWeight);
  }

  return max(knapsackAlgo(remainingWeight, tailValue, tailWeight),
      headValue + knapsackAlgo((remainingWeight - headWeight), tailValue, tailWeight))
};


console.log(knapsackAlgo(50, [60, 100, 120], [10, 20, 30]));

console.log(knapsackAlgo(70, [60, 179, 120], [10, 70, 60]));
console.log(knapsackAlgo(70, [60, 181, 120], [10, 70, 60]));
console.log(knapsackAlgo(70, [60, 180, 120], [10, 70, 60]));