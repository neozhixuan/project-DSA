class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    // Left or right not necessary
    // this.left = null;
    // this.right = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      // while loop is necessary for traversion
      while (true) {
        // Check if the node is smaller than root, if so move left - else, move right to check.
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // This step is essential (not an If-Else - it will always be executed)
          // because you need to move the Node down the tree
          currentNode = currentNode.left;
          // It will loop because true is still true
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    // Base condition
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  // Taken from udemy
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    // Track parentNode to the one we are looking for,
    // as we cannot backtrack to find the parent Node.
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // 1. If there is no node on its right
        if (currentNode.right === null) {
          if (parentNode === null) {
            // Base case where node is the root node: the left node becomes root
            this.root = currentNode.left;
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.left;
          }
          // 2. If right child does not have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            // Base case where node is the root node: the left node becomes root
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            if (currentNode.value < parentNode) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          // 3. If right child has a left child
        }else{
          let leftmost = currentNode.right.left;
          let leftmostParent= currentNode.right;
          while(leftmost.left !== null){
            leftmostParent = leftmost;
            leftmost=leftmost.left;
          }
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNod === null){
            this.root = leftmost;
          }else{
            if(currentNode.value < parentNode.value){
              parentNode.left = leftmost;
            }else if(currentNode.value > parentNode.value){
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170)
console.log(tree.lookup(1))