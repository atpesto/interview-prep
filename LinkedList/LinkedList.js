class LinkedList {
  constructor(arr) {
    this.head = null;

    this.initialiseLinkedList(arr);
  }

  initialiseLinkedList(arr) {
    arr.forEach((value) => {
      this.insertNode(value);
    });
  }

  insertNode(value) {
    const headNode = this.head;

    const newNode = new ListNode(value);
    if (headNode === null) {
      this.head = newNode;
      return;
    }

    newNode.next = headNode;
    this.head = newNode;
    return;
  }

  traverseList() {
    const head = this.head;

    let currentNode = head;

    console.log('The list is: ');
    while(currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  appendNode(val) {
    const head = this.head;

    const newNode = new ListNode(val);

    let currentNode = head;

    while((currentNode.next) !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }


  getNodeAtPosition(position) {
    let currentNode = this.head;

    while ((position > 0) && (currentNode !== null)) {
      currentNode = currentNode.next;
      position -= 1;
    }

    return currentNode;
  }

  removeKFromList(k) {
    let headNode = this.head;

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null) {
      if (currentNode.value === k) {
        if (prevNode === null) {
          this.head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
      } else {
        prevNode = currentNode;
      }
      currentNode = currentNode.next;
    }

  }
}


class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const customLinkedList = new LinkedList([1, 2, 3, 4]);
customLinkedList.insertNode(5);
customLinkedList.appendNode(0);
customLinkedList.traverseList();
const nodeAt2 = customLinkedList.getNodeAtPosition(8);
if (nodeAt2 === null) {
  console.log('Nothing found here');
} else {
  console.log('The node at given position is: ', nodeAt2.value);
}
customLinkedList.removeKFromList(0);
customLinkedList.traverseList();

