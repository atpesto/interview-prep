const stdin = process.openStdin();

const { select, deleteRow, update } = require('./helpers');


const selectDeleteRegex = /^(\w+)\s*\**\s*FROM\s(\w+)\sWHERE (\w+)="(\w+)"$/;
const updateRegex = /^(\w+)\s+(\w+)\s+SET\s+(\w+)="(\w+\s*\w+)"\s+WHERE\s+(\w+)="(\w+)"$/;

stdin.addListener('data', (d) => {
  const command = d.toString().trim();

  const selectDeleteMatch = selectDeleteRegex.exec(command);
  const updateMatch = updateRegex.exec(command);

  const db = 'testDB';



  if (selectDeleteMatch) {
    const [_, query, table, field, value] = selectDeleteMatch;

    switch (query) {
      case 'SELECT': {
        console.log(select(db, table, field, value));
        return;
      }

      case 'DELETE':
        console.log(deleteRow(db, table, { field, value }));
        return;
      default:
        return '';
    }
  }

  if (updateMatch) {
    const [_, query, table, field1, value1, field2, value2] = updateMatch;
    const where = {
      field: field1,
      value: value1,
    };

    const modification = {
      field: field2,
      value: value2,
    };

    switch (query) {
      case 'UPDATE':
        console.log(update(db, table, where, modification));
      default:
        return '';
    }
  }
});