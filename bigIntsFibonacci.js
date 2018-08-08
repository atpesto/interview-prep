const padNumbers = (num1, num2) => {
  const num1Length = num1.length;
  const num2Length = num2.length;

  if (num1Length < num2Length) {
    let paddingLength = num2Length - num1Length;

    while(paddingLength !== 0) {
      num1 = '0' + num1;
      paddingLength -= 1;
    }

  } else if (num2Length < num1Length) {
    let paddingLength = num1Length - num2Length;

    while(paddingLength !== 0) {
      num2 = '0' + num2;
      paddingLength -= 1;
    }

  }

  return {
    num1,
    num2,
  };
}

const stringAddition = (num1, num2) => {
  // cast them to a string
  if (typeof num1 === 'number') {
    num1 += '';
  }

  if (typeof num2 === 'number') {
    num2 += '';
  }

  const num1Length = num1.length;
  const num2Length = num2.length;

  if (num1Length !== num2Length) {
    // if the length is not equal, pad them with zeroes
    let result = padNumbers(num1, num2);
    num1 = result.num1;
    num2 = result.num2;
  }

  let resultantStr = '';
  let carry = 0;

  // perform addition on individual digits (starting from the last)
  for (let num1Index = num1.length - 1; num1Index >= 0; num1Index -= 1) {
    const digitLast = num1[num1Index];
    let tempSum = Number(digitLast) + Number(num2[num1Index]) + carry;

    let tempCarry = 0;
    if (tempSum > 9) {
      tempCarry = 1;
      tempSum = tempSum % 10;
    }

    carry = tempCarry;

    if (resultantStr === '') {
      resultantStr = '' + tempSum;
    } else {
      resultantStr = resultantStr + tempSum;
    }
  }

  // reverse the whole string
  resultantStr = resultantStr.split('').reverse().join('');

  // if any carry is left, prepend it
  if (carry !== 0) {
    resultantStr = carry + resultantStr;
  }

  return resultantStr;
};

// store the result in "store" array to make the calculations efficient
const store = [];

const fib = (num) => {
  if (num === 0) {
    store[0] = 0;
    return store[0];
  }

  if (num === 1) {
    store[1] = 1;
    return store[1];
  }

  let result = undefined;
  if (store[num] !== undefined) {
    result = store[num];
  } else {
    store[num] = stringAddition(fib(num - 1), fib(num - 2));
    result = store[num];
  }
  return result;
};

console.log(fib(500));
// 139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125
