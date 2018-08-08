const selectionSort = (arr) => {
  for (let outerLoopIndex = 0; outerLoopIndex < arr.length; outerLoopIndex += 1) {
    let min = arr[outerLoopIndex];
    let index = outerLoopIndex;
    for (let innerLoopIndex = (outerLoopIndex + 1); innerLoopIndex < arr.length; innerLoopIndex += 1) {
      if (arr[innerLoopIndex] < min) {
        min = arr[innerLoopIndex];
        index = innerLoopIndex;
      }
    }
    const temp = arr[outerLoopIndex];
    arr[outerLoopIndex] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

const array = [1, 9, 8, 3, 6, 7, -1];

const selectionSortResult = selectionSort(array);
console.log('Selection Sort Result: ', selectionSortResult);