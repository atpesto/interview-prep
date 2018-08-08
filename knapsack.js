// knapsack

// value = [60, 100, 120];
// weight = [10, 20, 30];
// W = 50;

// Solution: 220

const max = (a, b, arr) => {
  console.log(arr);
  if (a.info > b.info) {
    const bIndex = arr.indexOf(b.headValue);
    if (bIndex !== -1) {
      arr.splice(bIndex, 1);
    }

    if (a.headValue === -1) {
      arr.push(a.headValue);
    }

    return {
      result: a.info,
    }
  } else {
    const aIndex = arr.indexOf(a.headValue);
    if (aIndex !== -1) {
      arr.splice(aIndex, 1);
    }

    if (b.headValue === -1) {
      arr.push(b.headValue);
    }
    return {
      data: b.headValue,
      result: b.info,
    }
  }
}


const functionWrapper = () => {
  let finalArr = [];
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
    return max(
      {
        key: tailWeight,
        value: tailValue,
        info: knapsackAlgo(remainingWeight, tailValue, tailWeight),
        headValue: undefined,
      },
      {
        key: tailWeight,
        value: tailValue,
        info: headValue + knapsackAlgo((remainingWeight - headWeight),tailValue, tailWeight),
        headValue: headValue,
      }, finalArr).result;
  };

  knapsackAlgo(50, [60, 100, 120], [10, 20, 30]);
  console.log(finalArr);

  // knapsackAlgo(50, [60, 100, 120], [60, 70, 380]);
  // console.log(finalArr);

  // knapsackAlgo(70, [60, 179, 120], [10, 70, 60]);
  // console.log(finalArr);

  // knapsackAlgo(70, [60, 181, 120], [10, 70, 60]);
  // console.log(finalArr);

  // knapsackAlgo(70, [60, 180, 120], [10, 70, 60]);
  // console.log(finalArr);

  return;
};



console.log(functionWrapper());