const isPermutationPalindrome = (str) => {
  const store = new Map();
  let newStr = '';
  for (const char of str) {
    if (ifCharIsAlphabet(char)) {
      newStr += char.toLowerCase();
    }
  }
  for (const char of newStr) {
    if (store.has(char)) {
      const count = store.get(char);
      store.set(char, count + 1);
    } else {
      store.set(char, 1);
    }
  }
  if (!newStr.length % 2) {
    // even
    for (const [key, val] of store) {
      console.log(val);
      if (val % 2) {
        return false;
      }
    }
  } else {
    // odd
    let checkFlag = 1;
    for (const [key, val] of store) {
      if ((checkFlag === 0) && (val % 2)) {
        return false;
      }

      if (checkFlag === 1 && (val % 2)) {
        checkFlag = 0;
      }
    }
  }

  return true;
}

const ifCharIsAlphabet = (char) => {
  return char.match(/[a-z]/i);
};

console.log(isPermutationPalindrome('alaa12132ala'));