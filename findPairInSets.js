// const findPairInSets = (setA, setB, x) => {
//   setA.sort((a, b) => (a - b));
//   setB.sort((a, b) => (a - b));

//   for (const numA of setA) {
//     const remaining = x - numA;

//     const recursiveSearch = (startIndex, endIndex) => {
//       if (endIndex >= startIndex) {

//         const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
//         if (setB[midIndex] === remaining) {
//           return true;
//         } else if (setB[midIndex] < remaining) {
//           const newStartIndex = (midIndex + 1);
//           const newEndIndex = endIndex;
//           return recursiveSearch(newStartIndex, newEndIndex);
//         } else if (setB[midIndex] > remaining) {
//           const newStartIndex = startIndex;
//           const newEndIndex = (midIndex - 1);
//           return recursiveSearch(newStartIndex, newEndIndex);
//         }
//       }
//       return false;
//     };

//     if (recursiveSearch(0, setB.length - 1)) {
//       return true;
//     };
//   }
//   return false;
// };

// const setA1 = [1, 2, 3, 4, 5];
// const setB1 = [6, 7, 8, 9, 10];
// const x1 = 15;
// console.log(findPairInSets(setA1, setB1, x1));

// const setA2 = [-1, -2, 3, 4, 5];
// const setB2 = [6, 7, -8, 9, 10];
// const x2 = -10;
// console.log(findPairInSets(setA2, setB2, x2));

// const setA3 = [-1, -2, -3, -4, -5];
// const setB3 = [-6, -7, -8, -9, -10];
// const x3 = -15;
// console.log(findPairInSets(setA3, setB3, x3));


// BST


class BST {
  constructor(set) {
    this.store = set;
    this.root = null;
  }

  insertNode(key) {
    let rootNode = this.root;
    const newNode = new Node(key);
    if (rootNode === null) {
      rootNode = newNode;
      return;
    }

    const currentNode = rootNode;

    while (currentNode !== null) {
      if (currentNode.key > key) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          newNode.parent = currentNode;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          newNode.parent = currentNode;
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }


  ifKeyExists(key) {
    const currentNode = this.root;

    while(currentNode !== null) {
      if (currentNode.key === key) {
        return true;
      } else if (currentNode.key > key) {
        currentNode = currentNode.left;
      } else if (currentNode.key < key) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  insertionLoop() {
    for (const num of this.store) {
      this.insertNode(num);
    }
  }
}


class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

const findPairInSets = (setA, setB, x) => {
  for (const numA of setA) {
    const remaining = x - numA;

    const bst = new BST(setB);
    bst.insertionLoop();

    const result = bst.ifKeyExists(remaining);
    if (result === true) {
      return true;
    }
  }

  return false;
};

const setA1 = [1, 2, 3, 4, 5];
const setB1 = [6, 7, 8, 9, 10];
const x1 = 15;
console.log(findPairInSets(setA1, setB1, x1));

const setA2 = [-1, -2, 3, 4, 5];
const setB2 = [6, 7, -8, 9, 10];
const x2 = -10;
console.log(findPairInSets(setA2, setB2, x2));

const setA3 = [-1, -2, -3, -4, -5];
const setB3 = [-6, -7, -8, -9, -10];
const x3 = -15;
console.log(findPairInSets(setA3, setB3, x3));



