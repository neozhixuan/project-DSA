class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    // Just point prev to prev nodes, not hard
    const leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    follower.prev = newNode;
    newNode.next = follower;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index > length) {
      return "Error";
    }
    const leader = traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.prev = leader;
    this.length--;
    return this.printList();
  }

  reverse() {
    //     let mockHead = this.tail;
    //     mockHead.prev = null;
    //     while (this.tail !== null) {
    //       mockHead.next = this.tail.prev;
    //       mockHead = mockHead.next;
    //       this.tail = this.tail.prev;
    //     }
    //     return mockHead;
    //   }
    if (!this.head.next) {
      return this.head;
    }
    // Doubly Linked List: [1,10,16,88]
    let first = this.head; // Node with value 1
    this.tail = this.head; // Tail takes the node of value 1
    let second = first.next; // Node with value 10
    while (second) {
      // While second is not null (or first.next is not null)
      const temp = second.next; // Node with value 16
      second.next = first; // Node with value 10 points to first Node with value 1
      // [1, 10, 1, 88]
      first = second; // 1 becomes 10
      // [10, 10, 1, 88]
      second = temp; // 10 becomes 16
      // [10, 16, 1, 88]
    }
    this.head.next = null; // 1 points to null
    this.head = first; // Head becomes 88
    return this.printList();
  }
}

const doublylinkedlist = new DoublyLinkedList(0);
doublylinkedlist.append(1);
doublylinkedlist.insert(1000, 1);
console.log(doublylinkedlist)
console.log(doublylinkedlist.reverse());
