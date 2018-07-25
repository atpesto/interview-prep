const fs = require('fs');
const SymbolBalance = require('./SymbolBalance');

fs.readFile('./file.txt', (err, data) => {
  if (err) {
    throw err;
  }
  const dataArray = data.toString().split('\n');
  const symbolBalanceObj = new SymbolBalance(dataArray);
  console.log(symbolBalanceObj.loop());
});