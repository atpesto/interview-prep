class SymbolBalance {
  constructor(strArray) {
    this.strArray = strArray;
    this.stack = [];

    this.balanced = true;

    this.complements = {
      '(': ')',
      '{': '}',
      '[': ']',
      '"': '"',
      '/*': '*/',
    };
  }

  push(char) {
    const lastChar = this.peek();

    const latestCharComplement = this.complements[lastChar];

    const validChars = [
      ...Object.keys(this.complements),
      ...Object.values(this.complements),
      '/',
      '*'
    ];

    if (validChars.includes(char)) {
      if (char === '*/') {
        if (this.stack.indexOf('/*') !== -1) {
          this.stack = [];
          return;
        }
      }

      if (char === latestCharComplement) {
        this.pop();
      } else {
        this.stack.push(char);
      }
    }
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    const char = this.stack.slice(-1)[0];
    return char;
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    }
    return false;
  }

  size() {
    return this.stack.length;
  }

  loop() {
    for (const str of this.strArray) {
      for (const char of str) {
        const lastChar = this.peek();

        if (lastChar === '/' && char === '/') {
          this.stack = [];
          break;
        }

        if((lastChar === '/' && char === '*') || (lastChar === '*' && char === '/')) {
          this.pop();
          this.push(`${lastChar}${char}`);
        } else if ((lastChar === '/') || (lastChar === '*')) {
          this.pop();
          this.push(char);
        } else {
          this.push(char);
        }

      console.log(this.stack);
      }
    }

    // remove all the occurences of '*' char
    this.stack = this.stack.filter(char => char !== '*');
    return this.isEmpty();
  }
}


module.exports = SymbolBalance;

