const firstNotRepeatingCharacter = (str) => {
  const map = new Map();

  for (let index = 0; index < str.length; index += 1) {
    const char = str[index];

    const charIndex = map.get(char);
    if (charIndex === undefined) {
      map.set(char, index);
    } else {
      map.set(char, str.length);
    }
  }


  let minIndex = str.length;
  let returnedChar = '_';
  map.forEach((index, char) => {
    if (index < minIndex) {
      minIndex = index;
      returnedChar = char;
    }
  });

  return returnedChar;
}


console.log(firstNotRepeatingCharacter('bcccccccccccccyb'));