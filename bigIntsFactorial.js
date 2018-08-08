const stringMultiplication = (num1, num2) => {
  let carry = 0;
  let resultantStr = '';
  for (let num1Index = (num1.length - 1); num1Index >= 0; num1Index -= 1) {
    const lastDigit = num1[num1Index];
    console.log('lastDigit: ', lastDigit);

    let carry = 0;
    let tempResultantStr = '';

    for (let num2Index = (num2.length - 1); num2Index >= 0; num2Index -= 1) {
      let tempResult;
      const lastNum2Digit = num2[num2Index];
      tempResult = '' + ((Number(lastDigit) * Number(lastNum2Digit)) + Number(carry));

      console.log('tempResult: ', tempResult);
      if (tempResult.length !== 1) {
        carry = tempResult[0];
      }

      if (tempResultantStr === '') {
        if (carry !== 0) {
          tempResultantStr = tempResult[1] + '';
        } else {
          tempResultantStr = tempResult + '';
        }
      } else {
        if (carry !== 0) {
          tempResultantStr = tempResult[1] + tempResultantStr;
        } else {
          tempResultantStr = tempResult + tempResultantStr;
        }
      }

      let zeroCount = num2Index;
      while (zeroCount > 1) {
        tempResultantStr += '0';
        zeroCount -= 1;
      }
    }

    if (carry !== 0) {
      tempResultantStr = carry + tempResultantStr;
    }


  }
  return resultantStr;
};

console.log(stringMultiplication('22', '6'));

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }

  if (num === 1) {
    return 1;
  }

  result = num * factorial(num - 1);
  return result;
};

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
