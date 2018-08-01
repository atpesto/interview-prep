const isRecognisable = (letterStr, newspaperStr) => {
  for (const char of letterStr) {
    const charIndexInNewspaperStr = newspaperStr.indexOf(char);
    if (charIndexInNewspaperStr === -1) {
      return false;
    }
    newspaperStr = `${newspaperStr.slice(0, charIndexInNewspaperStr)}${newspaperStr.slice(charIndexInNewspaperStr + 1)}`;
  }
  return true;
};

const answer = isRecognisable('abccc', 'cccab');
console.log(answer);