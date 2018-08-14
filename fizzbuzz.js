const fizzbuzz = (num) => {
  let number = 1;
  while (number <= num) {
    console.log((((number % 3) ? "" : "fizz" ) + ((number % 5) ? "" : "buzz")) || number);
    number += 1;
  }
};

fizzbuzz(15);