const fs = require('fs');

const filePath = './store.json';

const store = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const writeToStore = (storeData) => {
  fs.writeFileSync(filePath, JSON.stringify(storeData));
};

const select = (db, table, field, value) => {
  const currentDB = store[db];
  const currentTable = currentDB[table];

  let result = [];
  for (const row of currentTable) {
    const selectedFieldValue = row[field];
    if (selectedFieldValue === value) {
      result.push(row);
    }
  }

  return result;
};

// console.log(select('testDB', 'testTable', 'field1', 'value1'));

const update = (db, table, where, modification) => {
  const currentDB = store[db];
  const currentTable = currentDB[table];
  let result;
  for (const row of currentTable) {
    if (row[where.field] === where.value) {
      row[modification.field] = modification.value;
      result = row;
    }
  }

  writeToStore(store);
  return result;
}

// console.log(update(
//   'testDB',
//   'testTable',
//   {
//     field: 'field1',
//     value: 'value1',
//   },
//   {
//     field: 'field2',
//     value: 'value10',
//   },
// ));


const deleteRow = (db, table, where) => {
  const currentDB = store[db];
  const currentTable = currentDB[table];
  let result;
  currentTable.forEach((row, rowIndex) => {
    if (row[where.field] === where.value) {
      result = row;
      currentTable.splice(rowIndex, 1);
    }
  });

  writeToStore(store);
  return result;
};

// console.log(deleteRow('testDB', 'testTable', {
//   field: 'field1',
//   value: 'value1',
// }));


const insertRow = (db, table, newRow) => {
  const currentDB = store[db];
  const currentTable = currentDB[table];

  currentTable.push(newRow);

  writeToStore(store);
  return newRow;
};


const selectJoin = (db, tableData, joinTableData) => {
  const currentDB = store[db];

  const currentTable = currentDB[tableData.name];
  const joinTable = currentDB[joinTableData.name];

  const currentTableFieldInJoin = tableData.field;
  const joinTableFieldInJoin = joinTableData.field;

  let result = [];
  for (const currentRow of currentTable) {
    const valueInSight = currentRow[currentTableFieldInJoin];
    for (const joinRow of joinTable) {
      const joinRowFieldValue = joinRow[joinTableFieldInJoin];

      if (joinRowFieldValue === valueInSight) {
        const tempResult = {
          ...currentRow,
          ...joinRow,
        };

        result.push(tempResult);
      }
    }
  }

  return result;
};


// console.log(
//   selectJoin(
//     'testDB',
//     {
//       name: 'testTable',
//       field: 'field2'
//     },
//     {
//       name: 'joinTable',
//       field: 'field2'
//     }
//   )
// );