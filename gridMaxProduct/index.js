const fs = require('fs');


const calcTop = (rows, rowIndex, colIndex) => {
  let limit = 4;
  let product = 1;

  let row = rowIndex - 1;
  while ((row >= 0) && (limit > 0)) {
    const targetRow = rows[row];
    product *= targetRow[colIndex];

    row -= 1;
    limit -= 1;
  }

  return product;
};

const calcTopRight = (rows, rowIndex, colIndex) => {
  let limit = 4;
  let product = 1;

  let colMaxLength = rows[0].length;

  let row = rowIndex - 1;
  let col = colIndex + 1;

  while ((row >= 0) && (col < colMaxLength) && (limit > 0)) {
    const targetRow = rows[row];
    const targetCol = targetRow[col];

    product *= targetCol;

    row -= 1;
    col += 1;
    limit -= 1;
  }

  return product;
};

const calcRight = (rows, rowIndex, colIndex) => {
  let limit = 4;
  let product = 1;

  let colMaxLength = rows[0].length;

  let row = rowIndex;
  let col = colIndex + 1;

  const targetRow = rows[row];
  while ((col < colMaxLength) && (limit > 0)) {
    const targetCol = targetRow[col];

    product *= targetCol;

    col += 1;
    limit -= 1;
  }

  return product;
};

const calcBottomRight = (rows, rowIndex, colIndex) => {
  let limit = 4;
  let product = 1;

  let rowMaxLength = rows.length;
  let colMaxLength = rows[0].length;

  let row = rowIndex + 1;
  let col = colIndex + 1;


  while ((row < rowMaxLength) && (col < colMaxLength) && (limit > 0)) {
    const targetRow = rows[row];
    const targetCol = targetRow[col];

    product *= targetCol;

    row += 1;
    col += 1;
    limit -= 1;
  }

  return product;
};

const calcBottom = (rows, rowIndex, colIndex) => {
  let limit = 4;
  let product = 1;

  let rowMaxLength = rows.length;

  let row = rowIndex + 1;
  while ((row < rowMaxLength) && (limit > 0)) {
    const targetRow = rows[row];
    product *= targetRow[colIndex];

    row += 1;
    limit -= 1;
  }

  return product;
};

const calcLeft = (rows, rowIndex, colIndex) => {
  let limit = 4;
  let product = 1;

  let row = rowIndex;
  let col = colIndex - 1;

  const targetRow = rows[row];
  while ((col >= 0) && (limit > 0)) {
    const targetCol = targetRow[col];

    product *= targetCol;

    col -= 1;
    limit -= 1;
  }

  return product;
};

fs.readFile('./matrix.txt', (err, data) => {
  if (err) {
    throw err;
  }
  const delimitedRows = data.toString().split('\n');
  let rows = [];
  for (let rowIndex = 0; rowIndex < delimitedRows.length; rowIndex += 1) {
    const row = delimitedRows[rowIndex];

    const cols = row.split(' ');
    rows.push(cols);
  }

  let max = 0;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex];

    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const target = row[colIndex];
      // get top
      const top = calcTop(rows, rowIndex, colIndex);

      // get top-right
      const topRight = calcTopRight(rows, rowIndex, colIndex);

      // get right
      const right = calcRight(rows, rowIndex, colIndex);

      // get bottom-right
      const bottomRight = calcBottomRight(rows, rowIndex, colIndex);

      // get bottom
      const bottom = calcBottom(rows, rowIndex, colIndex);

      // get left
      const left = calcLeft(rows, rowIndex, colIndex);

      const tempMax = Math.max(top, topRight, right, bottomRight, bottom, left);
      if (tempMax > max) {
        max = tempMax;
      }
    }
  }

  console.log('Max value is:', max);
});