// integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// should print '6 5', '7 4', '8 3', '9 2', '10 1'

// const integerPairs = ([head, ...tail], sum) => {
//   tail.forEach((num, index) => {
//     if ((head + num) === sum) {
//       console.log(`${head} ${num}`);
//     }
//     if ((index + 1) === tail.length) {
//       integerPairs(tail, sum);
//     }
//   });
// };

// integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);


const integerPairs = (arr, sum) => {
  const sortedArr = arr.sort((a, b) => a - b);

  const size = arr.length;
  const leftArr = sortedArr.slice(0, size/2).reverse();
  const rightArr = sortedArr.slice(size/2);

  let i = 0;
  while(i < Math.ceil(size/2)) {
    const index = leftArr.findIndex(item => item === (sum - rightArr[i]));
    if(index !== -1) {
      console.log(`${rightArr[i]} ${leftArr[index]}`);
    }
    i += 1;
  }
}

integerPairs([1, 2, 12, 14, 5, 6, 7, 8, 9, 10], 15);
