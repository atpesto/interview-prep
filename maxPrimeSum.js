// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13


const sieveOfEratosthenes = (threshold) => {
  const primeStatus = Array(100).fill(true);
  const primes = [];


  for (let current = 2; (current * current) < primeStatus.length; current += 1) {
    const status = primeStatus[current];

    if (status === true) {
      for (let multiple = (current * 2); multiple < primeStatus.length; multiple += current) {
        primeStatus[multiple] = false;
      }
    }
  }

  for (let current = 2; current < primeStatus.length; current += 1) {
    if (primeStatus[current] === true) {
      primes.push(current);
    }
  }

  return primes;
};


const maxPrimeSum = (threshold) => {
  // find list of primes till threshold
  const primes = sieveOfEratosthenes(threshold);

  let max = Number.NEGATIVE_INFINITY;

  for (let i = primes.length - 1; i >= 0; i -= 1) {
    const prime = primes[i];

    const temp = getTheAnswer(prime, primes);
    if (temp > max && temp !== 0) {
      max = temp
    }
  }
  return max;
};

const getTheAnswer = (prime, primes) => {
  const ceilVal = Math.ceil(prime / 2);

  let ceilIndex = primes.length;
  let diffVal = Number.POSITIVE_INFINITY;

  if (ceilVal >= primes[0]) {
    primes.forEach((num, index) => {
      if ((ceilVal - num) < diffVal && (ceilVal - num) > 0) {
        diffVal = ceilVal - num;
        ceilIndex = index;
      }
    });

    const temp = recursive(prime, ceilIndex, primes, prime);
    // console.log(temp);
    return temp;
  }


  // const ceilIndex = 4;

  return Number.NEGATIVE_INFINITY;
};


const recursive = (remaining, index, primes, prime) => {
  console.log(remaining, index);
  if ((index <= 0) || (index >= primes.length)) {
    return 0;
  } else if (remaining === 0) {
    console.log('here here');
    return prime;
  } else if (remaining < 0 && (index !== 0)) {
    return recursive(prime, index, primes, prime);
  } else {
    return recursive(remaining - (primes[index]), index - 1, primes, prime);
  }
};


// given an array, check if the sum of consecutive numbers is equal to the number provided
// [1, 2, 3, 4, 5] => 9

const answer = maxPrimeSum(100);
console.log(answer);