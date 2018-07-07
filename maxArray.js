function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return (arr[0] < maxArray(arr.slice(1)) ? maxArray(arr.slice(1)) : arr[0]);
}

console.log(maxArray([1, 20, 3, 4]));
