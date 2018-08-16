class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newBSTNode = new BSTNode(value);
    this._insertNode(newBSTNode);
  }

  _insertNode(newNode) {
    let rootNode = this.root;
    if (rootNode === null) {
      this.root = newNode;
      return;
    }

    let currentNode = rootNode;

    while (currentNode !== null) {
      const currentNodeVal = currentNode.value;
      const newNodeVal = newNode.value;

      if (newNodeVal <= currentNodeVal) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          newNode.parent = currentNode;
          return;
        }
      } else {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          newNode.parent = currentNode;
          return;
        }
      }
    }
  }

  postOrderTraversal(node) {
    if (node === null) {
      return;
    }

    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);

    console.log(node.value);
  }

  inOrderTraversal(node) {
    if (node === null) {
      return;
    }

    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }

  preOrderTraversal(node) {
    if (node === null) {
      return;
    }

    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }
}

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}


const bst = new BST();

bst.insert(5);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(2);
const rootNode = bst.root;

console.log('Post Order Traversal');
bst.postOrderTraversal(rootNode);

console.log('In Order Traversal');
bst.inOrderTraversal(rootNode);

console.log('Pre Order Traversal');
bst.preOrderTraversal(rootNode);