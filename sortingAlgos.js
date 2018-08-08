const array = [1, 9, 8, 3, 6, 7, -1];


const swap = (arr, outerLoopIndex, innerLoopIndex) => {
  const temp = arr[outerLoopIndex];
  arr[outerLoopIndex] = arr[innerLoopIndex];
  arr[innerLoopIndex] = temp;
};


/* SELECTION SORT */
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
    swap(arr, outerLoopIndex, index);
  }
  return arr;
};

const selectionSortResult = selectionSort(array);
console.log('Selection Sort Result: ', selectionSortResult);


/* BUBBLE SORT */
const bubbleSort = (arr) => {
  for (let outerLoopIndex = 0; outerLoopIndex < (arr.length - 1); outerLoopIndex += 1) {
    for (let innerLoopIndex = (outerLoopIndex + 1); innerLoopIndex < (arr.length - outerLoopIndex - 1); innerLoopIndex += 1) {
      const element = arr[outerLoopIndex];
      if (element > arr[innerLoopIndex]) {
        swap(arr, outerLoopIndex, innerLoopIndex);
      }
    }
  }

  return arr;
};

const bubbleSortResult = bubbleSort(array);
console.log('Bubble Sort Result: ', bubbleSortResult);

