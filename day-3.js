const sumAll = ([min, max]) => {

  const calcSum = (num, acc) => {
    if(num < max) {
      return calcSum(num + 1, num + acc);
    }
    return num + acc;
  }

  return calcSum(min, 0);
}
console.log(sumAll([2, 4]));


const range = ([min, max]) => {

  const calcRange = (num, acc) => {
    if (num === max) {
      return [...acc, max];
    }
    return calcRange(num + 1, [...acc, num]);
  }

  return calcRange(min, []);
}
console.log(range([2, 20]));


// insert N thrice, at a particular index

// ([2, 3, 4], 0, 1) -> [1, 1, 1, 2, 3, 4];
// ([10, 11, 12], 1, 2) -> [2, 2, 2, 2, 3, 4];
// ([22, 33, 44], 2, 3) -> [2, 3, 3, 3, 3, 4];

const insertNThrice = (arr, index, n) => {
  if (index > (arr.length - 1)) return [];

  const loop = (leftArr, rightArr, currentIndex) => {
    if (currentIndex === index) {
      return [...leftArr, n, n, n, ...rightArr];
    }
    return loop([...leftArr, ...rightArr.slice(0, 1)], [...rightArr.slice(1)], currentIndex + 1);
  }

  return loop([], arr, 0);
}
console.log(insertNThrice([2, 3, 4], 2, 1));


// (2), ([1, 2, 3, 4, 5]) => [4, 5]

const pickLastN = n => {
  const fnPickLast = ([head, ...tail]) => {
    if (n > [head, ...tail].length) return [];
    if ([head, ...tail].length === n) return [head, ...tail];
    if (tail.length === n) return tail;
    return fnPickLast(tail);
  };

  return fnPickLast([1, 2, 3, 4, 5]);
};
console.log(pickLastN(5));


// flatten array of any depth
// [1, 2, [3, 4]]

const flattenArr = arr => {
  const fnFlattenArr = ([head, ...tail], acc) => {
    if (head === undefined || head === null) return acc;
    if (Array.isArray(head)) {
      return fnFlattenArr(tail, [...acc, ...head]);
    }
    return fnFlattenArr(tail, [...acc, head]);
  }

  return fnFlattenArr(arr, []);
}
console.log(flattenArr([1, [3, 4], 2]));