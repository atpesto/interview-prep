const emitRandomNumbers = (val) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(val);
      resolve();
    }, Math.floor(Math.random() * 10));
  })
);

const printNumbersRandomly = () => {
  let i = 1;
  while(i <= 10) {
    emitRandomNumbers(i);
    i += 1;
  }
}

// printNumbersRandomly();

function* printNumbersSequentially (i) {

    yield emitRandomNumbers(i).then(() => {});

}
let i = 0;
while(i <= 10) {
  i += 1;
  printNumbersSequentially(i).next();
}