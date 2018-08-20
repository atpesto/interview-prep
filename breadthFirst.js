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

const returnedArray = [];

const printGivenLevel = (node, height) => {
  if (node === null) {
    return 0;
  }

  if (height === 1) {
    returnedArray.push(node.value);
  } else if (height > 1) {
    printGivenLevel(node.left, height - 1);
    printGivenLevel(node.right, height - 1);
  }
}

const traverseTree = (t) => {
  const height = getHeightOfTree(t);

  let currentHeight = 1;
  while (currentHeight <= height) {
    printGivenLevel(t, currentHeight);
    currentHeight += 1;
  }

  return returnedArray;
};