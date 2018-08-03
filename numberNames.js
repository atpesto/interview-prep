// numberNames is a function
// numberNames(5) should equal 7
// numberNames(12) should equal 77
// numberNames(18) should equal 385
// numberNames(23) should equal 1255
// numberNames(42) should equal 53174
// numberNames(123) should equal 2552338241

// The integer 1 has 1 name “1”
// The integer 2 has 2 names “1+1”, and “2”
// The integer 3 has 3 names “1+1+1”, “2+1”, and “3”
// The integer 4 has 5 names “1+1+1+1”, “2+1+1”, “2+2”, “3+1”, “4”
// The integer 5 has 7 names “1+1+1+1+1”, “2+1+1+1”, “2+2+1”, “3+1+1”, “3+2”, “4+1”, “5”

const numberNames = (number) => {
  const remaining = number;
  const currentValue = number;
  return recursiveEvaluation(number, currentValue);
};

// check

const recursiveEvaluation = (remaining, currentValue) => {
  // base condition
  if (remaining === 0) {
    return 1;
  }

  // base condition
  if (remaining < 0 || currentValue === 0) {
    return 0;
  }

  // decreasing "currentValue" from "remaining"
  return (recursiveEvaluation(remaining - currentValue, currentValue) +
            recursiveEvaluation(remaining, currentValue - 1));
};

let i = 1;
while (i < 20) {
  console.log(numberNames(i));
  i += 1;
}