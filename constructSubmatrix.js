const constructSubmatrix = (matrix, rowsToDelete, columnsToDelete) => {
  const rows = [];

  matrix.forEach((row, index) => {
    if (rowsToDelete.indexOf(index) === -1) {
      rows.push(row);
    }
  });

  rows.forEach((row) => {
    let deletionCount = 0;
    row.forEach((column, index) => {
      if (columnsToDelete.indexOf(index) !== -1) {
        row.splice(index - deletionCount, 1);
        deletionCount += 1;
      }
    });
  });

  return rows;
};


const matrix = [
  [1, 0, 0, 2],
  [0, 5, 0, 1],
  [0, 0, 3, 5],
];

console.log(constructSubmatrix(matrix, [1], [0, 2]));