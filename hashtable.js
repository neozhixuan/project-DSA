// Notes:
// 1. If you set multiple pairs with the same key, it will register in the same address.
// 2. The hash is the same, if the KEY is the same. The value does not matter.
// 3.

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    if (!this.data[address]) {
      return undefined;
    } else {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] == key) {
          return this.data[address][i][1];
        }
      }
    }
  }
  keys() {
    let empty = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        empty.push(this.data[i]);
      }
    }
    return empty;
  }
}

let table = new HashTable(59);
table.set("Phone", 1);
table.set("Table", 2);
table.set("Day", 3);
console.log("The value for Table is " + table.get("Table"));
console.log(table.keys());
