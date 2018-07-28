// findSubsets([1,3,4,5,6], 10) => [[1,4,5], [1,3,6], [4,6]]

const findSubsets = (arr, total) => {
  const subsets = [];
  const customFindSubsets = ([head, ...tail]) => {
    let sum = head;
    tail.forEach(num => {
      sum += num;

      if (sum === total) {
        subsets.push()
      }
    })
  };
};