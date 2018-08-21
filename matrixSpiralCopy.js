const spiralCopy = (inputMatrix) => {
  const outerArrayLength = inputMatrix.length;
  const innerArrayLength = inputMatrix[0].length;

  let topRow = 0;
  let bottomRow = outerArrayLength - 1;
  let leftCol = 0;
  let rightCol = innerArrayLength - 1;

  const flatArray = [];

  while (topRow <= bottomRow && leftCol <= rightCol) {

    // top row
    for(let index = leftCol; index <= rightCol; index += 1) {
      const currentElement = inputMatrix[topRow][index];
      flatArray.push(currentElement);
    }
    topRow += 1;

    // right column
    for (let index = topRow; index <= bottomRow; index += 1) {
      const currentElement = inputMatrix[index][rightCol];
      flatArray.push(currentElement);
    }
    rightCol -= 1;

    // bottom row
    if (topRow <= bottomRow) {
      for (let index = rightCol; index >= leftCol; index -= 1) {
        const currentElement = inputMatrix[bottomRow][index];
        flatArray.push(currentElement);
      }
    }
    bottomRow -= 1;

    // left column
    if (leftCol <= rightCol) {
      for (let index = bottomRow; index >= topRow; index -= 1) {
        const currentElement = inputMatrix[index][leftCol];
        flatArray.push(currentElement);
      }
    }
    leftCol += 1;
  }

  return flatArray;
}


