class ExpressionTree {
  constructor(postfixExpression) {
    // construct a binary tree from the postfixExpression

    this.stack = this._createStack(postfixExpression);
  }

  _isOperator(char) {
    if ((char === '+') || (char === '-') || (char === '*') || (char === '/')) {
      return true;
    }
    return false;
  }

  _createStack(postfixExpression) {
    const postfixArray = postfixExpression.split(' ');
    const stack = [];
    for (const char of postfixArray) {
      if (this._isOperator(char)) {
        // pop 2 elements
        const operand2 = stack.pop();
        const operand1 = stack.pop();

        // push the new node along with all other nodes
        const newNode = new ExpressionNode(char, operand1, operand2);
        stack.push(newNode);
      } else {
        stack.push(char);
      }
    }
    return stack;
  }

  _getKeyByNode(node) {
    return node.key;
  }

  _peek() {
    return this.stack.slice(-1)[0];
  }

  eval() {
    const rootNode = this._peek();
    return this._recursiveEval(rootNode);
  }

  _recursiveEval(node) {
    const currentKey = this._getKeyByNode(node);

    if (this._isOperator(currentKey)) {
      return eval(`${this._recursiveEval(node.left)} ${currentKey} ${this._recursiveEval(node.right)}`);
    }
    return node;
  }

  postfix() {
    const rootNode = this._peek();
    return this._recursivePostfix(rootNode);
  }

  _recursivePostfix(node) {
    const currentKey = this._getKeyByNode(node);

    if (this._isOperator(currentKey)) {
      return `${this._recursivePostfix(node.left)} ${this._recursivePostfix(node.right)} ${currentKey}`;
    }
    return `${node}`;
  }

  prefix() {
    const rootNode = this._peek();
    return this._recursivePrefix(rootNode);
  }

  _recursivePrefix(node) {
    const currentKey = this._getKeyByNode(node);

    if (this._isOperator(currentKey)) {
      return `${currentKey} ${this._recursivePrefix(node.left)} ${this._recursivePrefix(node.right)}`;
    }
    return `${node}`;
  }

  infix() {
    const rootNode = this._peek();
    return this._recursiveInfix(rootNode);
  }

  _recursiveInfix(node) {
    const currentKey = this._getKeyByNode(node);

    if (this._isOperator(currentKey)) {
      return `(${this._recursiveInfix(node.left)} ${currentKey} ${this._recursiveInfix(node.right)})`;
    }
    return `${node}`;
  }
}

class ExpressionNode {
  constructor(key, left = undefined, right = undefined) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

const tree = new ExpressionTree('4 5 * 6 7 * 3 2 - + +');

const evalResult = tree.eval();
console.log(evalResult);

const postfixResult = tree.postfix();
console.log(postfixResult);

const prefixResult = tree.prefix();
console.log(prefixResult);

const infixResult = tree.infix();
console.log(infixResult);

