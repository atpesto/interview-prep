const getHeightOfTree = (node) => {
  if (node === null) {
    return 0;
  }

  const leftSubtreeHeight = getHeightOfTree(node.left);
  const rightSubtreeHeight = getHeightOfTree(node.right);

  if (leftSubtreeHeight > rightSubtreeHeight) {
    return (leftSubtreeHeight + 1);
  } else {
    return (rightSubtreeHeight + 1);
  }
};

const traverseTreeAtLevel = (node, height, maxArray) => {
  if (node === null) {
    return null;
  }

  if (height === 1) {
    maxArray.push(node.value);
  } else if (height > 1) {
    traverseTreeAtLevel(node.left, height - 1, maxArray);
    traverseTreeAtLevel(node.right, height - 1, maxArray);
  }

  return maxArray;
};

const largestValuesInTreeRows = (t) => {
  const height = getHeightOfTree(t);
  let currentHeight = 1;
  let returnedMaxArray = [];

  while (currentHeight <= height) {
    const maxArray = traverseTreeAtLevel(t, currentHeight, []);
    const max = Math.max(...maxArray);
    returnedMaxArray.push(max);
    currentHeight += 1;
  }

  return returnedMaxArray;
};