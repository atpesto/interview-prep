const incorrectPasscodeAttempts = (passcode, attempts) => {
  let incorrectPasscodeAttempts = 0;

  let index = 0;
  while (index < attempts.length) {
    const currentAttempt = attempts[index];
    if (incorrectPasscodeAttempts >= 10) {
      return true;
    }
    if (currentAttempt !== passcode) {
      incorrectPasscodeAttempts += 1;
    } else {
      incorrectPasscodeAttempts = 0;
    }

    index += 1;
  }

  if (incorrectPasscodeAttempts === 10) {
    return true;
  }
  return false;
};