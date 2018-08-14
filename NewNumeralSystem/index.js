// 65

const newNumeralSystem = (char) => {
  const offset = 65;
  const number = char.charCodeAt(0) - offset;

  let num = 0;
  const array = [];

  const loopLimit = Math.floor(number / 2);
  while (num <= loopLimit) {
    // [num, number - num]

    const firstChar = String.fromCharCode(offset + num);
    const secondChar = String.fromCharCode(offset + (number - num));


    array.push(`${firstChar} + ${secondChar}`);
    num += 1;
  }

  return array;
};

console.log(newNumeralSystem('G'));