class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // value is the value of the head node.
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    // this.next = null;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    // Because this.tail = this.head
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    // Iterate through the linked list
    while (currentNode !== null) {
      array.push(currentNode);
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
    // Checks for append and prepend
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    // 1. Hold the pointer from leader to next 
    // 2. Leader points to new node
    // 3. New node points to held pointer
    // NOTE: You must traverse to the node before the place you want to insert. (index - 1)
    const leader = this.traverseToIndex(index-1);
    let pointerToNext = leader.next;
    leader.next = newNode;
    newNode.next = pointerToNext;
    this.length++;
    return this.printList();
  }
  
  remove(index){
    if(index>length){
      return "Error";
    }
    const leader = traverseToIndex(index-1);
    const unwantedNode = leader.next
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const linkedlist = new LinkedList(0);
linkedlist.append(1);
linkedlist.prepend(-1);
console.log(linkedlist.insert(10, 2));
console.log(linkedlist.traverseToIndex(3));
