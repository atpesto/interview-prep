function shiftedArrSearch(shiftArr, num) {
  const separationPivotIndex = modifiedBinarySearch(shiftArr);

  let left = 0;
  let right = shiftArr.length - 1;
  if (num < shiftArr[0] && (separationPivotIndex !== -1)) {
    left = separationPivotIndex;
  } else if (num >= shiftArr[0] && (separationPivotIndex !== -1)) {
    right = separationPivotIndex - 1;
  }

  return (binarySearch(shiftArr, num, left, right));
}

function binarySearch (arr, num, leftAsReceived, rightAsReceived) {
  let left = leftAsReceived;
  let right = rightAsReceived;

  while (left <= right) {
     let middleIndex = left + Math.floor((right - left) / 2);

     if (num === arr[middleIndex]) {
       return middleIndex;
     }

    if (num < arr[middleIndex]) {
      right = middleIndex - 1;
    } else if (num > arr[middleIndex]) {
      left = middleIndex + 1;
    }
  }

  return -1;
}

function modifiedBinarySearch (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
     let middleIndex = left + Math.floor((right - left) / 2);

     if (arr[middleIndex] < arr[middleIndex - 1]) {
       return middleIndex;
     } else if (arr[middleIndex] > arr[middleIndex + 1]) {
       return middleIndex + 1;
     } else {
       left = middleIndex + 1;
     }
  }

  return -1;
}