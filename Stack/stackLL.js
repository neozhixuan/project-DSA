class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointerHolder = this.top;
      this.top = newNode;
      newNode.next = pointerHolder;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) {
      return undefined;
    }
    if (this.top == this.bottom) {
      this.bottom = null;
    } else {
      // JS is a garbage collected language
      // If you dont do a holdingPointer to hold this.top, it will
      // automatically get removed from memory, cant retrieve it anymore

      // const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return this;
    }
  }
}

const stack = new Stack();
stack.push(1)
stack.push(100)
stack.push("hi")
console.log(stack);